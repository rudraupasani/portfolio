"use client";

import { motion, Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { ProjectTile } from "@/components/Project";
import { Title } from "@/components/Title";
import { WorkedAt } from "@/components/WorkedAt";
import { ProjectList } from "@/utils/projects";
import { Skills } from "@/utils/skills";
import { WorkList } from "@/utils/work";

/* ------------------ Animations ------------------ */

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ------------------ Page ------------------ */

export default function Home() {
  return (
    <section className="bg-zinc-50 text-zinc-900">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col min-h-screen font-sans py-12 px-6 md:px-0 max-w-2xl mx-auto"
      >
        {/* Social Links */}
        <motion.div variants={fadeUp} className="flex gap-4 flex-wrap">
          {[
            ["Twitter", "https://x.com/rudra_upasani"],
            ["GitHub", "https://github.com/rudraupasani"],
            ["LinkedIn", "https://www.linkedin.com/in/rudraupasani"],
            ["Email", "mailto:rudraupasani7@gmail.com"],
            ["Instagram", "https://instagram.com/rudraupasani.in"],
          ].map(([label, link], idx) => (
            <motion.a
              key={idx}
              href={link}
              target="_blank"
              className="text-blue-600 text-sm font-medium hover:underline"
              whileHover={{ y: -2 }}
              transition={{ type: "spring" as const, stiffness: 300 }}
            >
              {label}
            </motion.a>
          ))}
        </motion.div>

        {/* Profile */}
        <motion.div variants={fadeUp} className="mt-10 flex gap-4">
          <Image
            src="/profile.jpg"
            alt="Rudra Upasani"
            width={80}
            height={80}
            className="rounded-full border border-zinc-200"
          />
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold mt-4 flex items-center gap-1.5">
              Rudra Upasani
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                <polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884" />
                <polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926" />
              </svg>
            </h1>
            <p className="text-zinc-500 mt-1">20 y/o Full Stack Developer, Freelancer</p>
          </div>
        </motion.div>

        {/* Currently */}
        <motion.div variants={fadeUp} className="mt-6">
          <Title title="currently" />
          <p className="mt-3 text-zinc-600 leading-relaxed">
            I&apos;m currently working as a freelance full-stack developer,
            building web applications for clients . I&apos;m also open to new
            opportunities, feel free to {" "}
            <a
              href="mailto:rudraupasani7@gmail.com"
              className="text-blue-600 font-medium hover:underline"
            >
              reach out
            </a>
            .
          </p>
        </motion.div>

        {/* Work */}
        <motion.div variants={fadeUp} className="mt-6">
          <Title title="where i've worked" />
          <div className="flex flex-col gap-2 mt-3">
            {WorkList.map((work, idx) => (
              <WorkedAt
                key={idx}
                companyName={work.companyName}
                imageSrc={work.imageSrc}
                role={work.role}
                link={work.link}
              />
            ))}
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div variants={fadeUp} className="mt-6">
          <Title title="projects" />
          <div className="flex flex-col gap-1 mt-3">
            {ProjectList.slice(0, 5).map((project, idx) => (
              <ProjectTile
                key={idx}
                projectName={project.projectName}
                imageSrc={project.imageSrc}
                desc={project.desc}
                slug={project.slug}
              />
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div variants={fadeUp} className="mt-10">
          <Title title="skills" />
          <div className="flex flex-wrap gap-2 mt-3">
            {Skills.map((skill, idx) => (
              <span
                key={idx}
                className="text-xs font-medium text-zinc-600 bg-zinc-100 border border-zinc-200 px-2.5 py-1 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={fadeUp}
          className="mt-14 pt-6 border-t border-zinc-200 text-zinc-400 text-sm flex items-center justify-between"
        >
          <span>© {new Date().getFullYear()} Rudra Upasani</span>
          <div className="flex gap-4">
            <Link href="/work" className="text-zinc-500 hover:text-zinc-900 transition-colors">
              All Projects
            </Link>
            <a
              href="https://github.com/rudraupasani"
              target="_blank"
              className="text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rudraupasani"
              target="_blank"
              className="text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
