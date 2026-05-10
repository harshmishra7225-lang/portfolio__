import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactForm } from "@/components/ContactForm";
import { PageTransition } from "@/components/PageTransition";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactDetails } from "@/data/portfolio";

const socialLinks = [
  {
    label: "GitHub",
    value: "github.com/harshmishra7225-lang",
    href: "https://github.com/harshmishra7225-lang"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/harsh-kumar-mishra-7938491b4",
    href: "https://www.linkedin.com/in/harsh-kumar-mishra-7938491b4/"
  }
];

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-8 lg:px-10">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s shape robotics, AI or security work that feels real."
            description="If you have an internship idea, a practical research path or a project to discuss, I’m happy to connect and help map the next step."
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-10 xl:grid-cols-[0.98fr_1.02fr]">
          <AnimatedSection>
            <div className="contact-hero relative rounded-[32px] bg-transparent p-0">
              <Card className="contact-hero-card relative overflow-hidden border-0 bg-[#0b1428]/95 p-8 text-white shadow-[0_40px_120px_rgba(8,11,18,0.24)] ring-1 ring-white/10">
                <div className="pointer-events-none absolute -right-16 top-8 h-40 w-40 rounded-full bg-cyan/15 blur-3xl" />
                <div className="pointer-events-none absolute -left-16 top-36 h-56 w-56 rounded-full bg-sun/10 blur-3xl" />

                <div className="relative">
                  <p className="font-code text-sm uppercase tracking-[0.24em] text-cyan/70">Direct access</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black">
                    Contact details & trusted links
                  </h2>
                  <p className="mt-5 max-w-2xl leading-7 text-black/72">
                    I prefer clear, direct conversations. Use the channels below for robotics, AI/ML, cybersecurity or internship projects.
                  </p>

                  <div className="mt-9 space-y-5">
                    {contactDetails.map((detail) => (
                      <div
                        key={detail.label}
                        className="rounded-[24px] border border-white/10 bg-white/5 p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]"
                      >
                        <p className="font-code text-xs font-semibold uppercase tracking-[0.24em] text-cyan/70">
                          {detail.label}
                        </p>
                        <a
                          href={detail.href}
                          className="mt-2 block text-lg font-semibold text-white transition hover:text-sun"
                        >
                          {detail.value}
                        </a>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {socialLinks.map((link) => (
                      <Button
                        key={link.label}
                        href={link.href}
                        variant="light"
                        className="rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-ink"
                      >
                        {link.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="relative">
              <div className="pointer-events-none absolute -left-12 top-10 h-36 w-36 rounded-full bg-plum/10 blur-3xl" />
              {/* <ContactForm /> */}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
}
