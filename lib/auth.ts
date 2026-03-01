import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import sql from "./db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days — marketing site, long sessions
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = (credentials.email as string)?.toLowerCase().trim();
        const password = credentials.password as string;
        if (!email || !password) return null;

        const rows = await sql`
          SELECT id, email, name, company, role, password_hash, profiling_step
          FROM prospects WHERE email = ${email}
        `;
        const prospect = rows[0];
        if (!prospect || !prospect.password_hash) return null;

        const valid = await compare(password, prospect.password_hash);
        if (!valid) return null;

        // Update last login
        sql`UPDATE prospects SET last_login_at = NOW() WHERE id = ${prospect.id}`.catch(
          () => {}
        );

        return {
          id: prospect.id.toString(),
          name: prospect.name,
          email: prospect.email,
          role: prospect.role,
          company: prospect.company,
          profilingStep: prospect.profiling_step,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role || "guest";
        token.company = user.company;
        token.profilingStep = user.profilingStep ?? 0;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string;
        session.user.role = token.role as string;
        session.user.company = token.company as string;
        session.user.profilingStep = token.profilingStep as number;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
