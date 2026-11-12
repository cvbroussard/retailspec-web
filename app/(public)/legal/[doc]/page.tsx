import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LEGAL_DOCS, PLATFORM_ORIGIN } from "@/lib/public-pages";

/** RetailSpec's agreements, from Control → Agreements on the platform (one source, versioned) — re-read every 5 minutes. */
export const revalidate = 300;

type Doc = { doc: string; name: string; version: string | null; body: string | null };

async function load(doc: string): Promise<Doc | null> {
  try {
    const r = await fetch(`${PLATFORM_ORIGIN}/api/public/legal/${doc}`, { next: { revalidate: 300 } });
    if (!r.ok) return null;
    return (await r.json()) as Doc;
  } catch { return null; }
}

export async function generateMetadata({ params }: { params: Promise<{ doc: string }> }): Promise<Metadata> {
  const { doc } = await params;
  const d = LEGAL_DOCS.find((x) => x.key === doc);
  return { title: d?.name || "Legal" };
}

/** The handful of markdown the agreements use: headings, paragraphs, bullet lists, **bold**. Text only — no HTML in. */
function Markdown({ text }: { text: string }) {
  const inline = (s: string) => s.split(/(\*\*[^*]+\*\*)/g).map((p, i) => (p.startsWith("**") && p.endsWith("**") ? <strong key={i} className="text-gray-900">{p.slice(2, -2)}</strong> : <span key={i}>{p}</span>));
  const blocks: React.ReactNode[] = [];
  let list: { text: string; sub: boolean }[] = [];
  const flush = () => { if (list.length) { blocks.push(<ul key={blocks.length} className="my-3 list-disc space-y-1.5 pl-5">{list.map((l, i) => <li key={i} className={l.sub ? "ml-5 list-[circle]" : ""}>{inline(l.text)}</li>)}</ul>); list = []; } };
  for (const raw of text.split(/\n/)) {
    const line = raw.trimEnd();
    const item = line.match(/^(\s*)- (.*)$/);
    if (item) { list.push({ text: item[2], sub: item[1].length >= 2 }); continue; }
    flush();
    if (!line.trim()) continue;
    if (line.startsWith("# ")) blocks.push(<h1 key={blocks.length} className="text-2xl font-semibold tracking-tight text-gray-900">{line.slice(2)}</h1>);
    else if (line.startsWith("## ")) blocks.push(<h2 key={blocks.length} className="mt-8 text-lg font-semibold text-gray-900">{line.slice(3)}</h2>);
    else if (line.startsWith("### ")) blocks.push(<h3 key={blocks.length} className="mt-5 font-semibold text-gray-900">{line.slice(4)}</h3>);
    else blocks.push(<p key={blocks.length} className="my-3">{inline(line)}</p>);
  }
  flush();
  return <>{blocks}</>;
}

export default async function LegalPage({ params }: { params: Promise<{ doc: string }> }) {
  const { doc } = await params;
  const meta = LEGAL_DOCS.find((x) => x.key === doc);
  if (!meta) notFound();
  const d = await load(doc);
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <article className="rounded-lg border border-gray-200 bg-white p-8 leading-relaxed text-gray-700">
        {d?.body ? (
          <>
            {d.version && <div className="mb-4 text-xs font-semibold uppercase tracking-wide text-gray-500">Version {d.version}</div>}
            <Markdown text={d.body} />
          </>
        ) : (
          <>
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900">{meta.name}</h1>
            <p className="mt-3">This document is being finalised. Contact RetailSpec if you need a copy before it’s published here.</p>
          </>
        )}
      </article>
    </div>
  );
}
