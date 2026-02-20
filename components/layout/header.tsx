"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const platformLinks = [
  { label: "Inventory Intelligence", description: "Real-time stock across every location", href: "/platform/inventory" },
  { label: "Unified Commerce", description: "One catalog, every channel", href: "/platform/commerce" },
  { label: "Operational Control", description: "Purchase orders to fulfillment", href: "/platform/operations" },
  { label: "Security & Infrastructure", description: "Dedicated database per tenant", href: "/platform/security" },
];

const navLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [hideTimeout, setHideTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-12 h-16">
        <Link href="/" className="text-lg font-semibold text-gray-900 tracking-tight">
          RetailSpec
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={() => {
              if (hideTimeout) clearTimeout(hideTimeout);
              setPlatformOpen(true);
            }}
            onMouseLeave={() => {
              const t = setTimeout(() => setPlatformOpen(false), 150);
              setHideTimeout(t);
            }}
          >
            <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1">
              Platform
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {platformOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
                {platformLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-4 py-3 hover:bg-sage-50 transition-colors"
                  >
                    <span className="block text-sm font-medium text-gray-900">{link.label}</span>
                    <span className="block text-xs text-gray-500 mt-0.5">{link.description}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" variant="primary">
            Request a Demo
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200/60 bg-white px-6 py-4">
          <nav className="flex flex-col gap-1">
            <p className="px-3 pt-2 pb-1 text-xs font-medium text-gray-400 uppercase tracking-wider">Platform</p>
            {platformLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-sage-50 hover:text-gray-900"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="my-2 border-t border-gray-100" />
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-sage-50 hover:text-gray-900"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3">
              <Button href="/contact" variant="primary" className="w-full">
                Request a Demo
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
