import type { Metadata } from "next";

/** eppux.com (operator 11-12): the company page for Eppux, LLC — the legal entity behind RetailSpec — for carrier /
 *  Twilio registration and anyone checking who we are. Served on eppux.com by proxy.ts (host rewrite, never gated). */
export const metadata: Metadata = {
  title: { absolute: "Eppux, LLC — makers of RetailSpec" },
  description: "Eppux, LLC is a Pittsburgh software company. It builds and operates RetailSpec, retail management software for independent stores.",
};

const R = "https://retailspec.com";
const A = "font-medium text-gray-900 underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900";

export default function EppuxPage() {
  return (
    <div className="min-h-screen bg-white text-gray-700">
      <div className="mx-auto max-w-2xl px-6 py-16 leading-relaxed">
        <div className="text-sm font-semibold uppercase tracking-widest text-gray-500">Eppux, LLC</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900">We build RetailSpec.</h1>
        <p className="mt-5 text-lg">Eppux, LLC is a software company in Pittsburgh, Pennsylvania. We build and operate <strong className="text-gray-900">RetailSpec</strong> — retail management software for established independent stores: catalogue and inventory, point of sale, online store, customers and accounting in one place.</p>

        <section className="mt-12 space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">Text messages</h2>
          <p>Stores that use RetailSpec can text their own shoppers — receipts, order and pickup updates, and offers only to people who separately agree. RetailSpec also texts its own users sign-in codes and account alerts. Every text names who it is from, and you can reply STOP at any time.</p>
          <p><a className={A} href={`${R}/sms`}>About our text messages</a> · <a className={A} href={`${R}/sms/opt-in`}>How people opt in</a> · <a className={A} href={`${R}/sms/opt-out`}>Stop texts</a></p>
        </section>

        <section className="mt-12 space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">Policies</h2>
          <p><a className={A} href={`${R}/legal/privacy`}>Privacy Policy</a> · <a className={A} href={`${R}/legal/terms`}>Terms of Service</a> · <a className={A} href={`${R}/help`}>Help &amp; support</a></p>
        </section>

        <section className="mt-12 space-y-1">
          <h2 className="text-lg font-semibold text-gray-900">Contact</h2>
          <p>Eppux, LLC (doing business as RetailSpec)</p>
          <p>116 Roycroft Ave, Pittsburgh, PA 15228, USA</p>
          <p>Support: <span className="select-all">support@retailspec.com</span> · Legal: <span className="select-all">legal@retailspec.com</span></p>
        </section>

        <footer className="mt-16 border-t border-gray-200 pt-6 text-sm text-gray-500">© {new Date().getFullYear()} Eppux, LLC</footer>
      </div>
    </div>
  );
}
