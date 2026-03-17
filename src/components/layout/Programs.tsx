"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const programs = [
  {
    title: "MBBS Program",
    description: "The Bachelor of Medicine and Bachelor of Surgery (MBBS) program provides comprehensive medical education with strong clinical exposure and hands-on training.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA91ckfBPRX5xJOTjUNAjobnYu-peBnYIK4fw_vO6suvVwWXUV-mGaIu3wPrbuaovOt6D-xnWYtOK-KpQlbxHzH-zOeuk52trLpbPhbDW_XvLg8BDrEdZvqtvPkSGYm6jc5JzmrqcZu9n3bqNvpvO4ZIdGiCz7JbOOo9FuiTSgPF3TqyBYn7CsUoeGbpSSsZxCI-Mj4IalT41kVQ9zcQ4AwjmLLbtwQtiIMrKAmHjyD4dClaIWgtLpR7P25KJcrIuODHFShl71WmOM",
    href: '/study-online.html',
  },
  {
    title: "Nursing Programs",
    description: "Our nursing programs focus on developing skilled and compassionate healthcare professionals through practical training and patient-centered care.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuATTdWtmdtP6NVUbzi6cKvX5FnGsnM8pMvNtDYQDsTKRF_5g6jqxte1FvWQa0naUIha68kOjdjEhofrrSjjA7ZXoP-Hv4AIQ68sqXM6jXGoLGcC2nZsE45XlCASu78E7fD2po9pkGIaijzfU-Hvqe4DwKqgg10umyiXAxpDb5SF7j2tArwhPDYG-b7TgwoAUZKdwR0ngX85aRSe5Ln1AKlUnPMstncb7ZkjSuewKIU13epUNKWbX_52ZaLh7M2iAxmdXd5xgvN5dUI",
    href: '/study-online.html',
  },
  {
    title: "Allied Health Sciences",
    description: "Our allied health sciences programs prepare students for specialized roles in healthcare, including physiotherapy, medical laboratory technology, and radiology.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC00nSvUxUvkAIDSRYG4dH9VycUGCQa1_0j57-rAXaKAfOC8UpaZSFQd5nzxt2HZhMsF2BYcWB2AKl1qUZe8LqTJOhGn9eiL_oJSKiOWXNxWSzvXP-uyBjBLMDvw9k3fPLA0XKQZDw9Y2bkDxJ__jTfkdxvmM2n48LAdgv_KwiXqYHAMjmmvzyEq6i7GCtzyNCNwWRvUBMZ7K_jz51RkCLeFdcrjd7gsXjDafKaHICfMuRX-TETFe7LPqtPlEGjQkHnBGp63vWQtbY",
    href: '/study-online.html',
  },
  {
    title: "Health and medicine",
    description: "Our health and medicine programs provide comprehensive training in various medical fields, equipping students with the knowledge in the healthcare industry.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXpBfUfCo7Ckk78aIvTvPhjOIUVIC1pKnrN0Dn8XPC3l_cQSXE0zvl2wHvBuKr7F_trKbKIDhx1qjbJnV2OWts9tj5NBtjP5EJn9_LBnDdgKXPKx7m_bG_mCOPFVF7CcFO69hUVOF7I8pthmecWBiYEBpG4iumGfWnBABPmp2_NQFivbRH0vIpZTqib6wJTyPgEbfoFycszfTIwPYh8uaPQQyL23HfIcE8eLQHU2p8-_pzxijb71-ymTCHsQrA_bdbSQdtW5rw5Z0",
    href: '/study-online.html',
  },
  {
    title: "Medical Research & Innovation",
    description: "Students are encouraged to participate in research activities that contribute to advancements in healthcare and medical science.",
    image: "/medical-research.png",
    href: '/study-online.html',
  },
];

export function Programs() {
  const swiperRef = useRef<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any

  return (
    <section className="py-24 bg-slate-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#0179bf] font-bold text-sm tracking-[0.2em] uppercase mb-4"
            >
              Educational Programs
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-slate-900"
            >
              Browse courses by study area
            </motion.h3>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-[#0179bf] hover:text-white transition-all shadow-sm active:scale-95 z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => swiperRef.current?.swiper.slideNext()}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-[#0179bf] hover:text-white transition-all shadow-sm active:scale-95 z-10"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative px-1 overflow-visible">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.programs-pagination',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="!pb-16"
          >
            {programs.map((program, index) => (
              <SwiperSlide key={`${program.title}-${index}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-3 rounded-3xl shadow-sm border border-slate-100 h-full flex flex-col transition-all hover:shadow-xl hover:shadow-primary/5 group min-h-[500px]"
                >
                  <div className="aspect-square overflow-hidden rounded-2xl mb-6">
                    <img
                      src={program.image || "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="px-4 pb-6 flex flex-col flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0179bf] transition-colors line-clamp-1">
                      {program.title}
                    </h4>
                    <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-3 h-[4.5rem]">
                      {program.description}
                    </p>
                    <div className="mt-auto">
                      <a
                        href={program.href}
                        className="text-[#0179bf] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                      >
                        Find out more{" "}
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Container */}
          <div className="programs-pagination flex justify-center !bottom-0 mt-8" />
        </div>
      </div>
      <style jsx global>{`
        .programs-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #e2e8f0;
          opacity: 1;
          transition: all 0.3s ease;
          border-radius: 4px;
        }
        .programs-pagination .swiper-pagination-bullet-active {
          width: 32px;
          background: #0179bf;
        }
      `}</style>
    </section>
  );
}
