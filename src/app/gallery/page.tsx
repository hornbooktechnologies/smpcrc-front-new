"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  FileText,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Image from "next/image";
import { galleryImages } from "@/data/gallery";
import GalleryCard from "@/components/ui/GalleryCard";

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  }, [selectedIndex]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  // Prevent scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="relative overflow-hidden rounded-xl md:rounded-3xl bg-slate-900 min-h-[400px] flex items-center justify-center text-center p-6">
            <div className="absolute inset-0 opacity-50">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7rOgkfjcubOAnTWKJ2Dtj20IPgwaWqSDdlpeWE2h6q3d_BtCCn07-T6KdCNHEuHFCuzzDjxQ_G0lsW52K2N6dO1tA8cra4-LcvD-7ObPUgrdHRYhlofF2hSHl-MlwkFuJJncbX3KlL8XOKb8IXaSDEi8w1XwYztiTlqm1MdRSmDk9GEp7P3bNa4imQBRDAqo_PtSgzLJMo0tqB9DCX1W72Oi3BR1yxzXmFsqdXXbD37fRU9p5am1yr_Itf8cPlmFG1LFkBUpEIic"
                alt="Modern medical college campus"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
            <div className="relative z-10 max-w-2xl">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary font-bold text-xs uppercase tracking-widest mb-4 backdrop-blur-sm"
              >
                Our Infrastructure
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
              >
                Campus Gallery
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-slate-200 text-lg md:text-xl font-medium mb-8"
              >
                Take a visual journey through Sardar Patel Medical College &amp; Research Center&apos;s world-class facilities.
              </motion.p>
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-all">
                  <Compass className="w-5 h-5" />
                  Virtual Tour 360°
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold py-3 px-8 rounded-lg transition-all flex items-center justify-center gap-2">
                  <FileText className="w-5 h-5" />
                  Download Brochure
                </button>
              </motion.div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col gap-8">
          {/* Note: Filters skipped as requested */}

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <GalleryCard
                key={image.id}
                image={image}
                onClick={() => setSelectedIndex(index)}
              />
            ))}
          </div>

          {/* Load More Button */}
          {/* <div className="flex justify-center mt-8">
            <button className="flex items-center gap-2 px-10 py-4 border-2 border-primary text-primary font-black rounded-lg hover:bg-primary hover:text-white transition-all">
              View All Images
              <ArrowRight className="rotate-90 w-5 h-5" />
            </button>
          </div> */}
        </div>
      </section>

      {/* Highlights Section */}
      {/* <section className="bg-white dark:bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">Recent Highlights</h2>
              <p className="text-slate-500 mt-2">Catch up with the latest happenings at our campus.</p>
            </div>
            <a className="text-primary font-bold flex items-center gap-1 group" href="#">
              See All Highlights
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentHighlights.map((highlight) => (
              <motion.div
                key={highlight.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group bg-slate-50 dark:bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800"
              >
                <div className="h-48 overflow-hidden relative">
                  <Image
                    src={highlight.image}
                    alt={highlight.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                    {highlight.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-slate-400 text-sm font-semibold mb-2 flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    {highlight.date}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 line-clamp-2">
                    {highlight.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                    {highlight.description}
                  </p>
                  <a className="text-primary font-bold text-sm inline-flex items-center gap-1" href="#">
                    Read More
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Lightbox Slider */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-sm p-4 md:p-10"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-[110]"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all z-[110]"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 md:right-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all z-[110]"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Large Image Container */}
            <div className="relative w-full h-full max-w-6xl max-h-[80vh] flex flex-col items-center justify-center">
              <motion.div
                key={galleryImages[selectedIndex].id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative w-full h-full"
              >
                <Image
                  src={galleryImages[selectedIndex].url}
                  alt={galleryImages[selectedIndex].title}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Caption */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-[-60px] text-center"
              >
                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-1 block">
                  {galleryImages[selectedIndex].category}
                </span>
                <h2 className="text-white text-xl md:text-2xl font-black">
                  {galleryImages[selectedIndex].title}
                </h2>
                <p className="text-white/40 text-xs mt-2">
                  Image {selectedIndex + 1} of {galleryImages.length}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
