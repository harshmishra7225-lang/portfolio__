"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { navItems, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/88 text-white backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="focus-ring font-code rounded-sm text-lg font-bold tracking-normal text-white"
        >
          {profile.logo}
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "focus-ring rounded-full px-4 py-2 text-sm font-semibold transition",
                  active
                    ? "bg-cyan text-ink shadow-card"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 md:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="relative h-4 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-5 rounded bg-white transition",
                isOpen && "top-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-2 h-0.5 w-5 rounded bg-white transition",
                isOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-4 h-0.5 w-5 rounded bg-white transition",
                isOpen && "top-2 -rotate-45"
              )}
            />
          </span>
        </button>
      </nav>

      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="border-t border-white/10 bg-ink px-5 py-4 shadow-card md:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "focus-ring rounded-lg px-4 py-3 text-sm font-semibold transition",
                    active ? "bg-cyan text-ink" : "bg-white/[0.08] text-white hover:bg-white/[0.14]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
