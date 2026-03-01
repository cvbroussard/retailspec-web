"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const inputStyles =
    "w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20 transition-colors";

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Register
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Registration failed");
        setLoading(false);
        return;
      }

      // Auto sign-in after registration
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.ok) {
        router.push("/");
      } else {
        setError("Account created but sign-in failed. Please sign in manually.");
        setLoading(false);
      }
    } catch {
      setError("Network error. Please try again.");
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
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

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
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={inputStyles}
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          Company
          <span className="text-gray-400 font-normal ml-1">(optional)</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={inputStyles}
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
          name="password"
          required
          minLength={8}
          value={formData.password}
          onChange={handleChange}
          className={inputStyles}
          placeholder="At least 8 characters"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        className="w-full"
        disabled={loading}
      >
        {loading ? "Creating account..." : "Create Free Account"}
      </Button>

      <p className="text-sm text-center text-gray-500">
        Already have an account?{" "}
        <Link href="/login" className="text-sage font-medium hover:underline">
          Sign in
        </Link>
      </p>
    </form>
  );
}
