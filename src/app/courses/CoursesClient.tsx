'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CourseCard } from '@/components/ui/CourseCard';
import { getCourses } from '@/services/api';
import { Course } from '@/data/courses';

export default function CoursesClient() {
	const [coursesList, setCoursesList] = useState<Course[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let ignore = false;
		const fetchCourses = async () => {
			try {
				setLoading(true);
				const response = await getCourses();

				if (ignore) return;

				let rawItems = [];
				if (response?.data) {
					rawItems = Array.isArray(response.data.courses)
						? response.data.courses
						: Array.isArray(response.data)
							? response.data
							: [];
				} else if (Array.isArray(response)) {
					rawItems = response;
				}

				const mappedCourses: Course[] = rawItems.map(
					(item: any, index: number) => ({
						id: item.id || `course-${index}`,
						title: item.title || 'Unknown Course',
						description:
							item.short_description ||
							item.description ||
							'No description available.',
						category: item.category || 'Uncategorized',
						duration: item.duration || 'Contact for duration',
						image: item.listing_image || item.image_url || item.image,
						modes_of_study: item.modes_of_study || 'Full-Time',
						level: item.level,
						slug: item.slug,
					}),
				);

				// Deduplicate by ID
				const uniqueCourses = mappedCourses.filter(
					(course, index, self) =>
						index === self.findIndex((c) => c.id === course.id),
				);

				setCoursesList(uniqueCourses);
				setError(null);
			} catch (err) {
				console.error('Error fetching courses:', err);
				setError('Failed to load courses. Please try again later.');
			} finally {
				if (!ignore) setLoading(false);
			}
		};

		fetchCourses();
		return () => {
			ignore = true;
		};
	}, []);

	return (
		<main className='min-h-screen'>
			{/* Hero Section */}
			<section className='relative overflow-hidden bg-slate-900 py-24 sm:py-32'>
				<div className='absolute inset-0 z-0'>
					<div className='absolute inset-0 bg-gradient-to-r from-[#0179bf]/80 to-slate-900/90 mix-blend-multiply'></div>
					<div
						className='h-full w-full bg-cover bg-center'
						style={{
							backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAEbNTXcq43fTIK5NKzK7WNwe1wgau3uYDYd2wqQk2R0UtVPTRbJcD6s3iI38KFC_NTxQJ5hEauR9n3qcKxyl6xcSUaZthYxCkck3BEyr400nUdSnPjpwE40V4C3B1aviQGYQGzM3qxhNRNdWbC2JcsOxyzRIunn16sb_-XNa7kJjKKDGv8WS3B3v_VIENevibKYQ4MQY7x38dZ59MPPANE6PS3iPlkrk9qoqRlfjwEW9Ljs9TpCrbOJRSHWPbl0R1VL-YGvOhxP90')`,
						}}
					></div>
				</div>
				<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className='text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6'
					>
						Our Medical Programs
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className='mt-6 text-lg leading-8 text-slate-200 max-w-2xl mx-auto'
					>
						Empowering the next generation of healthcare leaders through
						clinical excellence, innovative research, and compassionate patient
						care.
					</motion.p>
				</div>
			</section>

			{/* Programs Section */}
			<section
				className='py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
				id='programs-grid'
			>
				<div className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-slate-200 pb-8'>
					<div>
						<h2 className='text-3xl font-bold text-slate-900'>
							Academic Excellence
						</h2>
						<p className='mt-2 text-slate-600'>
							Our professional healthcare degrees designed for your future
							success.
						</p>
					</div>
				</div>

				{/* Loading/Error States */}
				{loading ? (
					<div className='flex justify-center items-center py-20'>
						<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#0179bf]'></div>
					</div>
				) : error ? (
					<div className='text-center py-20'>
						<p className='text-red-500 font-bold'>{error}</p>
						<button
							onClick={() => window.location.reload()}
							className='mt-4 bg-[#0179bf] text-white px-6 py-2 rounded-lg'
						>
							Retry
						</button>
					</div>
				) : (
					/* Course Grid */
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
						{coursesList.map((course, index) => (
							<CourseCard
								key={course.id}
								course={course}
								index={index}
							/>
						))}
					</div>
				)}
			</section>
		</main>
	);
}
