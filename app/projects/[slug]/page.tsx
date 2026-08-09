import { notFound } from "next/navigation";
import { ProjectList } from "@/utils/projects";
import ProjectDetailsClient from "@/app/projects/[slug]/ProjectDetailsClient";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ProjectList.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = ProjectList.find((p) => p.slug === slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  return {
    title: `${project.projectName} | Rudra Upasani`,
    description: project.desc,
    openGraph: {
      title: `${project.projectName} | Rudra Upasani`,
      description: project.desc,
      type: "website",
      images: [
        {
          url: project.imageSrc,
          width: 800,
          height: 600,
          alt: project.projectName,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = ProjectList.find((p) => p.slug === slug);
  if (!project) {
    notFound();
  }

  return <ProjectDetailsClient project={project} />;
}
