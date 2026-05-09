"use client";

import { motion } from "framer-motion";
import { bookStack } from "@/data/portfolio";

const colors = [
  "from-sun to-clay",
  "from-cyan to-teal",
  "from-rose to-plum",
  "from-aurora to-forest",
  "from-electric to-cyan"
];

export function BookShelf() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {bookStack.map((book, index) => (
        <motion.article
          key={book}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: index * 0.06, duration: 0.45 }}
          whileHover={{ y: -8, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
          className={`min-h-48 rounded-[8px] bg-gradient-to-br ${colors[index % colors.length]} p-5 text-ink shadow-card`}
        >
          <p className="font-code text-xs font-bold uppercase">Reading Stack</p>
          <h3 className="font-display mt-8 text-2xl font-semibold leading-tight">{book}</h3>
          <p className="mt-5 text-sm font-semibold text-ink/70">Strategy, business and systems thinking</p>
        </motion.article>
      ))}
    </div>
  );
}
