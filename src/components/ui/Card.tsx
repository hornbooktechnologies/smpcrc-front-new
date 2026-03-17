"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";


interface CardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
  delay?: number;
}


export const Card = ({ 
  title, 
  description, 
  icon: Icon, 
  className, 
  delay = 0 
}: CardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className={cn(
      "glass relative overflow-hidden rounded-3xl p-8 group cursor-default",
      className
    )}
  >
    <div className="glow group-hover:opacity-30 transition-opacity duration-500" />
    <div className="relative z-10">
      <div className="mb-4 inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-secondary-foreground leading-relaxed">{description}</p>
    </div>
  </motion.div>
);
