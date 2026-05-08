import Link from "next/link";
import { navItems, profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-porcelain px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-bold text-ink">{profile.logo}</p>
          <p className="mt-2 text-sm text-charcoal/65">
            Designed with clarity, warmth, and careful attention to detail.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-3 py-2 text-sm font-medium text-charcoal/70 hover:bg-white hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
