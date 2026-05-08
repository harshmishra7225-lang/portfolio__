import { AnimatedSection } from "@/components/AnimatedSection";
import { PageTransition } from "@/components/PageTransition";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { milestones, profile, storyHighlights } from "@/data/portfolio";

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 lg:px-10">
        <AnimatedSection>
          <SectionHeading
            eyebrow="About Me"
            title="Curious, steady, and motivated by meaningful work."
            description="A warm introduction to the background, education, interests, goals, and story behind the work."
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <AnimatedSection>
            <Card className="p-7 sm:p-9">
              <h2 className="text-3xl font-semibold text-ink">Personal Introduction</h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-charcoal/78">
                <p>{profile.aboutIntro}</p>
                <p>{profile.background}</p>
                <p>{profile.personalStory}</p>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <Card className="h-full bg-ink p-7 text-white sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sun">
                Snapshot
              </p>
              <dl className="mt-6 space-y-5">
                {storyHighlights.map((item) => (
                  <div key={item.label}>
                    <dt className="text-sm text-white/55">{item.label}</dt>
                    <dd className="mt-1 text-lg font-medium">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection className="bg-mist/55 px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Milestones"
            title="Education and career highlights"
            description="A few moments that show steady growth, practical learning, and readiness for real-world opportunities."
          />
          <div className="mt-10 space-y-5">
            {milestones.map((item) => (
              <Card key={item.year} className="grid gap-5 p-6 sm:grid-cols-[120px_1fr]">
                <div>
                  <p className="rounded-full bg-forest/10 px-4 py-2 text-center text-sm font-semibold text-forest">
                    {item.year}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 leading-7 text-charcoal/75">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </PageTransition>
  );
}
