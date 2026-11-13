"use client";
import { useState } from "react";

/** A working copy of an opt-in, for review: it behaves like the real one but sends nothing. */
export function SampleForm({ id, field, checkbox, consent, button }: { id: string; field: string; checkbox?: string; consent: string; button: string }) {
  const [done, setDone] = useState(false);
  return (
    <form className="mt-4 space-y-3 rounded-md border border-dashed border-gray-300 bg-gray-50 p-4" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">Demonstration — sends nothing</div>
      <label className="block text-sm font-medium text-gray-900" htmlFor={`${id}-phone`}>{field}</label>
      <input id={`${id}-phone`} type="tel" required placeholder="(412) 555-0123" className="w-full max-w-xs rounded-md border border-gray-300 px-3 py-2 text-sm" />
      {checkbox && (
        <label className="flex items-start gap-2 text-sm text-gray-900" htmlFor={`${id}-agree`}>
          <input id={`${id}-agree`} type="checkbox" required className="mt-1" /> <span>{checkbox}</span>
        </label>
      )}
      <p className="text-xs text-gray-600">{consent}</p>
      <button type="submit" className="rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white">{button}</button>
      {done && <p className="text-sm text-gray-700" role="status">This is a demonstration — no text was sent.</p>}
    </form>
  );
}
