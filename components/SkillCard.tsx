"use client";

import { motion } from "framer-motion";
import type { SkillGroup } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";

type SkillCardProps = {
  group: SkillGroup;
  index: number;
};

export function SkillCard({ group, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
    >
      <Card className="h-full p-6 sm:p-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay">
              {group.label}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-ink">{group.title}</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {group.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-forest"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-7 space-y-5">
          {group.skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex items-center justify-between gap-4">
                <p className="font-medium text-charcoal">{skill.name}</p>
                <p className="text-sm font-semibold text-charcoal/60">{skill.level}%</p>
              </div>
              <div
                className="mt-2 h-2.5 overflow-hidden rounded-full bg-linen"
                aria-label={`${skill.name} proficiency ${skill.level}%`}
                role="img"
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.12 }}
                  className="h-full rounded-full bg-gradient-to-r from-forest via-teal to-clay"
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
