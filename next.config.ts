import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // the marketing pages are read from content/site at request time (lib/site-pages) — ship them with the routes
  outputFileTracingIncludes: {
    "/": ["./content/site/**/*"],
    "/[slug]": ["./content/site/**/*"],
  },
  // the February pages that the new site replaced keep working as permanent redirects
  async redirects() {
    return [
      { source: "/platform/inventory", destination: "/stock", permanent: true },
      { source: "/platform/commerce", destination: "/online-store", permanent: true },
      { source: "/platform/operations", destination: "/orders", permanent: true },
      { source: "/platform/security", destination: "/trust", permanent: true },
      { source: "/contact", destination: "/demo", permanent: true },
    ];
  },
};

export default nextConfig;
