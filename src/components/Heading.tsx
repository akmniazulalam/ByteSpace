import { cn } from "@/lib/utils";
import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function Heading({
  children,
  className,
  as: Tag = "h2",
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-bold tracking-tight text-textColor text-3xl md:text-4xl lg:text-[44px] leading-[120%]",
        className
      )}
    >
      {children}
    </Tag>
  );
}