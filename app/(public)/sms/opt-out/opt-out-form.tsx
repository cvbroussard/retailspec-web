"use client";
import { useState } from "react";

export function OptOutForm() {
  const [phone, setPhone] = useState("");
  const [state, setState] = useState<{ ok: boolean; text: string } | null>(null);
  const [busy, setBusy] = useState(false);
  return (
    <form className="mt-6 max-w-sm space-y-3 rounded-lg border border-gray-200 bg-white p-5" onSubmit={async (e) => {
      e.preventDefault(); setBusy(true); setState(null);
      const r = await fetch("/api/sms-opt-out", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ phone }) }).catch(() => null);
      const j = await r?.json().catch(() => null);
      setBusy(false);
      setState(r?.ok ? { ok: true, text: "Done. Texts sent through RetailSpec to this number have stopped." } : { ok: false, text: j?.error || "That didn't go through. Try again, or reply STOP to any text." });
    }}>
      <label htmlFor="optout-phone" className="block text-sm font-medium text-gray-900">Mobile number</label>
      <input id="optout-phone" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(412) 555-0123" autoComplete="tel" className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm" />
      <button type="submit" disabled={busy} className="rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white disabled:opacity-50">{busy ? "Stopping…" : "Stop texts"}</button>
      {state && <p role="status" className={`text-sm ${state.ok ? "text-gray-800" : "text-red-700"}`}>{state.text}</p>}
    </form>
  );
}
