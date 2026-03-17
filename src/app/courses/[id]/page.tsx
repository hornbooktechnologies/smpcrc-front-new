"use client";

import React from "react";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import { courses } from "@/data/courses";

export default function CourseDetailsPage() {
  const params = useParams();
  const id = params.id as string;

  const course = courses.find((c) => c.id === id);

  if (!course) {
    notFound();
  }

  const details = course.details || {
    overview: [course.description],
    eligibility: {
      academic: "Contact admissions for details.",
      marks: "Contact admissions for details.",
      age: "Contact admissions for details.",
      entrance: "Contact admissions for details."
    },
    curriculum: [],
    admissionProcess: []
  };

  return (
    <main className="min-h-screen">
      {/* Course Hero Section */}
      <section className="relative w-full aspect-[21/9] min-h-[500px] flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-[#0179bf]/20 backdrop-blur-md border border-[#0179bf]/30 text-white px-3 py-1 rounded-full mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0179bf] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0179bf]"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider font-display">
                Admissions Open 2024-25
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 font-display"
            >
              {course.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap gap-6 text-slate-200"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0179bf]">schedule</span>
                <span className="text-sm font-medium">{course.duration} Duration</span>
              </div>
              {course.recognition && (
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0179bf]">verified</span>
                  <span className="text-sm font-medium">{course.recognition}</span>
                </div>
              )}
              {course.internship && (
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0179bf]">workspace_premium</span>
                  <span className="text-sm font-medium">{course.internship}</span>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Content Column */}
          <div className="lg:col-span-2 space-y-16">
            {/* Overview */}
            <section className="scroll-mt-24" id="overview">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3 font-display">
                <span className="w-1.5 h-8 bg-[#0179bf] rounded-full"></span>
                Course Overview
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                {details.overview.map((paragraph, index) => (
                  <p key={index} className={index === 0 ? "text-lg" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Eligibility */}
            <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm" id="eligibility">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 font-display">
                <span className="material-symbols-outlined text-[#0179bf]">assignment_turned_in</span>
                Eligibility Criteria
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0179bf]/10 rounded-lg flex items-center justify-center text-[#0179bf]">
                    <span className="material-symbols-outlined">school</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 font-display">Academic Qualification</h4>
                    <p className="text-sm text-slate-600">{details.eligibility.academic}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0179bf]/10 rounded-lg flex items-center justify-center text-[#0179bf]">
                    <span className="material-symbols-outlined">analytics</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 font-display">Minimum Marks</h4>
                    <p className="text-sm text-slate-600">{details.eligibility.marks}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0179bf]/10 rounded-lg flex items-center justify-center text-[#0179bf]">
                    <span className="material-symbols-outlined">calendar_today</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 font-display">Age Limit</h4>
                    <p className="text-sm text-slate-600">{details.eligibility.age}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0179bf]/10 rounded-lg flex items-center justify-center text-[#0179bf]">
                    <span className="material-symbols-outlined">fact_check</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 font-display">Entrance Exam</h4>
                    <p className="text-sm text-slate-600">{details.eligibility.entrance}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Curriculum */}
            {details.curriculum.length > 0 && (
              <section id="curriculum">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 font-display">
                  <span className="material-symbols-outlined text-[#0179bf]">menu_book</span>
                  Curriculum Summary
                </h2>
                <div className="space-y-4">
                  {details.curriculum.map((item, index) => (
                    <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
                      <div className="bg-slate-50 p-4 font-bold flex justify-between items-center font-display">
                        <span>{item.phase}</span>
                        <span className="text-xs text-[#0179bf] uppercase tracking-widest">{item.duration}</span>
                      </div>
                      <div className="p-4 text-sm text-slate-600">
                        {item.subjects}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Admission Process */}
            {details.admissionProcess.length > 0 && (
              <section className="relative" id="admissions">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 font-display">
                  <span className="material-symbols-outlined text-[#0179bf]">how_to_reg</span>
                  Admission Process
                </h2>
                <div className="relative pl-8 space-y-12 before:content-[''] before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                  {details.admissionProcess.map((step, index) => (
                    <div key={index} className="relative">
                      <span className="absolute -left-[29px] top-1 w-6 h-6 rounded-full bg-[#0179bf] border-4 border-white z-10"></span>
                      <h4 className="font-bold text-slate-900 font-display">{step.title}</h4>
                      <p className="text-sm text-slate-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Sidebar Sticky CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
                <h3 className="text-xl font-bold mb-6 font-display">Inquire About Course</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Full Name</label>
                    <input
                      className="w-full bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-[#0179bf] py-3 px-4 text-sm"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email Address</label>
                    <input
                      className="w-full bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-[#0179bf] py-3 px-4 text-sm"
                      placeholder="john@example.com"
                      type="email"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Phone Number</label>
                    <input
                      className="w-full bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-[#0179bf] py-3 px-4 text-sm"
                      placeholder="+91 XXXXX XXXXX"
                      type="tel"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Message</label>
                    <textarea
                      className="w-full bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-[#0179bf] py-3 px-4 text-sm"
                      placeholder={`I am interested in the ${course.title} program...`}
                      rows={4}
                    ></textarea>
                  </div>
                  <button
                    className="w-full bg-[#0179bf] text-white font-bold py-4 rounded-lg shadow-lg shadow-[#0179bf]/30 hover:bg-[#0179bf]/90 transition-all font-display"
                    type="submit"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
              <div className="bg-[#0179bf]/5 border border-[#0179bf]/20 p-6 rounded-2xl">
                <h4 className="font-bold text-[#0179bf] mb-2 flex items-center gap-2 font-display">
                  <span className="material-symbols-outlined">download</span>
                  Course Brochure
                </h4>
                <p className="text-xs text-slate-600 mb-4">
                  Download the detailed syllabus and fee structure PDF.
                </p>
                <button className="w-full bg-white border border-[#0179bf] text-[#0179bf] font-bold py-2 rounded-lg text-sm hover:bg-[#0179bf] hover:text-white transition-all font-display">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
