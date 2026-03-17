"use client";

import { Hero } from "@/components/layout/Hero";
import { About } from "@/components/layout/About";
import { Programs } from "@/components/layout/Programs";
import { LearningCulture } from "@/components/layout/LearningCulture";
import { AdmissionsSteps } from "@/components/layout/AdmissionsSteps";
import { AdmissionsInfo } from "@/components/layout/AdmissionsInfo";
import { Vision } from "@/components/layout/Vision";
import { TrustInfo } from "@/components/layout/TrustInfo";

export default function Home() {
  return (
    <main className="min-h-screen pb-24 bg-background selection:bg-primary/30">
      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px]" />
      </div>

      <Hero />

      <About />

      <Programs />

      <LearningCulture />

      <AdmissionsSteps />

      <AdmissionsInfo />

      <Vision />

      <TrustInfo />

    </main>
  );
}
