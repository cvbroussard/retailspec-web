"use server";

import sql from "@/lib/db";
import { auth } from "@/lib/auth";

export async function updateProfile(data: Record<string, string>) {
  const session = await auth();
  if (!session?.user?.id) return { success: false };

  const prospectId = parseInt(session.user.id);

  await sql`
    UPDATE prospects SET
      job_title = COALESCE(${data.jobTitle || null}, job_title),
      company_size = COALESCE(${data.companySize || null}, company_size),
      industry = COALESCE(${data.industry || null}, industry),
      num_locations = COALESCE(${data.numLocations || null}, num_locations),
      challenges = COALESCE(${data.challenges || null}, challenges),
      company = COALESCE(${data.company || null}, company),
      profiling_step = profiling_step + 1,
      updated_at = NOW()
    WHERE id = ${prospectId}
  `;

  return { success: true };
}
