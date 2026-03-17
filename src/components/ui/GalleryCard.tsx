"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { GalleryImage } from "@/data/gallery";

interface GalleryCardProps {
  image: GalleryImage;
  onClick?: () => void;
}

export default function GalleryCard({ image, onClick }: GalleryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800 aspect-square cursor-pointer"
    >
      <Image
        src={image.url}
        alt={image.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span className="text-primary font-bold text-xs uppercase mb-1">
          {image.category}
        </span>
        <h3 className="text-white font-bold text-lg leading-tight">
          {image.title}
        </h3>
      </div>
      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        <ZoomIn className="w-5 h-5 text-white" />
      </div>
    </motion.div>
  );
}
