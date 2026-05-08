import { AnimatedSection } from "@/components/AnimatedSection";
import { PageTransition } from "@/components/PageTransition";
import { SkillCard } from "@/components/SkillCard";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups, toolsHighlights } from "@/data/portfolio";

export default function SkillsPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-8 lg:px-10">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Skills"
            title="A balanced toolkit for building useful digital experiences."
            description="Technical foundations, creative tooling, and collaboration habits presented in a clear, scannable way."
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} group={group} index={index} />
          ))}
        </div>
      </section>

      <AnimatedSection className="bg-ink px-5 py-16 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Working Style"
            title="Technical ability with calm communication."
            description="A portfolio is stronger when it shows how you work, not only what tools you know."
            inverse
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {toolsHighlights.map((item) => (
              <Card
                key={item.title}
                className="border-white/10 bg-white/[0.06] p-6 text-white shadow-none"
              >
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="mt-3 leading-7 text-white/70">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </PageTransition>
  );
}
