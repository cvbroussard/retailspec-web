import type { Metadata } from "next";
import Link from "next/link";
import { HELP_REPLY, STOP_REPLY, SAMPLES } from "@/lib/sms-program";

export const metadata: Metadata = { title: "Text messages", description: "The text messages sent through RetailSpec: who sends them, what they are, how to opt in and out." };

const H2 = "text-xl font-semibold tracking-tight text-gray-900";

export default function SmsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 leading-relaxed text-gray-700">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">Text messages</h1>
      <p className="mt-3">RetailSpec is software that independent stores use to run their shops. Texts sent through RetailSpec come from one of two senders, and only to people who have asked for them.</p>

      <section className="mt-10 space-y-3">
        <h2 className={H2}>1. Texts from a store</h2>
        <p>Stores that use RetailSpec can text their own shoppers. Each text names the store it comes from, and the store is responsible for it.</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li><strong className="text-gray-900">Receipts:</strong> when you ask for your receipt by text at the register. One message.</li>
          <li><strong className="text-gray-900">Order updates:</strong> confirmation, ready for pickup, shipped, delivered — when you turn them on in your account with the store.</li>
          <li><strong className="text-gray-900">Offers and news:</strong> only if you separately tick a box to receive them. Up to 4 messages a month. Consent is never a condition of purchase.</li>
        </ul>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className={H2}>2. Texts from RetailSpec</h2>
        <p>RetailSpec texts the people who use RetailSpec to run a store — owners and staff — when they turn this on in their account: sign-in codes, security notices and support callbacks.</p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className={H2}>How you opt in</h2>
        <p>Every text program starts with your choice: you enter your number and agree to the program described right beside it. <Link href="/sms/opt-in" className="font-medium text-gray-900 underline">See each opt-in, with its exact wording</Link>.</p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className={H2}>How you stop</h2>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Reply <strong className="text-gray-900">STOP</strong> to any text. We confirm with: <q>{STOP_REPLY}</q></li>
          <li>Reply <strong className="text-gray-900">HELP</strong> for help. We answer: <q>{HELP_REPLY}</q></li>
          <li>Or <Link href="/sms/opt-out" className="font-medium text-gray-900 underline">stop texts to your number on the web</Link>, or turn them off in your account settings.</li>
        </ul>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className={H2}>Costs and frequency</h2>
        <p>Message and data rates may apply. Message frequency varies with your orders and activity; offers are at most 4 a month. Carriers are not liable for delayed or undelivered messages.</p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className={H2}>Your number and your privacy</h2>
        <p><strong className="text-gray-900">Mobile numbers and text consent are never sold, rented or shared with anyone for their marketing.</strong> A number is used only for the texts you agreed to. See our <Link href="/legal/privacy" className="underline">Privacy Policy</Link> and <Link href="/legal/terms" className="underline">Terms</Link>.</p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className={H2}>Example messages</h2>
        <div className="space-y-2">
          {SAMPLES.map((s) => (
            <div key={s.kind} className="rounded-lg border border-gray-200 bg-white p-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">{s.kind}</div>
              <div className="mt-1 text-sm text-gray-800">{s.text}</div>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-10 text-sm text-gray-500">Questions: <span className="select-all">support@retailspec.com</span> · <Link href="/help" className="underline">Help</Link></p>
    </div>
  );
}
