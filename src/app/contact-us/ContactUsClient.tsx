"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/common/Button";
import { submitContactForm } from "@/services/api";

export default function ContactUsClient() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "Please enter your first name";
    if (!formData.lastName.trim()) newErrors.lastName = "Please enter your last name";
    
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your number";
    } else if (!/^[0-9+\-\s()]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) newErrors.message = "Write your message";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    const apiData = {
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await submitContactForm(apiData);
      setSuccess("Thank you for your inquiry. We will get back to you soon!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });
      setErrors({});
    } catch (err) {
      console.error("Contact form error:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background-light text-slate-900">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[400px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-primary/10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCvJjmEf5JT9nyh7Ozx7ZM0iU5xa3NVZHkrIYpxNPsRdkeX81cssxSRVaSXDuAi0RbDcYzQHheQJQT6fVF6Xjn6RGTi7611p12rD4CqT1oe-NvKotYLkViefZ-6JxZnRTxFkBVXjfRJ5R7ZF0gW6tTrAdCAscF3yRw4XHudTabasTsP1dW7THu9cnWrXd8D5FFnAdda-dqn2lSB5qdqZmch2waduK6jduKn35iT93ZD3Gl158XAOVq_CYOvMJAtQkMS0_zv4uvYsAw')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent"></div>
          </div>
          <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-bold uppercase tracking-widest text-[#0179bf] mb-4"
            >
              Connect with us
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-2xl text-4xl font-black text-white sm:text-5xl lg:text-6xl"
            >
              Get in <span className="text-[#0179bf]">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-slate-200"
            >
              Sardar Patel Medical College & Research Center is dedicated to providing excellence in medical education and healthcare. Reach out to us for any queries.
            </motion.p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="mx-auto -mt-16 relative z-10 max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-xl border border-slate-100"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-3xl">location_on</span>
              </div>
              <h3 className="text-lg font-bold">Our Address</h3>
              <p className="mt-2 text-sm text-slate-500">Sardar patel medical college Near 108, emergency centre Nava Naroda, Ahmedabad, Gujarat 382350</p>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-xl border border-slate-100"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-3xl">phone_in_talk</span>
              </div>
              <h3 className="text-lg font-bold">Phone Numbers</h3>
              <div className="mt-2 text-sm text-slate-500">
                <p>+91-9081266625</p>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-xl border border-slate-100"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-3xl">mail</span>
              </div>
              <h3 className="text-lg font-bold">Email Addresses</h3>
              <div className="mt-2 text-sm text-slate-500">
                <p>info@spmcrc.org</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Inquiry Form & Map Section */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Form Container */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold tracking-tight">Send us a message</h2>
                <p className="mt-2 text-slate-500">Fill out the form below and our team will get back to you within 24 hours.</p>
              </div>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold leading-6" htmlFor="firstName">First name<span className="text-red-500">*</span></label>
                    <input
                      className={`mt-2 block w-full rounded-lg border-0 px-3.5 py-3 text-slate-900 shadow-sm ring-1 ring-inset placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm ${errors.firstName ? 'ring-red-500' : 'ring-slate-300'}`}
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold leading-6" htmlFor="lastName">Last name<span className="text-red-500">*</span></label>
                    <input
                      className={`mt-2 block w-full rounded-lg border-0 px-3.5 py-3 text-slate-900 shadow-sm ring-1 ring-inset placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm ${errors.lastName ? 'ring-red-500' : 'ring-slate-300'}`}
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold leading-6" htmlFor="email">Email<span className="text-red-500">*</span></label>
                    <input
                      className={`mt-2 block w-full rounded-lg border-0 px-3.5 py-3 text-slate-900 shadow-sm ring-1 ring-inset placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm ${errors.email ? 'ring-red-500' : 'ring-slate-300'}`}
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold leading-6" htmlFor="phone">Phone Number<span className="text-red-500">*</span></label>
                    <input
                      className={`mt-2 block w-full rounded-lg border-0 px-3.5 py-3 text-slate-900 shadow-sm ring-1 ring-inset placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm ${errors.phone ? 'ring-red-500' : 'ring-slate-300'}`}
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold leading-6" htmlFor="subject">Subject</label>
                  <select
                    className="mt-2 block w-full rounded-lg border-0 px-3.5 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Admissions">Admissions</option>
                    <option value="Medical Services">Medical Services</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold leading-6" htmlFor="message">Message<span className="text-red-500">*</span></label>
                  <textarea
                    className={`mt-2 block w-full rounded-lg border-0 px-3.5 py-3 text-slate-900 shadow-sm ring-1 ring-inset placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm ${errors.message ? 'ring-red-500' : 'ring-slate-300'}`}
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </Button>

                {success && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 text-green-600 font-bold text-center"
                  >
                    {success}
                  </motion.p>
                )}
                {error && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 text-red-600 font-bold text-center"
                  >
                    {error}
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* Map Container */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="h-full min-h-[450px] overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.8509037957706!2d72.6829012!3d23.0659271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87003a4d8451%3A0x33966c8951f729ac!2sSardar%20Patel%20Medical%20College!5e0!3m2!1sen!2sin!4v1773394703098!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl bg-primary/5 p-6 border border-primary/10 transition-transform"
              >
                <h4 className="font-bold text-primary flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined">info</span>
                  Visitor Information
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our campus is open for visitors between 9:00 AM and 5:00 PM. For emergency medical services, the trauma center and emergency ward are open 24/7. Please carry a valid ID when visiting the administrative block.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
