import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import sql from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { email, password, name, company } = await request.json();

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check for existing account
    const existing = await sql`
      SELECT id FROM prospects WHERE email = ${normalizedEmail}
    `;
    if (existing.length > 0) {
      return NextResponse.json(
        { error: "An account with this email already exists" },
        { status: 409 }
      );
    }

    // Hash password and insert
    const passwordHash = await hash(password, 12);
    const rows = await sql`
      INSERT INTO prospects (email, name, company, password_hash, source)
      VALUES (${normalizedEmail}, ${name}, ${company || null}, ${passwordHash}, 'credentials')
      RETURNING id, email, name, role
    `;

    return NextResponse.json({
      success: true,
      prospect: { id: rows[0].id, email: rows[0].email },
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Registration failed" },
      { status: 500 }
    );
  }
}
