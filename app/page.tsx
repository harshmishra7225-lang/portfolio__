import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredSummary, profile } from "@/data/portfolio";

export default function HomePage() {
  return (
    <PageTransition>
      <section className="relative isolate flex min-h-[78svh] items-center overflow-hidden">
        <Image
          src="/images/hero-workspace.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/78 to-ink/35" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-porcelain to-transparent" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.05fr_0.7fr] lg:px-10">
          <AnimatedSection className="max-w-3xl text-white">
            <p className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white/88 backdrop-blur">
              Open to meaningful web and product opportunities
            </p>
            <h1 className="text-balance text-5xl font-semibold tracking-normal sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-5 max-w-2xl text-xl font-medium text-mist sm:text-2xl">
              {profile.headline}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              {profile.intro}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/about" variant="primary">
                View About Me
              </Button>
              <Button href="/skills" variant="light">
                Explore Skills
              </Button>
              <Button href="/contact" variant="ghostLight">
                Contact Me
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12} className="justify-self-center lg:justify-self-end">
            <div className="relative aspect-square w-64 overflow-hidden rounded-full border border-white/30 bg-white/10 p-3 shadow-soft backdrop-blur sm:w-80">
              <Image
                src={profile.avatar}
                alt="Profile image placeholder for Your Name"
                fill
                priority
                sizes="(min-width: 1024px) 320px, 256px"
                className="rounded-full object-cover p-3"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection className="mx-auto max-w-7xl px-5 pb-20 pt-10 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Featured Summary"
          title="A thoughtful builder with a practical, people-first edge."
          description={profile.summary}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {featuredSummary.map((item) => (
            <Card key={item.title} className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay">
                {item.label}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-ink">{item.title}</h2>
              <p className="mt-4 leading-7 text-charcoal/75">{item.description}</p>
            </Card>
          ))}
        </div>
      </AnimatedSection>
    </PageTransition>
  );
}
