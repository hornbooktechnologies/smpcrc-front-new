"use client";

import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "secondary";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-[#0179bf] text-white hover:bg-[#0179bf]/90 shadow-lg shadow-[#0179bf]/20",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
    outline: "border-2 border-[#0179bf] text-[#0179bf] hover:bg-[#0179bf] hover:text-white",
    ghost: "text-[#0179bf] hover:bg-slate-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-bold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="mr-2 inline-flex items-center justify-center">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="ml-2 inline-flex items-center justify-center">{icon}</span>
      )}
    </button>
  );
}
