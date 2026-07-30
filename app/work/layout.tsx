import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Projects built by Rudra Upasani — freelance work, personal experiments, and full-stack applications.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
