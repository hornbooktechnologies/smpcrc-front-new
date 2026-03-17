"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Target, 
  Eye, 
  BadgeCheck, 
  GraduationCap, 
  ShieldCheck, 
  Activity, 
  Globe 
} from "lucide-react";

const leadership = [
  {
    name: "Dr. Rajesh Patel",
    role: "Dean & Principal",
    qualification: "MD, PhD in Cardiology",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAochR4gy-lqYaZxeesFjZ4buvwlhCeYr6p3CspjPkVKoY4GmQR8eiWwtTeZ4qNJIms_BwT_ryLGqikpi3XtPI52k2_ieSXGZsVWxm4wEr31-ffqjRNTBG3q7k-I9r7cXZG1wiC3oLEoOUUSRS0BlUHdJ5QNH_x0upWx4OcmF4usJc1eDsyI6AcQ_0z_6SGPdfvjnGZr6FhcuYU9aKePyngWpbLCaQH43xtnS_4ifoDWBd5G3Aw3_pqorwUlHNnvM4wjd7AqDaAH4k"
  },
  {
    name: "Mrs. Sunita Verma",
    role: "Chairperson of Trust",
    qualification: "Philanthropist & Educator",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiakeGpGtew1uEidG2wfciOFe3AuWZbMHu28_Pv-hTWJ3cRVh47hJCXxlvLWQ0wXB8-wzOD2M-mkIoZrW_Vjh8pqODFtL6t3gRKC2Fj7vcAlXf4QJ-FLj1QtC9pLStbvVc4XX1aninupHyjjWmTgb719U7QqlPlmvCNrgzR8ZWS_gr3SXKlaCDs5fUMe59uuU-PFWddq_GsUOtqQWxojBQXQTbNp88D6FwOeqCOtQOKEC56-kP_l_OBeUPLt7EtiQ8McR8LJ9fNm4"
  },
  {
    name: "Mr. Anil Khanna",
    role: "Executive Trustee",
    qualification: "B.Tech, MBA (IIM-A)",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjOmYu_GeIgqlcWhT6WEdvwy6Zvr6-Ocri6xgAtTrf5ycDwVCsiP4OZCa7gEb1b4VBzggLl40VP4OdYJYjAFVBNi5kn6CPbtERfRgkP8bH1P42Fa7QgXef4b-hiHLOKtlKt64k4jCAgh9uK-UebVfHeZuZy5tj2W4QU45D8Z0k_wwRl2YavGYqic8gQV6bgbFZN9033TxueB3562gp7UtDNWv8O5Glm03FKgSJ4tzpvSOKtT3ofXk1jGs4lQwbLThblDe5Ad8VJKw"
  },
  {
    name: "Dr. Meera Joshi",
    role: "Medical Superintendent",
    qualification: "MS, MCh Neurosurgery",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7XESp9biExr5JVbreEFyyTNLdvO0IJmBA2McDAQpjB72_z1mgH6Kv8lZkqI6MYdjvi5YXgxkixyb-VGQyG0qJcQQUSv5gMZMItVk8Emu0PHweL5BqZSlNn8oULah4iIVrCg4c6iKoBALibnpuCw0g3rlgd5mGUR43xnXUI2MNsbCDUcquugn_W53_oujaLpZiaC2Ct_rL0K8EhhFmSMRvIy7VnbKfRB_gTG0GMOsNOwtuPIHthuT9By3YSrZZ2avRE-7Pyf6yNkM"
  }
];

