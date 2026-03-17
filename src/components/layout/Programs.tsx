"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { getCourses } from "@/services/api";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useNavigateState } from "@/context/NavigationContext";

export function Programs() {
  const swiperRef = useRef<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
  const { navigate } = useNavigateState();
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await getCourses(1, 10);
        
        let rawItems = [];
        if (response?.data) {
          rawItems = Array.isArray(response.data.courses) ? response.data.courses : (Array.isArray(response.data) ? response.data : []);
        } else if (Array.isArray(response)) {
          rawItems = response;
        }

        const mappedCourses = rawItems.map((item: any, index: number) => ({
          id: item.id || `course-${index}`,
          title: item.title || "Unknown Course",
          description: item.short_description || item.description || "No description available.",
          image: item.listing_image || item.image_url || item.image || "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
          slug: item.slug || (item.title ? item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') : `course-${index}`)
        }));

        setCourses(mappedCourses.slice(0, 8)); // Display up to 8 featured courses
      } catch (error) {
        console.error("Error fetching courses for home:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

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
          {loading ? (
            <div className="flex gap-6 overflow-hidden">
               {Array.from({ length: 4 }).map((_, i) => (
                 <div key={i} className="flex-1 min-w-[280px] bg-white p-3 rounded-3xl animate-pulse h-[400px]">
                   <div className="aspect-square bg-slate-200 rounded-2xl mb-6"></div>
                   <div className="h-6 bg-slate-200 w-3/4 mb-4"></div>
                   <div className="h-4 bg-slate-200 w-full mb-2"></div>
                   <div className="h-4 bg-slate-200 w-5/6"></div>
                 </div>
               ))}
            </div>
          ) : (
            <Swiper
              ref={swiperRef}
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              loop={courses.length > 4}
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
              {courses.map((course, index) => (
                <SwiperSlide key={`${course.id || index}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-3 rounded-3xl shadow-sm border border-slate-100 h-full flex flex-col transition-all hover:shadow-xl hover:shadow-primary/5 group min-h-[500px]"
                  >
                    <div className="aspect-square overflow-hidden rounded-2xl mb-6 relative">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="px-4 pb-6 flex flex-col flex-1">
                      <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0179bf] transition-colors line-clamp-1">
                        {course.title}
                      </h4>
                      <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-3 h-[4.5rem]">
                        {course.short_description || course.description}
                      </p>
                      <div className="mt-auto">
                        <div
                          onClick={() => {
                            const slug = course.slug || course.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                            navigate(`/courses/${slug}`, { state: { id: course.id } });
                          }}
                          className="text-[#0179bf] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer"
                        >
                          Find out more{" "}
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

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
