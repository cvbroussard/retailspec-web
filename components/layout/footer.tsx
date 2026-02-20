import Link from "next/link";
import { Logo } from "@/components/ui/logo";

const platformLinks = [
  { label: "Inventory", href: "/platform/inventory" },
  { label: "Commerce", href: "/platform/commerce" },
  { label: "Operations", href: "/platform/operations" },
  { label: "Pricing", href: "/pricing" },
  { label: "Security", href: "/platform/security" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Documentation", href: "#" },
  { label: "API", href: "#" },
  { label: "Status", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-footer text-gray-400">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <Logo variant="dark" />
            <p className="mt-3 text-sm">Retail operations infrastructure</p>
          </div>

          {/* Platform */}
          <div>
            <p className="text-sm font-medium text-white">Platform</p>
            <ul className="mt-3 space-y-2">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-sm font-medium text-white">Company</p>
            <ul className="mt-3 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-sm font-medium text-white">Resources</p>
            <ul className="mt-3 space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-sm">
          &copy; {new Date().getFullYear()} RetailSpec. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
