import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProfilingPrompt } from "@/components/profiling/profiling-prompt";

/** The marketing site (behind the pre-launch password until launch — proxy.ts). */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <ProfilingPrompt />
    </>
  );
}
