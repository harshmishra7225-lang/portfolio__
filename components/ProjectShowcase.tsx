"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";

export function ProjectShowcase() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {projects.map((project, index) => (
        <motion.article
          key={project.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: index * 0.06, duration: 0.45 }}
          whileHover={{ y: -6 }}
          className="group relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.07] p-6 text-white shadow-card"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan via-rose to-sun" />
          <p className="font-code text-xs font-bold uppercase text-cyan">{project.label}</p>
          <h3 className="font-display mt-3 text-2xl font-semibold">{project.title}</h3>
          <p className="mt-4 leading-7 text-white/70">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/12 bg-white/[0.08] px-3 py-1 text-xs font-semibold text-white/82"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  );
}
