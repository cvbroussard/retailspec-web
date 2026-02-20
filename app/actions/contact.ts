"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  locations: string;
  challenge: string;
}

export async function submitContactForm(data: ContactFormData) {
  const { name, email, company, locations, challenge } = data;

  if (!name || !email || !company || !locations) {
    return { success: false, error: "Missing required fields." };
  }

  try {
    await resend.emails.send({
      from: "RetailSpec <onboarding@resend.dev>",
      to: "carl@bsquaredconstruction.com",
      subject: `Demo request from ${name} at ${company}`,
      replyTo: email,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        `Locations: ${locations}`,
        ``,
        `Challenge:`,
        challenge || "(not provided)",
      ].join("\n"),
    });

    return { success: true };
  } catch {
    return { success: false, error: "Failed to send. Please try again." };
  }
}
