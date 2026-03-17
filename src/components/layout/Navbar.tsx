"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/common/Button";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Gallery", href: "/gallery" },
  { name: "Professor", href: "/professor" },
  { name: "Contact Us", href: "/contact-us" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200 py-3"
          : "bg-white border-b border-transparent py-3"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/"
        // className=" flex-shrink-0"
        >
          <img
            src="/images/SPMCRC.png"
            alt="SPMCRC Logo"
            // fill
            className="object-contain object-left w-[350px] md:w-[450px]"
          // priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-[#0179bf]",
                pathname === item.href ? "text-[#0179bf]" : "text-slate-600"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button
            variant="primary"
            size="md"
            icon={<span className="material-symbols-outlined text-sm">call</span>}
            className="shadow-lg shadow-[#0179bf]/20"
          >
            +91-9081266625
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-slate-600 hover:text-[#0179bf] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-base font-semibold transition-colors px-2 py-1",
                    pathname === item.href ? "text-[#0179bf]" : "text-slate-600"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <hr className="border-slate-100" />
              <Button
                variant="primary"
                size="lg"
                icon={<span className="material-symbols-outlined text-sm">call</span>}
                className="w-full justify-center"
              >
                +91-9081266625
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
