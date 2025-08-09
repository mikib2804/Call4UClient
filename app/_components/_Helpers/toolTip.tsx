"use client";
import { cn } from "@/app/utils/cn";
import { ClassValue } from "clsx";
import { ReactNode } from "react";

type TooltipProps = {
  text: string;
  children: ReactNode;
  className?: ClassValue;
};

export default function Tooltip({ text, children, className }: TooltipProps) {
  return (
    <div className="relative flex items-center group">
      {children}
      <div
        className={cn(
          "absolute bottom-full -mb-14.5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200  bg-[#133551] text-white text-sm rounded px-2 py-1 whitespace-nowrap z-100",
          className
        )}
      >
        {text}
      </div>
    </div>
  );
}
