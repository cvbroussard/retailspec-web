import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    role?: string;
    company?: string;
    profilingStep?: number;
  }
  interface Session {
    user: {
      id?: string;
      role?: string;
      company?: string;
      profilingStep?: number;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    company?: string;
    profilingStep?: number;
  }
}
