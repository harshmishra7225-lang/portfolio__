import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageTransition } from "@/components/PageTransition";
import { ProjectShowcase } from "@/components/ProjectShowcase";
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
            title="A builder at the intersection of AI, robotics and research."
            description="Resume-backed details from education, internships, projects and research interests."
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <AnimatedSection>
            <Card className="p-7 sm:p-9">
              <h2 className="font-display text-3xl font-semibold text-ink">
                Personal Introduction
              </h2>

              <div className="mt-4 space-y-2">
                <p className="text-base font-semibold text-ink">
                  Founder — Marcus, The Quizzing Society of CIC (DU)
                </p>

                <p className="text-sm text-charcoal/75">
                  <span className="font-semibold text-ink">
                    Languages Spoken:
                  </span>{" "}
                  Hindi, English, French (Basic)
                </p>

                <p className="text-sm text-charcoal/75">
                  <span className="font-semibold text-ink">
                    Dialects Known:
                  </span>{" "}
                  Bhojpuri
                </p>

                <p className="text-base font-bold text-ink">
                  Currently a Cybersecurity Intern at Innovatiview India Ltd.
                </p>
              </div>

              <div className="mt-6 space-y-5 text-base leading-8 text-charcoal/78">
                <p>{profile.aboutIntro}</p>
                <p>{profile.background}</p>
                <p>{profile.personalStory}</p>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <Card className="h-full bg-ink p-7 text-black sm:p-9">
              <p className="font-code text-sm font-bold uppercase text-cyan">
                IT'S ME!!
              </p>
              <dl className="mt-6 space-y-5">
                {storyHighlights.map((item) => (
                  <div key={item.label}>
                    <dt className="text-sm text-black/55">{item.label}</dt>
                    <dd className="mt-1 text-lg font-medium">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 overflow-hidden rounded-lg">
                <Image
                  src="/images/snapshot-pic.png"
                  alt="Snapshot"
                  width={400}
                  height={300}
                  className="w-full object-cover"
                />
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection className="bg-mist/55 px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Milestones"
            title="Education, internships and technical highlights"
            description="A few moments that show steady growth across research, AI/ML, robotics, IoT and software systems."
          />

          <div className="mt-10 space-y-5">
            {milestones.map((item) => (
              <Card
                key={item.year}
                className="grid gap-5 p-6 sm:grid-cols-[120px_1fr]"
              >
                <div>
                  <p className="rounded-full bg-electric/10 px-4 py-2 text-center text-sm font-semibold text-electric">
                    {item.year}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-ink">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-charcoal/75">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-ink px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects with intelligent systems at the core."
            description="A concise view of the strongest resume projects, shaped for a recruiter or technical reviewer to scan quickly."
            inverse
          />

          <div className="mt-10">
            <ProjectShowcase />
          </div>
        </div>
      </AnimatedSection>
    </PageTransition>
  );
}