const credentials = [
  { icon: BadgeCheck, label: "NMC Approved" },
  { icon: GraduationCap, label: "University Affiliated" },
  { icon: ShieldCheck, label: "NABH Accredited" },
  { icon: Activity, label: "NABL Certified" },
  { icon: Globe, label: "ISO 9001:2015" }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0179bf]/80 mix-blend-multiply z-10"></div>
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6f70nfEpaIGn2fDs8TiGFNx_gnTVs_bZlDL0xXosKcacgN0xbZitrdfTy5SVEfZAyqVRkyg6fxJBUT39ui3s_PquqsICgwPxSPoC60c7Jpsislabv20VmN4QHRTpp6x-KPdg4doQs7fcQbbBbx0GYoCIIbF8P_CxQ2yglh1-v1_zb4CkNdh0fdqyUthd01tu3TgV6JnXOliHOklg0BTntgqHj3G_KZkPKtWi8hzTFkQUYH7MtUxkAqfqME2T18Mm_zQxBY0Lrp8o"
            alt="Campus"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-10 text-center text-white">
          <motion.nav 
            {...fadeInUp}
            className="flex items-center justify-center gap-2 mb-6 text-white/80 text-sm font-medium"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-white">About</span>
          </motion.nav>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-black mb-6 leading-tight"
          >
            Excellence in Healthcare Education
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            Dedicated to nurturing the next generation of medical professionals since 1955.
          </motion.p>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3NIZhqHfW0xNY4txawUCEJvosAQO6jL77CQcLhStjkYWkuqj1WrPs0U7rsY4lepqvbLKJ_Fj1FdspKTbya6u0qxvhMxwPUOe6UkTBtQ_BK29MR7ka7c0D0AKh9WW1wS7uC8heaPWcqlMHsltsn6N1lwr6Dw7dIe3IGvLmhlZTQIdhvEMJ9bHcDIs7MiUolZN1M2ekP6bvn2PxAkd2LU8HP6JU_mB6xq_4abJ_P8DBMVgQjaibfpAygxxmol7iQt5lxkqEY8JBd50"
                  alt="History"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-[#0179bf] text-white p-10 rounded-3xl hidden lg:block shadow-xl">
                <p className="text-5xl font-black">65+</p>
                <p className="text-sm font-bold opacity-85 uppercase tracking-widest mt-2">Years of Legacy</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#0179bf] font-bold tracking-[0.2em] uppercase text-sm block mb-4">Our Legacy</span>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-slate-900 font-display">
                Founded on Vision, Built on Excellence
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Sardar Patel Medical College & Research Center was established with a singular mission: to provide world-class medical education to the region&apos;s brightest minds. From humble beginnings in 1955, we have evolved into a state-of-the-art research and teaching hospital.
                </p>
                <p>
                  Named after the &quot;Iron Man of India&quot;, our institution embodies resilience, discipline, and service to the nation. Over the decades, we have produced thousands of healthcare leaders who serve across the globe.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="size-16 bg-[#0179bf]/10 rounded-2xl flex items-center justify-center text-[#0179bf] mb-8">
                <Eye className="size-8" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-slate-900 font-display">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-lg italic">
                &quot;To be a globally recognized center of excellence in medical education and research, fostering innovation and compassionate clinical practice that transforms the lives of patients and the community.&quot;
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="size-16 bg-[#0179bf]/10 rounded-2xl flex items-center justify-center text-[#0179bf] mb-8">
                <Target className="size-8" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-slate-900 font-display">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg italic">
                &quot;To provide accessible, high-quality medical education, conduct cutting-edge research, and deliver exemplary patient care through ethical practices, community engagement, and technological advancement.&quot;
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="text-center mb-16">
            <span className="text-[#0179bf] font-bold tracking-[0.2em] uppercase text-sm block mb-4">Leadership</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-display">The Visionaries Behind Our Success</h2>
          </div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {leadership.map((member, index) => (
              <motion.div key={index} variants={fadeInUp} className="group text-center">
                <div className="aspect-square rounded-3xl overflow-hidden mb-8 relative border border-slate-100">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#0179bf]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h4>
                <p className="text-[#0179bf] font-bold text-sm mb-2">{member.role}</p>
                <p className="text-slate-500 text-sm italic">{member.qualification}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="glow opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 underline-offset-8">
            <div className="max-w-xl">
              <span className="text-[#0179bf] font-bold tracking-[0.2em] uppercase text-sm block mb-4">Our Credentials</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-display">Recognized for Excellence</h2>
            </div>
            <Link href="#" className="text-[#0179bf] font-bold flex items-center gap-2 group decoration-2 hover:underline">
              View All Certificates
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {credentials.map((item, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-white p-10 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl hover:shadow-[#0179bf]/5"
              >
                <div className="text-[#0179bf] mb-6">
                  <item.icon className="size-12" />
                </div>
                <h6 className="font-extrabold text-sm text-slate-900 uppercase tracking-tight">{item.label}</h6>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
