"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users, BookOpen, FileText } from "lucide-react";

const stats = [
  { label: "Countries Represented", value: "100+", icon: GraduationCap },
  { label: "Alumni Globally", value: "5k+", icon: Users },
  { label: "Expert Faculty", value: "50+", icon: BookOpen },
  { label: "Research Papers", value: "20+", icon: FileText },
];

export function LearningCulture() {
  return (
    <section className="py-24 bg-[#0179bf] text-white relative overflow-hidden">
      {/* Decorative background icon */}
      <div className="absolute right-[-5%] bottom-[-10%] opacity-10 pointer-events-none">
        <GraduationCap size={400} strokeWidth={1} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white/80 font-bold text-sm tracking-[0.2em] uppercase mb-6"
          >
            Learning Culture
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1]"
          >
            A diverse learning environment with a culture of support
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 leading-relaxed mb-12 max-w-2xl"
          >
            We offer a variety of ways to help you settle into uni life and our
            campuses. You&apos;ll join a community of students from over 100 countries
            and be supported throughout your studies. At SPMCRC, education goes
            beyond textbooks to foster collaborative growth and real-world
            clinical exposure.
          </motion.p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/20 pt-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
              >
                <div className="text-4xl lg:text-5xl font-black mb-2 flex items-baseline gap-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
