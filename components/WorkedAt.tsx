import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const MotionLink = motion(Link);

interface WorkedAtProps {
    imageSrc: string;
    companyName: string;
    role: string;
    link: string;
}

export const WorkedAt = ({
    imageSrc,
    companyName,
    role,
    link,
}: WorkedAtProps) => {
    return (
        <MotionLink
            href={link}
            target="_blank"
            className="flex items-center gap-3 py-2.5 -mx-3 px-3 rounded-lg hover:bg-zinc-100/70 transition-colors"
            whileHover={{ y: -1 }}
            transition={{ type: "spring" as const, stiffness: 300 }}
        >
            <Image
                src={imageSrc}
                alt={companyName}
                height={32}
                width={32}
                className="h-8 w-8 rounded-full border border-zinc-200 object-cover shrink-0"
            />

            <div className="flex flex-col grow">
                <div className="flex items-center gap-1.5">
                    <span className="font-medium text-sm text-zinc-900">
                        {companyName}
                    </span>
                    <ArrowUpRight className="size-3.5 text-zinc-400" />
                </div>
                <p className="text-xs text-zinc-500">{role}</p>
            </div>
        </MotionLink>
    );
};
