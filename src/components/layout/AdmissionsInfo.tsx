"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/common/Button";

export function AdmissionsInfo() {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col lg:flex-row min-h-[500px]"
        >
          <div className="lg:w-1/2 relative overflow-hidden group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0XyKLzXJoaL1qIRVkaCe5qZ1HtUMel58aIVWh9zjDMmnxX-xQSyOZQNH9a_KIQlMTPHnASvFgEboJ1J8BDKjzrs6Wdeaf_ktF9thUXyu0p1E2pb-pfauory7VNDHO2SXwOpBf7oUsayGSAzQLIQpzk-jUwnCHZQwVhfmuF5GWS65jh-tzxdp-Gant1yXd1dkOOYpRH7bQsQTZeDe0ojZR0aPkKJZvFpC_oaeNfSXv4-p5EnOFofaeG4zfQ3eFd-TBAwd18g3KGDk"
              alt="Medical Education"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors" />
          </div>
          <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center items-start">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#0179bf] font-bold text-sm tracking-[0.2em] uppercase mb-6"
            >
              Enrollment
            </motion.h3>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight"
            >
              Start your journey in medical education
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-slate-600 text-lg leading-relaxed mb-10 max-w-xl"
            >
              Our admissions are open to driven individuals ready to make a difference in healthcare. We look for academic potential combined with a passion for clinical practice and patient well-being.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="rounded-2xl border-2 hover:shadow-xl hover:shadow-primary/10 transition-all font-black uppercase tracking-wider"
              >
                Overview
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
