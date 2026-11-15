import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const MotionLink = motion(Link);

interface ProjectTileProps {
    projectName: string;
    imageSrc: string;
    desc: string;
    slug: string;
}

export const ProjectTile = ({
    imageSrc,
    projectName,
    desc,
    slug,
}: ProjectTileProps) => {
    return (
        <MotionLink
            href={`/projects/${slug}`}
            className="flex items-center justify-between gap-3 px-3 -mx-3 py-2.5 rounded-lg hover:bg-zinc-100/70 transition-colors"
            whileHover={{ y: -1 }}
            transition={{ type: "spring" as const, stiffness: 280 }}
        >
            <div className="flex items-center gap-3">
                <Image
                    src={imageSrc}
                    alt={projectName}
                    height={32}
                    width={32}
                    className="h-8 w-8 rounded-full border border-zinc-200 object-cover"
                />
                <div className="flex flex-col">
                    <span className="font-medium text-sm text-zinc-900">
                        {projectName}
                    </span>
                    <p className="text-xs text-zinc-500 leading-normal">
                        {desc}
                    </p>
                </div>
            </div>
            <ArrowUpRight className="size-4 text-zinc-400 shrink-0" />
        </MotionLink>
    );
};
