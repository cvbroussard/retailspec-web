"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { updateProfile } from "@/app/actions/profiling";

const inputStyles =
  "w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20 transition-colors";

function Step1({ onSubmit }: { onSubmit: (data: Record<string, string>) => void }) {
  const [jobTitle, setJobTitle] = useState("");
  const [companySize, setCompanySize] = useState("");

  return (
    <>
      <p className="text-sm font-medium text-gray-900 mb-1">
        Help us personalize your experience
      </p>
      <p className="text-xs text-gray-500 mb-4">
        Two quick questions — takes 10 seconds
      </p>
      <div className="space-y-3">
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          placeholder="Your job title"
          className={inputStyles}
        />
        <select
          value={companySize}
          onChange={(e) => setCompanySize(e.target.value)}
          className={inputStyles}
        >
          <option value="">Company size</option>
          <option value="1-10">1–10 employees</option>
          <option value="11-50">11–50 employees</option>
          <option value="51-200">51–200 employees</option>
          <option value="201-500">201–500 employees</option>
          <option value="500+">500+ employees</option>
        </select>
        <button
          onClick={() => onSubmit({ jobTitle, companySize })}
          disabled={!jobTitle && !companySize}
          className="w-full rounded-lg bg-sage px-4 py-2.5 text-sm font-medium text-white hover:bg-sage-hover transition-colors disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </>
  );
}

function Step2({ onSubmit }: { onSubmit: (data: Record<string, string>) => void }) {
  const [industry, setIndustry] = useState("");
  const [numLocations, setNumLocations] = useState("");

  return (
    <>
      <p className="text-sm font-medium text-gray-900 mb-1">
        Almost there
      </p>
      <p className="text-xs text-gray-500 mb-4">
        Help us understand your business better
      </p>
      <div className="space-y-3">
        <input
          type="text"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          placeholder="Industry (e.g., Apparel, Electronics)"
          className={inputStyles}
        />
        <select
          value={numLocations}
          onChange={(e) => setNumLocations(e.target.value)}
          className={inputStyles}
        >
          <option value="">Number of retail locations</option>
          <option value="1-5">1–5</option>
          <option value="6-10">6–10</option>
          <option value="11-20">11–20</option>
          <option value="21-50">21–50</option>
          <option value="50+">50+</option>
        </select>
        <button
          onClick={() => onSubmit({ industry, numLocations })}
          disabled={!industry && !numLocations}
          className="w-full rounded-lg bg-sage px-4 py-2.5 text-sm font-medium text-white hover:bg-sage-hover transition-colors disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </>
  );
}

function Step3({ onSubmit }: { onSubmit: (data: Record<string, string>) => void }) {
  const [challenges, setChallenges] = useState("");

  return (
    <>
      <p className="text-sm font-medium text-gray-900 mb-1">
        One last thing
      </p>
      <p className="text-xs text-gray-500 mb-4">
        This helps us show you the most relevant content
      </p>
      <div className="space-y-3">
        <textarea
          value={challenges}
          onChange={(e) => setChallenges(e.target.value)}
          placeholder="What's your biggest operational challenge right now?"
          rows={3}
          className={inputStyles}
        />
        <button
          onClick={() => onSubmit({ challenges })}
          disabled={!challenges}
          className="w-full rounded-lg bg-sage px-4 py-2.5 text-sm font-medium text-white hover:bg-sage-hover transition-colors disabled:opacity-50"
        >
          Done
        </button>
      </div>
    </>
  );
}

export function ProfilingPrompt() {
  const { data: session, update } = useSession();
  const [dismissed, setDismissed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!session?.user) return null;

  const step = session.user.profilingStep ?? 0;

  // Profiling complete or dismissed
  if (step >= 3 || dismissed) return null;

  async function handleSubmit(data: Record<string, string>) {
    setSubmitting(true);
    const result = await updateProfile(data);
    if (result.success) {
      // Update session to reflect new profiling step
      await update();
      setDismissed(true);
    }
    setSubmitting(false);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 rounded-xl border border-gray-200 bg-white p-5 shadow-lg animate-fade-in-up">
      {/* Close button */}
      <button
        onClick={() => setDismissed(true)}
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        aria-label="Dismiss"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {submitting ? (
        <div className="py-4 text-center text-sm text-gray-500">
          Saving...
        </div>
      ) : step === 0 ? (
        <Step1 onSubmit={handleSubmit} />
      ) : step === 1 ? (
        <Step2 onSubmit={handleSubmit} />
      ) : step === 2 ? (
        <Step3 onSubmit={handleSubmit} />
      ) : null}
    </div>
  );
}
