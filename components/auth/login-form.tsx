"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface LoginFormProps {
  callbackUrl: string;
}

export function LoginForm({ callbackUrl }: LoginFormProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const inputStyles =
    "w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20 transition-colors";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.ok) {
      router.push(callbackUrl);
    } else {
      setError("Invalid email or password");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputStyles}
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputStyles}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        className="w-full"
        disabled={loading}
      >
        {loading ? "Signing in..." : "Sign In"}
      </Button>

      <p className="text-sm text-center text-gray-500">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-sage font-medium hover:underline">
          Create one free
        </Link>
      </p>
    </form>
  );
}
