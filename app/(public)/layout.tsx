import Link from "next/link";
import { LEGAL_DOCS } from "@/lib/public-pages";

/** The public shell: logo, links among the public pages, a legal footer — and nothing that leads into the gated site. */
export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-6 py-4">
          <span className="inline-flex items-center gap-2.5">
            <span aria-hidden className="grid h-5 w-5 grid-cols-2 gap-[2px]">
              <span className="rounded-[2px] bg-gray-900" /><span className="rounded-[2px] bg-sage" />
              <span className="rounded-[2px] bg-sage opacity-60" /><span className="rounded-[2px] bg-gray-900" />
            </span>
            <span className="text-base font-semibold tracking-tight text-gray-900">RetailSpec</span>
          </span>
          <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-600">
            <Link href="/help" className="hover:text-gray-900">Help</Link>
            <Link href="/legal/terms" className="hover:text-gray-900">Terms</Link>
            <Link href="/legal/privacy" className="hover:text-gray-900">Privacy</Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-4xl flex-wrap gap-x-5 gap-y-2 px-6 py-6 text-sm text-gray-500">
          <span>© {new Date().getFullYear()} RetailSpec</span>
          <Link href="/help" className="hover:text-gray-800">Help & support</Link>
          {LEGAL_DOCS.map((d) => <Link key={d.key} href={`/legal/${d.key}`} className="hover:text-gray-800">{d.name}</Link>)}
        </div>
      </footer>
    </div>
  );
}
