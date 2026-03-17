'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FacultyMember } from '@/data/faculty';
import FacultyCard from '@/components/ui/FacultyCard';
import { getProfessors } from '@/services/api';
import Image from 'next/image';

export default function ProfessorClient() {
	const [facultyList, setFacultyList] = useState<FacultyMember[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchProfessors = async () => {
			try {
				setLoading(true);
				const response = await getProfessors();

				let facultyDocs = [];
				if (response.data) {
					if (Array.isArray(response.data)) {
						facultyDocs = response.data;
					} else if (Array.isArray(response.data.professors)) {
						facultyDocs = response.data.professors;
					} else if (Array.isArray(response.data.docs)) {
						facultyDocs = response.data.docs;
					}
				} else if (Array.isArray(response)) {
					facultyDocs = response;
				}

				const mappedFaculty: FacultyMember[] = facultyDocs.map(
					(prof: any, index: number) => ({
						id: prof.id || `prof-${index}`,
						name: prof.name,
						title: prof.designation,
						department: prof.department,
						experience: prof.experience,
						image: prof.profile_image || prof.image,
					}),
				);

				setFacultyList(mappedFaculty);
				setError(null);
			} catch (err) {
				console.error('Error fetching professors:', err);
				setError('Failed to load faculty members.');
			} finally {
				setLoading(false);
			}
		};

		fetchProfessors();
	}, []);

	return (
		<main className='min-h-screen'>
			{/* Hero Section */}
			<section className='relative w-full h-[350px] md:h-[450px] overflow-hidden'>
				<div className='absolute inset-0'>
					<Image
						src='https://lh3.googleusercontent.com/aida-public/AB6AXuCkJiTuUBZ4r6KyJ0mckMnDirxmPSgCmJ0KB1inrQtJETO7mu2oDJLyTJJXgRUmVFURcizB3T_goCmcWJnM_vuOX1PM82hpMPUvxjCVhxSqo6zuNRV2HcwVya_O-wHBClKMcgA_7Zcjy8wV3-fyHo4UkkWHPZtERNk1F5Fbw4mXW9bjjTahVekOUtfTEg2x-thvXm2eL02hbBC4hPEYXbeJim-_Jo0h9W7DDe-mpwPhsHcNCmdfSraQgXw7OfhbzKtrAG8S6N_nIZY'
						alt='Medical college campus'
						fill
						className='object-cover object-center'
					/>
					<div className='absolute inset-0 bg-primary/60 mix-blend-multiply'></div>
				</div>
				<div className='relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center'>
					<motion.span
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						className='px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-widest mb-4'
					>
						Academic Excellence
					</motion.span>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className='text-4xl md:text-6xl font-black text-white mb-6 leading-tight'
					>
						Our Expert Faculty
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className='text-lg text-white/90 max-w-2xl font-light'
					>
						Dedicated educators and world-class medical professionals shaping
						the next generation of healthcare leaders at SPMC.
					</motion.p>
				</div>
			</section>

			{/* Faculty Grid */}
			<section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				{loading ? (
					<div className='flex justify-center items-center py-20'>
						<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-primary'></div>
					</div>
				) : error ? (
					<div className='text-center py-20 text-red-500 font-bold'>
						{error}
					</div>
				) : (
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
						{facultyList.map((member) => (
							<FacultyCard
								key={member.id}
								member={member}
							/>
						))}
					</div>
				)}
			</section>
		</main>
	);
}
