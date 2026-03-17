"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Professor", href: "/professor" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand & About */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block relative h-16 w-56">
              <Image
                src="/images/logo.png"
                alt="SPMCRC Logo"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm max-w-sm">
              Sardar Patel Medical College & Research Center is a premier institution dedicated to providing world-class medical education, healthcare, and research.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-12">
            <h3 className="text-white font-bold text-lg mb-8 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#0179bf] rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#0179bf] transition-colors flex items-center gap-2 group text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-[#0179bf] transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Inquiries / Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-8 relative">
              Inquiries
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#0179bf] rounded-full"></span>
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-[#0179bf]">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Address</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Sardar patel medical college Near 108, emergency centre Nava Naroda, Ahmedabad, Gujarat 382350
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-[#0179bf]">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Email</h4>
                  <p className="text-slate-400 text-sm">info@spmcrc.org</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-[#0179bf]">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Phone</h4>
                  <p className="text-slate-400 text-sm">+91-9081266625</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-slate-500 text-xs">
            © {currentYear} Sardar Patel Medical College & Research Center is Proudly Owned by Kothiya Hospital
          </p>
          {/* <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
