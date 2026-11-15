import { siteResponse } from "@/lib/site-pages";

export const revalidate = 3600;
export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  return siteResponse((await params).slug);
}
