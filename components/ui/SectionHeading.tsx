import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  inverse?: boolean;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  inverse = false,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p
        className={cn(
          "text-sm font-semibold uppercase tracking-[0.18em]",
          inverse ? "text-sun" : "text-clay"
        )}
      >
        {eyebrow}
      </p>
      <h1
        className={cn(
          "font-display text-balance mt-4 text-4xl font-semibold tracking-normal sm:text-5xl",
          inverse ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h1>
      {description ? (
        <p className={cn("mt-5 text-lg leading-8", inverse ? "text-white/68" : "text-charcoal/72")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
