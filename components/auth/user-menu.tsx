"use client";

import { useState, useRef, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { RoleBadge } from "./role-badge";

export function UserMenu() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (status === "loading") {
    return <div className="h-8 w-8 rounded-full bg-gray-100 animate-pulse" />;
  }

  if (!session?.user) {
    return (
      <Link
        href="/login"
        className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
      >
        Sign In
      </Link>
    );
  }

  const initials = session.user.name
    ? session.user.name
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase())
        .join("")
        .slice(0, 2)
    : "?";

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-full transition-colors hover:bg-gray-50 p-1 pr-2"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sage-light text-sage text-xs font-semibold">
          {initials}
        </div>
        <svg
          className={`h-3.5 w-3.5 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-64 rounded-xl border border-gray-200 bg-white p-3 shadow-lg z-50">
          <div className="px-2 pb-3 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-900 truncate">
              {session.user.name}
            </p>
            <p className="text-xs text-gray-500 truncate mt-0.5">
              {session.user.email}
            </p>
            {session.user.company && (
              <p className="text-xs text-gray-400 truncate mt-0.5">
                {session.user.company}
              </p>
            )}
            <div className="mt-2">
              <RoleBadge role={session.user.role || "guest"} />
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              <svg
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
