import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[8px] border border-ink/10 bg-white/82 shadow-card backdrop-blur transition duration-200 hover:-translate-y-1 hover:shadow-soft",
        className
      )}
      {...props}
    />
  );
}
