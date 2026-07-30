"use client";

import { motion, Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { ProjectList } from "@/utils/projects";

/* ------------------ Animations ------------------ */

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

/* ------------------ Page ------------------ */

export default function WorkPage() {
  return (
    <section className="min-h-screen bg-zinc-50 text-zinc-900">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-24"
      >
        {/* Back link */}
        <motion.div variants={fadeUp}>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors group"
          >
            <ArrowLeft className="size-4 group-hover:-translate-x-0.5 transition-transform" />
            back home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div variants={fadeUp} className="mt-10">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            My Work
          </h1>
          <p className="mt-3 text-zinc-500 text-lg max-w-xl leading-relaxed">
            A collection of projects I&apos;ve built  from freelance work to
            personal experiments. Each one pushed me to learn something new.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          className="mt-10 mb-12 h-px bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200"
        />

        {/* Project Grid */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {ProjectList.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariant}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative flex flex-col gap-4 p-5 rounded-2xl border border-zinc-200/80 bg-white hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 cursor-pointer"
            >
              {/* Top row: icon + arrow */}
              <div className="flex items-start justify-between">
                <div className="relative h-12 w-12 rounded-xl overflow-hidden border border-zinc-100 bg-zinc-50 flex items-center justify-center shrink-0">
                  <Image
                    src={project.imageSrc}
                    alt={project.projectName}
                    width={48}
                    height={48}
                    className="object-cover h-full w-full"
                  />
                </div>
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-zinc-100 group-hover:bg-blue-50 transition-colors">
                  <ArrowUpRight className="size-4 text-zinc-400 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </span>
              </div>

              {/* Project info */}
              <div className="flex flex-col gap-1">
                <h2 className="font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {project.projectName}
                </h2>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {project.desc}
                </p>
              </div>

              {/* Subtle bottom accent line */}
              <div className="absolute bottom-0 left-5 right-5 h-[2px] rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={fadeUp}
          className="mt-16 pt-8 border-t border-zinc-200 text-sm text-zinc-500 flex items-center justify-between"
        >
          <p>
            Want to work together?{" "}
            <a
              href="mailto:rudraupasani7@gmail.com"
              className="text-blue-600 hover:underline"
            >
              Let&apos;s talk
            </a>
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/rudraupasani"
              target="_blank"
              className="text-zinc-400 hover:text-zinc-700 transition-colors"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/rudraupasani"
              target="_blank"
              className="text-zinc-400 hover:text-zinc-700 transition-colors"
            >
              linkedin
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
