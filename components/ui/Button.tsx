import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "light" | "ghostLight";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: ButtonVariant;
  children: ReactNode;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-clay text-white hover:bg-forest hover:shadow-card",
  secondary: "bg-ink text-white hover:bg-forest hover:shadow-card",
  light: "bg-white text-ink hover:bg-mist hover:shadow-card",
  ghostLight: "border border-white/30 bg-white/10 text-white hover:bg-white hover:text-ink"
};

export function Button({
  href,
  variant = "secondary",
  children,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = cn(
    "focus-ring inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-55",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
