"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { facultyMembers } from "@/data/faculty";
import FacultyCard from "@/components/ui/FacultyCard";

export default function ProfessorPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[350px] md:h-[450px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0179bf]/80 to-slate-900/90 mix-blend-multiply"></div>
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCkJiTuUBZ4r6KyJ0mckMnDirxmPSgCmJ0KB1inrQtJETO7mu2oDJLyTJJXgRUmVFURcizB3T_goCmcWJnM_vuOX1PM82hpMPUvxjCVhxSqo6zuNRV2HcwVya_O-wHBClKMcgA_7Zcjy8wV3-fyHo4UkkWHPZtERNk1F5Fbw4mXW9bjjTahVekOUtfTEg2x-thvXm2eL02hbBC4hPEYXbeJim-_Jo0h9W7DDe-mpwPhsHcNCmdfSraQgXw7OfhbzKtrAG8S6N_nIZY')`,
            }}
          ></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
          >
            Our Expert Faculty
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/90 max-w-2xl font-light"
          >
            Dedicated educators and world-class medical professionals shaping the next generation of healthcare leaders at SPMC.
          </motion.p>
        </div>
      </section>

      {/* Note: Filters skipped as requested */}

      {/* Faculty Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((member) => (
            <FacultyCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </main>
  );
}
