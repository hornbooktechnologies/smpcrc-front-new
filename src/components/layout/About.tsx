"use client";

import React from "react";
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBadPuQNNodEkvicOmxLdv3X76bBwrfZszCkB06S9Ti5aids_niMU82hEv8zrQkwAFxOj5KlisvWa3BziU0UgaVHQW2uxm7iSRZHJ2MNtYTgWFLQV8HS_uByjqbfzKvrKt-QeGZuzTXkilCeveH9w55_F_P4Vv5SM-UbwrMsBNMTwDZFVx7rHQkJA2tMY82N5zhSAdVIodoNAdIVCT4wbfUeLjhDIcXspnr2ItSuuXszkFxYWgyFIPH1NMDqSfT37fDUkWff9n6Rno"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-primary font-bold text-sm tracking-[0.2em] uppercase">
              About Sardar Patel Medical College & Research Center
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Building tomorrow's healthcare leaders
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              At Sardar Patel Medical College & Research Center, we provide a
              dynamic learning environment where students gain both academic
              knowledge and real-world clinical experience. Our focus is to
              nurture responsible healthcare professionals who are ready to
              serve communities and improve lives through quality medical care.
            </p>
            <Button variant="primary" size="lg" className="w-fit mt-4">
              Find out more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
