"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { hobbies } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function HobbyMarquee() {
  const [paused, setPaused] = useState(false);
  const items = [...hobbies, ...hobbies];

  return (
    <section
      className="overflow-hidden bg-ink py-12 text-white"
      aria-label="Animated hobbies gallery"
    >
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className={cn(
            "animate-marquee flex w-max gap-5 px-5 sm:gap-6 sm:px-8",
            paused && "pause-marquee"
          )}
        >
          {items.map((hobby, index) => (
            <motion.article
              key={`${hobby.title}-${index}`}
              aria-hidden={index >= hobbies.length}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="w-[280px] overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.06] shadow-card sm:w-[340px]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={hobby.image}
                  alt={hobby.alt}
                  fill
                  sizes="(min-width: 768px) 340px, 280px"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sun">
                  {hobby.caption}
                </p>
                <h2 className="mt-3 text-2xl font-semibold">{hobby.title}</h2>
                <p className="mt-3 leading-7 text-white/68">{hobby.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
