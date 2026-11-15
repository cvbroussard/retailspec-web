import { siteResponse } from "@/lib/site-pages";

export const revalidate = 3600;
export async function GET() {
  return siteResponse("index");
}
