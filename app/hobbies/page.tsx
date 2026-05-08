import { AnimatedSection } from "@/components/AnimatedSection";
import { HobbyMarquee } from "@/components/HobbyMarquee";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function HobbiesPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-28 sm:px-8 lg:px-10">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Hobbies"
            title="A lively gallery of the things that recharge creativity."
            description="Personal interests add texture to the work, bringing fresh perspective, energy, and a broader sense of craft."
          />
        </AnimatedSection>
      </section>

      <HobbyMarquee />

      <AnimatedSection className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 lg:px-10">
        <p className="text-lg leading-8 text-charcoal/78">
          Outside of technical work, these small rituals keep curiosity alive and make space for
          better ideas to arrive.
        </p>
      </AnimatedSection>
    </PageTransition>
  );
}
