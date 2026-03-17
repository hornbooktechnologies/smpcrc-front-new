"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Explore",
    description: "Discover our specialized medical programs and research initiatives.",
  },
  {
    number: "2",
    title: "Eligibility",
    description: "Check admission criteria and NEET qualification requirements.",
  },
  {
    number: "3",
    title: "Submit",
    description: "Fill out the application form with necessary academic credentials.",
  },
  {
    number: "4",
    title: "Begin",
    description: "Start your orientation and embark on your path to medical excellence.",
  },
];

export function AdmissionsSteps() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0179bf] font-bold text-sm tracking-[0.2em] uppercase mb-4"
          >
            Admissions
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900"
          >
            Simple Steps to Begin Your Medical Journey
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Connector Line (visible on md+) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-slate-100 -z-0" />
              )}

              <div className="w-20 h-20 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0179bf] font-black text-3xl mb-8 transition-all duration-500 group-hover:bg-[#0179bf] group-hover:text-white group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-primary/20 relative z-10">
                {step.number}
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-[#0179bf] rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
              </div>
              
              <h4 className="font-bold text-xl mb-3 text-slate-900">
                {step.title}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
