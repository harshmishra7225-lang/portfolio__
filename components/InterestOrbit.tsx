"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { coreInterests, profile } from "@/data/portfolio";

export function InterestOrbit() {
  return (
    <motion.aside
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-md"
      aria-label="Core interests"
    >
      <div className="tech-grid relative overflow-hidden rounded-[8px] border border-white/15 bg-white/[0.08] p-5 shadow-soft backdrop-blur">
        <div className="signal-scan absolute inset-x-0 top-0 h-1 overflow-hidden bg-cyan/35" />
        <div className="relative mx-auto aspect-square max-w-[320px] rounded-[8px] border border-white/15 bg-ink/65 p-5">
          <Image
            src={profile.avatar}
            alt="Illustrated profile avatar for Harsh Kumar Mishra"
            fill
            priority
            sizes="(min-width: 1024px) 320px, 280px"
            className="object-contain p-10"
          />
        </div>

        <div className="mt-5 grid gap-3">
          {coreInterests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.08, duration: 0.45 }}
              whileHover={{ x: 6 }}
              className="rounded-[8px] border border-white/10 bg-white/[0.08] p-4"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`h-3 w-12 rounded-full bg-gradient-to-r ${interest.accent}`}
                  aria-hidden="true"
                />
                <h2 className="font-code text-sm font-bold uppercase text-white">
                  {interest.title}
                </h2>
              </div>
              <p className="mt-2 text-sm leading-6 text-white/68">{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}
