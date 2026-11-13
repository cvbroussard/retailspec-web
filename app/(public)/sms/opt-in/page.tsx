import type { Metadata } from "next";
import Link from "next/link";
import { OPT_INS } from "@/lib/sms-program";
import { SampleForm } from "./sample-form";

export const metadata: Metadata = { title: "How people opt in to texts", description: "Every place people opt in to texts sent through RetailSpec, with the exact consent wording." };

const KIND: Record<string, string> = { "one-time": "One message", transactional: "Order updates", marketing: "Offers (marketing)", account: "Account texts" };

export default function OptInPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 leading-relaxed text-gray-700">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">How people opt in to texts</h1>
      <p className="mt-3">These are the only places a phone number is collected for texts. Each shows its wording beside the number field, and nothing is pre-ticked. Where the page is for members only, it is shown here so it can be reviewed; <q>Golden Beetle</q> stands in for the store&apos;s name. <Link href="/sms" className="underline">About our text messages</Link>.</p>

      <div className="mt-10 space-y-8">
        {OPT_INS.map((o) => (
          <section key={o.id} id={o.id} className="rounded-lg border border-gray-200 bg-white p-5">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-semibold text-gray-900">{o.where}</h2>
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">{KIND[o.kind]}</span>
              {o.members && <span className="rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-800">Members only — shown for review</span>}
            </div>
            <p className="mt-1 text-sm text-gray-500">For: {o.who}</p>
            <SampleForm id={o.id} field={o.field} checkbox={o.checkbox?.replace("{store}", "Golden Beetle")} consent={o.consent.replace(/\{store\}/g, "Golden Beetle")} />
          </section>
        ))}
      </div>
    </div>
  );
}
