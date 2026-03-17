"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CourseCard } from "@/components/ui/CourseCard";
import { courses } from "@/data/courses";

const stats = [
  { label: "Specialized Labs", value: "25+" },
  { label: "Beds in Teaching Hospital", value: "500+" },
  { label: "Medical Alumni", value: "15k+" },
  { label: "Faculty-Student Ratio", value: "1:10" },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0179bf]/80 to-slate-900/90 mix-blend-multiply"></div>
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAEbNTXcq43fTIK5NKzK7WNwe1wgau3uYDYd2wqQk2R0UtVPTRbJcD6s3iI38KFC_NTxQJ5hEauR9n3qcKxyl6xcSUaZthYxCkck3BEyr400nUdSnPjpwE40V4C3B1aviQGYQGzM3qxhNRNdWbC2JcsOxyzRIunn16sb_-XNa7kJjKKDGv8WS3B3v_VIENevibKYQ4MQY7x38dZ59MPPANE6PS3iPlkrk9qoqRlfjwEW9Ljs9TpCrbOJRSHWPbl0R1VL-YGvOhxP90')`,
            }}
          ></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6"
          >
            Our Medical Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-slate-200 max-w-2xl mx-auto"
          >
            Empowering the next generation of healthcare leaders through clinical
            excellence, innovative research, and compassionate patient care.
          </motion.p>
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link
              href="#programs-grid"
              className="rounded-lg bg-[#0179bf] px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#0179bf]/90 transition-all font-display"
            >
              Explore Courses
            </Link>
            <Link
              href="#"
              className="text-sm font-semibold leading-6 text-white flex items-center gap-1 group"
            >
              Download Prospectus{" "}
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                download
              </span>
            </Link>
          </motion.div> */}
        </div>
      </section>

      {/* Programs Section */}
      <section
        className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        id="programs-grid"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-slate-200 pb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Academic Excellence
            </h2>
            <p className="mt-2 text-slate-600">
              Our professional healthcare degrees designed for your future success.
            </p>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>

        {/* Consultation CTA */}
        {/* <div className="mt-16 bg-[#0179bf]/5 rounded-2xl p-8 border border-[#0179bf]/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-xl font-bold text-slate-900 text-display">
              Need Guidance?
            </h4>
            <p className="text-slate-600 max-w-md">
              Our academic counselors can help you choose the program that best fits
              your career goals in medicine.
            </p>
          </div>
          <button className="bg-[#0179bf] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#0179bf]/90 transition-all shadow-md">
            Schedule a Consultation
          </button>
        </div> */}
      </section>

      {/* Stats Section */}
      {/* <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-4xl font-extrabold text-[#0179bf] font-display">
                  {stat.value}
                </p>
                <p className="mt-1 text-slate-500 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </main>
  );
}
