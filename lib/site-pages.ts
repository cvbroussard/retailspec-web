/**
 * THE MARKETING SITE (operator 11-15: ported from the approved prototype, /home/carlv/marketing-prototype → port_to_web.py).
 * Each page is the approved HTML in content/site/<slug>.html, served as is by app/(mkt) route handlers, behind the
 * pre-launch password (proxy.ts). Live parts: the hardware page's Certified list comes from the platform's hardware
 * catalogue (Control → Platform → Hardware catalogue, /api/public/hardware), and the demo form posts to /api/demo.
 * Long term the site is rebuilt in Site Studio (ruled); until then, edit the prototype and re-run the port.
 */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { PLATFORM_ORIGIN } from "@/lib/public-pages";

const DIR = path.join(process.cwd(), "content", "site");
const SLUG = /^[a-z0-9-]+$/;

const esc = (s: unknown) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
const KIND: Record<string, string> = {
  counter: "POS counter", tablet: "Tablet", phone: "Phone", handheld: "Handheld", kiosk: "Kiosk", display: "Customer display", computer: "Computer",
  player: "Signage player", reader: "Card reader", receipt: "Receipt printer", label: "Label printer", scanner: "Barcode scanner", drawer: "Cash drawer", server: "Print server",
};

/** The Certified rows from the platform's catalogue; null keeps the page's own list (feed down, or nothing published yet). */
async function certifiedRows(): Promise<string | null> {
  try {
    const r = await fetch(`${PLATFORM_ORIGIN}/api/public/hardware`, { next: { revalidate: 3600 } });
    if (!r.ok) return null;
    const j = await r.json();
    const fams = (j?.families || []).filter((f: any) => f.status === "certified");
    if (!fams.length) return null;
    return fams.map((f: any) => {
      const name = [f.maker, f.family].filter(Boolean).join(" ");
      const small = f.models ? `<small>${esc(f.models)}</small>` : "";
      return `<tr><td><b>${esc(name)}</b>${small}</td><td data-k="Role">${esc(KIND[f.kind] || f.kind)}</td><td data-k="In RetailSpec">${esc(f.uses || "")}</td></tr>`;
    }).join("");
  } catch {
    return null;
  }
}

export async function sitePage(slug: string): Promise<string | null> {
  if (!SLUG.test(slug)) return null;
  let html: string;
  try {
    html = await readFile(path.join(DIR, `${slug}.html`), "utf8");
  } catch {
    return null;
  }
  html = html.replaceAll("{{PLATFORM_ORIGIN}}", PLATFORM_ORIGIN);
  if (slug === "hardware") {
    const rows = await certifiedRows();
    if (rows) html = html.replace(/<!--CERT-->[\s\S]*?<!--\/CERT-->/, `<!--CERT-->${rows}<!--/CERT-->`);
  }
  return html;
}

export async function siteResponse(slug: string): Promise<Response> {
  const html = await sitePage(slug);
  if (html == null) {
    const nf = (await sitePage("index")) ? `<!doctype html><meta charset="utf-8"><title>Not found</title><p style="font:16px system-ui;padding:40px">That page isn't here. <a href="/">Go to the home page</a>.</p>` : "Not found";
    return new Response(nf, { status: 404, headers: { "content-type": "text/html; charset=utf-8" } });
  }
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, s-maxage=600, stale-while-revalidate=86400" } });
}
