"use client";

import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  Info 
} from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-primary/10">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvJjmEf5JT9nyh7Ozx7ZM0iU5xa3NVZHkrIYpxNPsRdkeX81cssxSRVaSXDuAi0RbDcYzQHheQJQT6fVF6Xjn6RGTi7611p12rD4CqT1oe-NvKotYLkViefZ-6JxZnRTxFkBVXjfRJ5R7ZF0gW6tTrAdCAscF3yRw4XHudTabasTsP1dW7THu9cnWrXd8D5FFnAdda-dqn2lSB5qdqZmch2waduK6jduKn35iT93ZD3Gl158XAOVq_CYOvMJAtQkMS0_zv4uvYsAw"
            alt="Modern hospital building"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent"></div>
        </div>
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Connect with us</h2>
            <h1 className="max-w-2xl text-4xl font-black text-white sm:text-5xl lg:text-6xl">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-200">
              Sardar Patel Medical College & Research Center is dedicated to providing excellence in medical education and healthcare. Reach out to us for any queries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="mx-auto -mt-16 relative z-10 max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Address Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center rounded-xl bg-white dark:bg-slate-900 p-8 text-center shadow-xl border border-slate-100 dark:border-slate-800"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold">Our Address</h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">PBM Hospital Campus, Bikaner, Rajasthan 334001, India</p>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center rounded-xl bg-white dark:bg-slate-900 p-8 text-center shadow-xl border border-slate-100 dark:border-slate-800"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold">Phone Numbers</h3>
            <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              <p>Main: +91-151-2226301</p>
              <p>Emergency: +91-151-2226302</p>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center rounded-xl bg-white dark:bg-slate-900 p-8 text-center shadow-xl border border-slate-100 dark:border-slate-800"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold">Email Addresses</h3>
            <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              <p>info@spmcbikaner.ac.in</p>
              <p>principal@spmcbikaner.ac.in</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inquiry Form & Map Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-sm border border-slate-100 dark:border-slate-800"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight">Send us a message</h2>
              <p className="mt-2 text-slate-500 dark:text-slate-400">Fill out the form below and our team will get back to you within 24 hours.</p>
            </div>
            <form className="grid grid-cols-1 gap-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold leading-6" htmlFor="first-name">First name</label>
                  <input className="mt-2 block w-full rounded-lg border-0 px-3.5 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-slate-800 dark:text-white dark:ring-slate-700 sm:text-sm" id="first-name" name="first-name" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-semibold leading-6" htmlFor="last-name">Last name</label>
                  <input className="mt-2 block w-full rounded-lg border-0 px-3.5 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-slate-800 dark:text-white dark:ring-slate-700 sm:text-sm" id="last-name" name="last-name" type="text" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold leading-6" htmlFor="email">Email</label>
                <input className="mt-2 block w-full rounded-lg border-0 px-3.5 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-slate-800 dark:text-white dark:ring-slate-700 sm:text-sm" id="email" name="email" type="email" />
              </div>
              <div>
                <label className="block text-sm font-semibold leading-6" htmlFor="subject">Subject</label>
                <select className="mt-2 block w-full rounded-lg border-0 px-3.5 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-slate-800 dark:text-white dark:ring-slate-700 sm:text-sm" id="subject" name="subject">
                  <option>General Inquiry</option>
                  <option>Admissions</option>
                  <option>Medical Services</option>
                  <option>Others</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold leading-6" htmlFor="message">Message</label>
                <textarea className="mt-2 block w-full rounded-lg border-0 px-3.5 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-slate-800 dark:text-white dark:ring-slate-700 sm:text-sm" id="message" name="message" rows={4}></textarea>
              </div>
              <button className="block w-full rounded-lg bg-primary px-3.5 py-3 text-center text-sm font-bold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all flex items-center justify-center gap-2" type="submit">
                <Send className="w-4 h-4" />
                Send Inquiry
              </button>
            </form>
          </motion.div>

          {/* Map Container */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="h-full min-h-[400px] overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm"
            >
              <div className="relative h-full w-full bg-slate-200 dark:bg-slate-800">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2uSUglO79D-5vuwSqLFYkdksXj1a1Oh1DXhnv9qhbc5PtHRx7kZs8ws2E1R4G6avMrBGDS1WBr1o8OpyObmhCJ6CbWmLsPR_gpnHB-GQD27aU_mAErIfqhXhIaa1wVXroF81DlPgCSOMOv52W-TygNv-vvkHVk7m_XIO3Q8PCK9UtXpHHGMBI6WZSU1YaqI7XEAOMMZmMFohzYNSe-eVrvu-_duiFLEUCIKGTLa9ulyWvXtcQeu1U7mKtuv-cGETFx6NIoWdLVug"
                  alt="Location Map"
                  fill
                  className="object-cover opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-lg bg-white/90 dark:bg-slate-900/90 px-6 py-4 shadow-xl backdrop-blur-sm flex flex-col items-center">
                    <MapPin className="text-primary w-10 h-10 mb-2" />
                    <span className="font-bold text-slate-900 dark:text-white">SPMC & PBM Hospital</span>
                    <span className="text-xs text-slate-500">Bikaner, Rajasthan</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-2xl bg-primary/5 p-6 border border-primary/10"
            >
              <h4 className="font-bold text-primary flex items-center gap-2 mb-2">
                <Info className="w-5 h-5" />
                Visitor Information
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Our campus is open for visitors between 9:00 AM and 5:00 PM. For emergency medical services, the trauma center and emergency ward are open 24/7. Please carry a valid ID when visiting the administrative block.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
