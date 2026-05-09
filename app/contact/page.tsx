import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactForm } from "@/components/ContactForm";
import { PageTransition } from "@/components/PageTransition";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactDetails } from "@/data/portfolio";

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-8 lg:px-10">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Contact Me"
            title="Let's talk about AI, robotics or security-minded systems."
            description="For internships, research collaborations, robotics projects, AI/ML ideas or a quick professional introduction."
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <AnimatedSection>
            <Card className="h-full bg-ink p-7 text-white sm:p-9">
              <h2 className="font-display text-2xl font-semibold">Contact Details</h2>
              <p className="mt-4 leading-7 text-white/68">
                Prefer a direct channel? These links are ready for a quick hello, portfolio review,
                internship conversation or project discussion.
              </p>
              <div className="mt-8 space-y-5">
                {contactDetails.map((detail) => (
                  <div key={detail.label}>
                    <p className="font-code text-sm font-bold uppercase text-cyan">{detail.label}</p>
                    <a
                      href={detail.href}
                      className="focus-ring mt-1 inline-block rounded-sm text-lg font-medium text-white hover:text-sun"
                    >
                      {detail.value}
                    </a>
                  </div>
                ))}
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
}
