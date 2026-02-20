"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { submitContactForm } from "@/app/actions/contact";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    locations: "",
    challenge: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const result = await submitContactForm(formData);

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMsg(result.error || "Something went wrong.");
    }
  }

  const inputStyles =
    "w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20 transition-colors";

  if (status === "success") {
    return (
      <div className="rounded-xl border border-sage bg-sage-light p-8 text-center">
        <h2 className="text-xl font-semibold text-gray-900">Thank you.</h2>
        <p className="mt-2 text-gray-600">
          We&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
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
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
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
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          value={formData.company}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="locations" className="block text-sm font-medium text-gray-700 mb-1.5">
          Number of locations
        </label>
        <select
          id="locations"
          name="locations"
          required
          value={formData.locations}
          onChange={handleChange}
          className={inputStyles}
        >
          <option value="">Select</option>
          <option value="1-5">1–5</option>
          <option value="6-10">6–10</option>
          <option value="11-20">11–20</option>
          <option value="21-50">21–50</option>
          <option value="50+">50+</option>
        </select>
      </div>

      <div>
        <label htmlFor="challenge" className="block text-sm font-medium text-gray-700 mb-1.5">
          What&apos;s your biggest operational challenge right now?
        </label>
        <textarea
          id="challenge"
          name="challenge"
          rows={4}
          value={formData.challenge}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 text-center">{errorMsg}</p>
      )}

      <Button type="submit" variant="primary" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Request a Demo"}
      </Button>

      <p className="text-sm text-gray-500 text-center">
        Typical response time: within one business day.
      </p>
    </form>
  );
}
