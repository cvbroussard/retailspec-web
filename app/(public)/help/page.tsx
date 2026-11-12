import type { Metadata } from "next";

/** Public support page (operator 11-12): open even while the rest of the site is behind the pre-launch password
 *  (proxy.ts GATE_PUBLIC_PATHS). Clover's app listing points here; the full help centre grows under /help later. */
const SUPPORT_EMAIL = "support@retailspec.com";

export const metadata: Metadata = {
  title: "Help & support",
  description: "How to reach RetailSpec support, and how the RetailSpec app for Clover works.",
};

export default function HelpPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-6 py-12">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">Help &amp; support</h1>
          <p className="mt-2 text-gray-600">We&apos;re here when you need us — in the console, on a call, or by email.</p>
          <div className="mt-10 space-y-12 text-gray-700 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Get in touch</h2>
              <ul className="list-disc space-y-2 pl-5">
                <li><strong className="text-gray-900">In your console:</strong> choose <strong>Get help</strong> to ask a question, request a call, or share your screen with our team.</li>
                <li><strong className="text-gray-900">By email:</strong> <span className="select-all font-medium text-gray-900">{SUPPORT_EMAIL}</span>.</li>
              </ul>
            </section>

            <section id="clover" className="space-y-4 scroll-mt-24">
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900">RetailSpec for Clover</h2>
              <p>The RetailSpec app connects a Clover register to your RetailSpec account, so the store and the back office work from the same catalogue, stock and sales.</p>

              <h3 className="pt-2 text-lg font-semibold text-gray-900">What it does</h3>
              <ul className="list-disc space-y-2 pl-5">
                <li>Keeps Clover's items, prices, barcodes, categories and stock up to date from your RetailSpec catalogue. It only changes Clover items that are linked to RetailSpec.</li>
                <li>When you first connect, matches your existing Clover items to your RetailSpec products by barcode, then SKU. You review the matches before anything on Clover changes.</li>
                <li>Records completed Clover sales and refunds in RetailSpec, with the tax and payment types Clover charged, and takes the stock off at that store.</li>
                <li>Sends those sales on to QuickBooks Online or Xero through RetailSpec, if you use them.</li>
              </ul>
              <p>It never creates or changes Clover orders or payments.</p>

              <h3 className="pt-2 text-lg font-semibold text-gray-900">Connect</h3>
              <ol className="list-decimal space-y-2 pl-5">
                <li>In your RetailSpec console, open <strong>Point of sale</strong> and choose <strong>Connect</strong> beside Clover.</li>
                <li>Sign in to Clover and approve the RetailSpec app for your merchant account.</li>
                <li>Pick the RetailSpec store this Clover merchant belongs to. One Clover merchant connects to one store.</li>
                <li>Review the item matches, then choose when RetailSpec starts recording your Clover sales.</li>
              </ol>

              <h3 className="pt-2 text-lg font-semibold text-gray-900">Disconnect</h3>
              <p>In <strong>Point of sale</strong>, choose <strong>Disconnect</strong> beside the store, or uninstall the RetailSpec app from your Clover account. Sales already recorded stay in RetailSpec; nothing on Clover is deleted.</p>
            </section>

            <section className="space-y-2 text-sm text-gray-500">
              <p>See also our <a className="underline" href="/legal/terms">Terms of Service</a> and <a className="underline" href="/legal/privacy">Privacy Policy</a>.</p>
            </section>
          </div>
      </div>
    </>
  );
}
