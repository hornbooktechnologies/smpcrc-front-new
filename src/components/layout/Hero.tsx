'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/common/Button';

export function Hero() {
	return (
		<section className='relative h-[500px] md:h-[600px] flex items-center overflow-hidden'>
			{/* Background with Gradient Overlay */}
			<div className='absolute inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent z-10'></div>
				<img
					src='/images/home_hero.webp'
					alt='SPMCRC Campus'
					className='w-full h-full object-cover scale-105 active:scale-100 transition-transform duration-1000'
				/>
			</div>

			<div className='relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white'>
				<div className='max-w-3xl'>
					{/* Animated Tagline */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
					>
						<h2 className='text-[#0179bf] font-bold tracking-widest uppercase text-sm mb-6 flex items-center gap-3'>
							<span className='w-10 h-[2px] bg-[#0179bf]'></span>
							Excellence in Medical Education
						</h2>
					</motion.div>

					{/* Animated Heading */}
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
						className='text-5xl md:text-6xl font-black leading-[1.1] mb-8 tracking-tight'
					>
						Sardar Patel Medical College &amp; Research Center
					</motion.h1>

					{/* Animated Description */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
						className='text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl'
					>
						Shaping The Future Of Healthcare Education
					</motion.p>

					{/* Animated Button */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 0.5,
							delay: 0.6,
							type: 'spring',
							stiffness: 100,
						}}
						className='flex flex-wrap gap-4'
					>
						<Link href='/courses'>
							<Button
								variant='primary'
								size='lg'
								className='px-10 py-5 rounded-2xl font-bold group shadow-[0_0_30px_rgba(1,121,191,0.3)] hover:shadow-[0_0_40px_rgba(1,121,191,0.5)] transition-all'
								icon={
									<ArrowRight
										className='group-hover:translate-x-1 transition-transform'
										size={20}
									/>
								}
							>
								Check Our Courses
							</Button>
						</Link>
						{/* <button className="px-10 py-5 border-2 border-white/20 hover:border-white/40 bg-white/5 backdrop-blur-md rounded-2xl font-bold transition-all">
              Learn More
            </button> */}
					</motion.div>
				</div>
			</div>

			{/* Decorative Elements */}
			<div className='absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f8fafc] to-transparent z-20'></div>

			{/* Floating Elements Animation Overlay */}
			<div className='absolute inset-0 pointer-events-none z-10 overflow-hidden'>
				<motion.div
					animate={{
						y: [0, -20, 0],
						rotate: [0, 5, 0],
					}}
					transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
					className='absolute top-1/4 right-1/4 w-32 h-32 bg-[#0179bf]/10 rounded-full blur-3xl'
				/>
				<motion.div
					animate={{
						y: [0, 30, 0],
						rotate: [0, -10, 0],
					}}
					transition={{
						duration: 15,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 1,
					}}
					className='absolute bottom-1/3 left-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl'
				/>
			</div>
		</section>
	);
}
