"use client";

import React from "react";
import { motion } from "framer-motion";

export function Vision() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-[#0179bf] font-bold text-sm tracking-[0.2em] uppercase mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#0179bf]"></span>
              Our Vision
            </h2>
            <div className="relative">
              {/* Giant opening quote decoration */}
              <span className="absolute -top-12 -left-8 text-[12rem] text-slate-100 font-serif leading-none select-none pointer-events-none -z-10">
                “
              </span>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-[1.3] mb-10 italic">
                To be a premier institution of medical education and research,
                producing compassionate healthcare professionals dedicated to
                excellence, integrity, and serving humanity with advanced
                clinical knowledge.
              </p>
            </div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1.5 bg-[#0179bf] rounded-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="relative group">
              {/* Stylish background blob */}
              <div className="absolute inset-0 bg-primary/5 rounded-[3rem] transform rotate-3 scale-105 group-hover:rotate-1 transition-transform duration-700" />
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden">
                <img
                  src="/images/sardar_patel.webp"
                  alt="Medical Vision"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
