'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';

export function TrustInfo() {
	return (
		<section className='py-24 bg-white relative'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className='max-w-4xl mx-auto text-center'
				>
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ type: 'spring', delay: 0.2 }}
						className='inline-flex items-center justify-center p-6 rounded-[2rem] mb-10'
					>
						<img
							src='/images/dimondassociation.png'
							alt='Medical Education'
							className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
						/>
					</motion.div>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3 }}
						className='text-3xl md:text-5xl font-black text-slate-900 mb-10 tracking-tight'
					>
						Ahmedabad Diamond Association Medical Trust
					</motion.h2>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.4 }}
						className='relative'
					>
						<div className='prose prose-lg mx-auto'>
							<p className='text-slate-600 text-lg md:text-xl leading-[1.8] font-medium'>
								The Ahmedabad Diamond Association Medical Trust has a
								long-standing history of commitment to healthcare in the region.
								Founded by visionaries from the diamond industry, the trust has
								consistently worked towards making quality healthcare
								accessible. SPMCRC stands as a testament to their dedication to
								educational excellence and social responsibility in the medical
								field.
							</p>
						</div>
					</motion.div>

					{/* Decorative divider */}
					<motion.div
						initial={{ width: 0 }}
						whileInView={{ width: 100 }}
						viewport={{ once: true }}
						transition={{ delay: 0.6, duration: 0.8 }}
						className='h-1 bg-primary/20 mx-auto mt-12 rounded-full'
					/>
				</motion.div>
			</div>
		</section>
	);
}
