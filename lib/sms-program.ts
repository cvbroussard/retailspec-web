/**
 * THE SMS PROGRAM — one source for the wording on /sms, /sms/opt-in and /sms/opt-out (operator 11-12, public pages
 * ruling). Carriers check that this wording matches what people see where they opt in: change it HERE and in the
 * product together, and update the Twilio campaign first if a new kind of message is added.
 */
export const HELP_REPLY = "RetailSpec: help at retailspec.com/help or support@retailspec.com. Msg & data rates may apply. Reply STOP to opt out.";
export const STOP_REPLY = "You're unsubscribed and won't get more texts from this number. Reply START to resubscribe.";

export type OptIn = { id: string; where: string; who: string; members?: boolean; kind: "one-time" | "transactional" | "marketing" | "account"; consent: string; field: string; checkbox?: string };

export const OPT_INS: OptIn[] = [
  {
    id: "counter-receipt", where: "At the store's register, on the customer display", who: "Shoppers", kind: "one-time",
    field: "Text my receipt to",
    consent: "Enter your mobile number to get this receipt by text from {store}. One message. Msg & data rates may apply. Your number is used only for this receipt unless you choose otherwise.",
  },
  {
    id: "order-updates", where: "A store's website — account settings and checkout", who: "Shoppers with an account", members: true, kind: "transactional",
    field: "Mobile number", checkbox: "Text me updates about my orders",
    consent: "Get texts from {store} about your orders: confirmation, ready for pickup, shipped and delivered. Msg frequency varies. Msg & data rates may apply. Reply STOP to opt out, HELP for help. Privacy: retailspec.com/legal/privacy.",
  },
  {
    id: "store-offers", where: "A store's website — account settings (separate, unticked box)", who: "Shoppers with an account", members: true, kind: "marketing",
    field: "Mobile number", checkbox: "Yes, text me offers and news from {store}",
    consent: "Get offers and news from {store} by text, up to 4 messages a month. Consent is not a condition of purchase. Msg & data rates may apply. Reply STOP to cancel, HELP for help. Privacy: retailspec.com/legal/privacy.",
  },
  {
    id: "staff-account", where: "RetailSpec console — My Account", who: "A store's staff using RetailSpec", members: true, kind: "account",
    field: "Mobile number", checkbox: "Send my sign-in codes and account alerts by text",
    consent: "Get RetailSpec sign-in codes and account alerts (security notices, support callbacks) by text. Msg frequency varies. Msg & data rates may apply. Reply STOP to opt out, HELP for help.",
  },
];

export const SAMPLES: { kind: string; text: string }[] = [
  { kind: "Receipt", text: "Golden Beetle: thanks for shopping with us! Your receipt for $48.20: https://gb.retailspec.com/r/7KQ2 Reply STOP to opt out." },
  { kind: "Order update", text: "Golden Beetle: your order #1042 is ready for pickup at 312 Main St. Bring this text or your ID. Reply STOP to opt out." },
  { kind: "Shipping update", text: "Golden Beetle: order #1042 has shipped. Track it: https://gb.retailspec.com/t/1042 Reply STOP to opt out." },
  { kind: "Offer (marketing, separate consent)", text: "Golden Beetle: our holiday open house is Sat 10–4, with 15% off candles. Reply STOP to cancel." },
  { kind: "Account alert", text: "RetailSpec: your sign-in code is 482913. It expires in 10 minutes. Don't share it." },
];
