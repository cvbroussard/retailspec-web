import type { Metadata } from "next";
import Link from "next/link";
import { STOP_REPLY } from "@/lib/sms-program";
import { OptOutForm } from "./opt-out-form";

export const metadata: Metadata = { title: "Stop text messages", description: "Stop texts sent through RetailSpec to your number." };

export default function OptOutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 leading-relaxed text-gray-700">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">Stop text messages</h1>
      <p className="mt-3">The quickest way: reply <strong className="text-gray-900">STOP</strong> to any text. We confirm with: <q>{STOP_REPLY}</q> Reply <strong className="text-gray-900">HELP</strong> for help.</p>
      <p className="mt-3">Or enter your number here to stop all texts sent through RetailSpec to it — from every store and from RetailSpec. You can also turn texts off in your account settings with a store.</p>
      <OptOutForm />
      <p className="mt-10 text-sm text-gray-500"><Link href="/sms" className="underline">About our text messages</Link> · <span className="select-all">support@retailspec.com</span></p>
    </div>
  );
}
