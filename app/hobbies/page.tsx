import { AnimatedSection } from "@/components/AnimatedSection";
import { BookShelf } from "@/components/BookShelf";
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
            title="Reading, astronomy, anime and drawing in motion."
            description="A more personal interactive page inspired by the hobbies you shared, with automatic motion and hover interaction."
          />
        </AnimatedSection>
      </section>

      <HobbyMarquee />

      <AnimatedSection className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Reading Shelf"
          title="Books that shape strategy and ambition."
          description="Inspired by your reading reference, this section avoids static book covers and uses interactive book cards that fit the portfolio design."
        />
        <div className="mt-10">
          <BookShelf />
        </div>
      </AnimatedSection>
    </PageTransition>
  );
}
