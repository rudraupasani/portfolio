"use client";

import { motion, Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github, Globe, Check, Code, Shield, Calendar, Layers } from "lucide-react";
import { Project } from "@/utils/projects";

interface ProjectDetailsClientProps {
  project: Project;
}

/* ------------------ Animations ------------------ */

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ProjectDetailsClient({ project }: ProjectDetailsClientProps) {
  const isFreelance = project.slug === "microcam"; // identify if it's a freelance/closed source project

  return (
    <section className="min-h-screen bg-zinc-50 text-zinc-900 selection:bg-zinc-700 selection:text-white">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-20"
      >
        {/* Navigation Breadcrumb */}
        <motion.div variants={fadeUp} className="flex items-center gap-4">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors group"
          >
            <ArrowLeft className="size-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Work
          </Link>
          <span className="text-zinc-300">/</span>
          <Link
            href="/"
            className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Home
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div variants={fadeUp} className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-zinc-200">
          <div className="flex items-start gap-4">
            <div className="relative h-16 w-16 md:h-20 md:w-20 rounded-2xl overflow-hidden border border-zinc-200 bg-white flex items-center justify-center shrink-0 shadow-sm">
              <Image
                src={project.imageSrc}
                alt={project.projectName}
                width={80}
                height={80}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
                  {project.projectName}
                </h1>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                  isFreelance 
                    ? "bg-amber-50 text-amber-700 border-amber-200" 
                    : "bg-blue-50 text-blue-700 border-blue-200"
                }`}>
                  {isFreelance ? "Freelance & Private" : "Open Source"}
                </span>
              </div>
              <p className="text-zinc-500 md:text-lg max-w-xl leading-relaxed">
                {project.desc}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
          {/* Main Content Column */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            {/* Overview */}
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-zinc-900 flex items-center gap-2">
                <Layers className="size-4 text-blue-500" />
                Project Overview
              </h2>
              <p className="text-zinc-600 leading-relaxed whitespace-pre-line">
                {project.longDesc || "No detailed overview provided for this project yet."}
              </p>
            </motion.div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <motion.div variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold text-zinc-900 flex items-center gap-2">
                  <Check className="size-4 text-blue-500" />
                  Key Features & Highlights
                </h2>
                <div className="grid grid-cols-1 gap-3">
                  {project.features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-3 p-4 rounded-xl border border-zinc-200/60 bg-white hover:border-zinc-300/80 transition-all shadow-xs"
                    >
                      <span className="flex items-center justify-center size-5 rounded-full bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                        <Check className="size-3" />
                      </span>
                      <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar / Info & Actions Column */}
          <div className="flex flex-col gap-8">
            {/* Actions Panel */}
            <motion.div variants={fadeUp} className="flex flex-col gap-3.5 p-5 rounded-2xl border border-zinc-200/80 bg-white shadow-xs">
              <h3 className="font-semibold text-zinc-900 text-sm tracking-wide uppercase opacity-75">
                Project Connections
              </h3>

              {/* Live Link Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors shadow-xs group"
              >
                <Globe className="size-4" />
                Visit Live Site
                <ArrowUpRight className="size-3.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* GitHub Link Button / Block */}
              {project.githubLink ? (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 hover:text-zinc-900 font-medium text-sm transition-all group"
                >
                  <Github className="size-4" />
                  View Repository
                  <ArrowUpRight className="size-3.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ) : (
                <div className="flex flex-col gap-2 p-3.5 rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50">
                  <div className="flex items-center gap-2 text-zinc-500">
                    <Shield className="size-4 shrink-0 text-amber-500" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Private Codebase</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-normal">
                    This source code is private. It is protected under developer agreements or is part of a client commercial package.
                  </p>
                </div>
              )}
            </motion.div>

            {/* Tech Stack Sidebar Block */}
            {project.techStack && project.techStack.length > 0 && (
              <motion.div variants={fadeUp} className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider flex items-center gap-2">
                  <Code className="size-4 text-blue-500" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-zinc-200/60 text-zinc-700 hover:bg-zinc-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Project Metadata Sidebar Block */}
            <motion.div variants={fadeUp} className="flex flex-col gap-4 pt-4 border-t border-zinc-200 text-sm">
              <div className="flex items-center justify-between text-zinc-600">
                <span className="flex items-center gap-2 text-zinc-400">
                  <Calendar className="size-4" />
                  Timeline
                </span>
                <span className="font-medium text-zinc-800">
                  {isFreelance ? "2024 - 2025" : "Completed"}
                </span>
              </div>
              <div className="flex items-center justify-between text-zinc-600">
                <span className="flex items-center gap-2 text-zinc-400">
                  <Code className="size-4" />
                  Role
                </span>
                <span className="font-medium text-zinc-800">
                  Full Stack Developer
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
