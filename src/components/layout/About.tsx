"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/common/Button";

export const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="About SPMCRC"
                className="w-full h-auto object-cover"
                src="/images/home_about.webp"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-primary font-bold text-sm tracking-[0.2em] uppercase">
              About Sardar Patel Medical College & Research Center
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Building tomorrow&apos;s healthcare leaders
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              At Sardar Patel Medical College & Research Center, we provide a
              dynamic learning environment where students gain both academic
              knowledge and real-world clinical experience. Our focus is to
              nurture responsible healthcare professionals who are ready to
              serve communities and improve lives through quality medical care.
            </p>
            <Link href="/about">
              <Button variant="primary" size="lg" className="w-fit mt-4">
                Find out more
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
