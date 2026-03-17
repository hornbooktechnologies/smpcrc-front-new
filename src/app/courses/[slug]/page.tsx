'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { getCourseById, getCourses, submitContactForm } from '@/services/api';
import { useNavigateState } from '@/context/NavigationContext';

export default function CourseDetailsPage() {
	const params = useParams();
	const slug = params.slug as string;
	const { locationState } = useNavigateState();

	const [course, setCourse] = useState<any>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// Inquiry Form State
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		phone: '',
		message: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [success, setSuccess] = useState<string | null>(null);
	const [formError, setFormError] = useState<string | null>(null);
	const [errors, setErrors] = useState<Record<string, string>>({});

	const validate = () => {
		const newErrors: Record<string, string> = {};
		if (!formData.fullName.trim())
			newErrors.fullName = 'Please enter your full name';

		if (!formData.email.trim()) {
			newErrors.email = 'Please enter your email';
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
		) {
			newErrors.email = 'Please enter a valid email address';
		}

		if (!formData.phone.trim()) {
			newErrors.phone = 'Please enter your number';
		} else if (!/^[0-9+\-\s()]{7,15}$/.test(formData.phone)) {
			newErrors.phone = 'Please enter a valid phone number';
		}

		if (!formData.message.trim()) newErrors.message = 'Write your message';

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		if (errors[name]) {
			setErrors((prev) => ({ ...prev, [name]: '' }));
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSuccess(null);
		setFormError(null);

		if (!validate()) return;

		setIsSubmitting(true);

		const apiData = {
			name: formData.fullName,
			email: formData.email,
			phone: formData.phone,
			subject: course.title,
			message: formData.message,
		};

		try {
			await submitContactForm(apiData);
			setSuccess('Thank you! Your inquiry has been sent.');
			setFormData({
				fullName: '',
				email: '',
				phone: '',
				message: '',
			});
			setErrors({});
		} catch (err) {
			console.error('Inquiry form error:', err);
			setFormError('Something went wrong. Please try again.');
		} finally {
			setIsSubmitting(false);
		}
	};

	useEffect(() => {
		const fetchCourse = async () => {
			try {
				setLoading(true);
				setError(null);

				let targetId = locationState?.id;

				// Helper to sluggify titles for comparison
				const sluggify = (title: string) =>
					title
						? title
								.toLowerCase()
								.replace(/[^a-z0-9]+/g, '-')
								.replace(/(^-|-$)+/g, '')
						: '';

				// If no ID in state (e.g. direct refresh), find it by slug
				if (!targetId) {
					const coursesResponse = await getCourses(1, 100);
					const allCourses =
						coursesResponse?.data?.courses ||
						(Array.isArray(coursesResponse?.data) ? coursesResponse?.data : []);
					const found = allCourses.find(
						(c: any) =>
							sluggify(c.title) === slug || c.id === slug || c.slug === slug,
					);
					if (found) {
						targetId = found.id;
					}
				}

				if (!targetId) {
					setError('Course not found');
					setLoading(false);
					return;
				}

				const response = await getCourseById(targetId);
				if (response?.success && response?.data?.course) {
					setCourse(response.data.course);
				} else {
					setError('Course not found');
				}
			} catch (err) {
				console.error('Error fetching course details:', err);
				setError('Failed to load course details.');
			} finally {
				setLoading(false);
			}
		};

		fetchCourse();
	}, [slug, locationState]);

	if (loading) {
		return (
			<div className='min-h-screen flex justify-center items-center'>
				<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#0179bf]'></div>
			</div>
		);
	}

	if (error || !course) {
		return (
			<div className='min-h-screen flex flex-col justify-center items-center'>
				<h1 className='text-2xl font-bold text-slate-800'>
					{error || 'Course Not Found'}
				</h1>
				<button
					onClick={() => (window.location.href = '/courses')}
					className='mt-4 bg-[#0179bf] text-white px-6 py-2 rounded-lg'
				>
					Back to Courses
				</button>
			</div>
		);
	}

	// Map API fields to the new design
	const displayImage =
		course.detail_image ||
		course.listing_image ||
		'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop';

	return (
		<main className='min-h-screen'>
			{/* Course Hero Section */}
			<section className='relative w-full aspect-[21/7] min-h-[350px] flex items-end'>
				<div className='absolute inset-0 z-0'>
					{course.detail_image || course.listing_image ? (
						<Image
							src={displayImage}
							alt={course.title}
							fill
							className='w-full h-full object-cover'
							priority
						/>
					) : (
						<div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent'></div>
					)}
					<div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent'></div>
				</div>
				<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full'>
					<div className='max-w-3xl'>
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className='text-4xl md:text-6xl font-black text-white leading-tight mb-4 font-display'
						>
							{course.title}
						</motion.h1>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1 }}
							className='flex flex-wrap gap-6 text-slate-200'
						>
							<div className='flex items-center gap-2'>
								<span className='material-symbols-outlined text-[#0179bf]'>
									schedule
								</span>
								<span className='text-sm font-medium'>
									{course.duration || 'N/A'} Duration
								</span>
							</div>
							{course.academic_direction && (
								<div className='flex items-center gap-2'>
									<span className='material-symbols-outlined text-[#0179bf]'>
										verified
									</span>
									<span className='text-sm font-medium'>
										{course.academic_direction}
									</span>
								</div>
							)}
							{course.seats_available && (
								<div className='flex items-center gap-2'>
									<span className='material-symbols-outlined text-[#0179bf]'>
										workspace_premium
									</span>
									<span className='text-sm font-medium'>
										{course.seats_available} Seats Available
									</span>
								</div>
							)}
						</motion.div>
					</div>
				</div>
			</section>

			{/* Main Content Area */}
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
					{/* Left Content Column */}
					<div className='lg:col-span-2 space-y-16'>
						{/* Overview - Displaying HTML description from API */}
						<section
							className='scroll-mt-24'
							id='overview'
						>
							<h2 className='text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3 font-display'>
								<span className='w-1.5 h-8 bg-[#0179bf] rounded-full'></span>
								Course Overview
							</h2>
							<div
								className='prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4 api-content'
								dangerouslySetInnerHTML={{ __html: course.description }}
							/>
						</section>

						{/* Course Information details - extracted from API fields if they separate from description */}
						<section
							className='bg-white p-8 rounded-2xl border border-slate-200 shadow-sm'
							id='info'
						>
							<h2 className='text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 font-display'>
								<span className='material-symbols-outlined text-[#0179bf]'>
									assignment_turned_in
								</span>
								Course Information
							</h2>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div className='flex gap-4'>
									<div className='flex-shrink-0 w-10 h-10 bg-[#0179bf]/10 rounded-lg flex items-center justify-center text-[#0179bf]'>
										<span className='material-symbols-outlined'>school</span>
									</div>
									<div>
										<h4 className='font-bold text-slate-900 font-display'>
											Mode of Study
										</h4>
										<p className='text-sm text-slate-600'>
											{course.modes_of_study || 'N/A'}
										</p>
									</div>
								</div>
								<div className='flex gap-4'>
									<div className='flex-shrink-0 w-10 h-10 bg-[#0179bf]/10 rounded-lg flex items-center justify-center text-[#0179bf]'>
										<span className='material-symbols-outlined'>analytics</span>
									</div>
									<div>
										<h4 className='font-bold text-slate-900 font-display'>
											Language
										</h4>
										<p className='text-sm text-slate-600'>
											{course.language || 'English'}
										</p>
									</div>
								</div>
								<div className='flex gap-4'>
									<div className='flex-shrink-0 w-10 h-10 bg-[#0179bf]/10 rounded-lg flex items-center justify-center text-[#0179bf]'>
										<span className='material-symbols-outlined'>
											calendar_today
										</span>
									</div>
									<div>
										<h4 className='font-bold text-slate-900 font-display'>
											Start Dates
										</h4>
										<p className='text-sm text-slate-600'>
											{course.start_dates || 'Contact Admissions'}
										</p>
									</div>
								</div>
								<div className='flex gap-4'>
									<div className='flex-shrink-0 w-10 h-10 bg-[#0179bf]/10 rounded-lg flex items-center justify-center text-[#0179bf]'>
										<span className='material-symbols-outlined'>
											fact_check
										</span>
									</div>
									<div>
										<h4 className='font-bold text-slate-900 font-display'>
											Fees (First Year)
										</h4>
										<p className='text-sm text-slate-600 font-bold text-primary'>
											{course.fees || 'TBA'}
										</p>
									</div>
								</div>
							</div>
						</section>
					</div>

					{/* Right Sidebar Sticky CTA */}
					<div className='lg:col-span-1'>
						<div className='sticky top-28 space-y-6'>
							<div className='bg-white p-8 rounded-2xl border border-slate-200 shadow-xl'>
								<h3 className='text-xl font-bold mb-6 font-display'>
									Inquire About Course
								</h3>
								<form
									className='space-y-4'
									onSubmit={handleSubmit}
								>
									<div>
										<label className='block text-xs font-bold text-slate-500 uppercase mb-1'>
											Full Name
										</label>
										<input
											className={`w-full bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-[#0179bf] py-3 px-4 text-sm ${errors.fullName ? 'ring-2 ring-red-500' : ''}`}
											placeholder='John Doe'
											type='text'
											name='fullName'
											value={formData.fullName}
											onChange={handleChange}
										/>
										{errors.fullName && (
											<p className='mt-1 text-[10px] text-red-500 font-bold uppercase'>
												{errors.fullName}
											</p>
										)}
									</div>
									<div>
										<label className='block text-xs font-bold text-slate-500 uppercase mb-1'>
											Email Address
										</label>
										<input
											className={`w-full bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-[#0179bf] py-3 px-4 text-sm ${errors.email ? 'ring-2 ring-red-500' : ''}`}
											placeholder='john@example.com'
											type='email'
											name='email'
											value={formData.email}
											onChange={handleChange}
										/>
										{errors.email && (
											<p className='mt-1 text-[10px] text-red-500 font-bold uppercase'>
												{errors.email}
											</p>
										)}
									</div>
									<div>
										<label className='block text-xs font-bold text-slate-500 uppercase mb-1'>
											Phone Number
										</label>
										<input
											className={`w-full bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-[#0179bf] py-3 px-4 text-sm ${errors.phone ? 'ring-2 ring-red-500' : ''}`}
											placeholder='+91 XXXXX XXXXX'
											type='tel'
											name='phone'
											value={formData.phone}
											onChange={handleChange}
										/>
										{errors.phone && (
											<p className='mt-1 text-[10px] text-red-500 font-bold uppercase'>
												{errors.phone}
											</p>
										)}
									</div>
									<div>
										<label className='block text-xs font-bold text-slate-500 uppercase mb-1'>
											Message
										</label>
										<textarea
											className={`w-full bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-[#0179bf] py-3 px-4 text-sm ${errors.message ? 'ring-2 ring-red-500' : ''}`}
											placeholder={`I am interested in the ${course.title} program...`}
											rows={4}
											name='message'
											value={formData.message}
											onChange={handleChange}
										></textarea>
										{errors.message && (
											<p className='mt-1 text-[10px] text-red-500 font-bold uppercase'>
												{errors.message}
											</p>
										)}
									</div>
									<button
										className='w-full bg-[#0179bf] text-white font-bold py-4 rounded-lg shadow-lg shadow-[#0179bf]/30 hover:bg-[#0179bf]/90 transition-all font-display disabled:opacity-50 disabled:cursor-not-allowed'
										type='submit'
										disabled={isSubmitting}
									>
										{isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
									</button>

									{success && (
										<motion.p
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											className='text-green-600 text-xs font-bold text-center mt-4'
										>
											{success}
										</motion.p>
									)}

									{formError && (
										<motion.p
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											className='text-red-600 text-xs font-bold text-center mt-4'
										>
											{formError}
										</motion.p>
									)}
								</form>
							</div>

							{course.tuition_fees_pdf && (
								<div className='bg-[#0179bf]/5 border border-[#0179bf]/20 p-6 rounded-2xl'>
									<h4 className='font-bold text-[#0179bf] mb-2 flex items-center gap-2 font-display'>
										<span className='material-symbols-outlined'>download</span>
										Tuition Fees
									</h4>
									<p className='text-xs text-slate-600 mb-4'>
										Download the detailed fee structure PDF.
									</p>
									<a
										href={course.tuition_fees_pdf}
										target='_blank'
										rel='noopener noreferrer'
										className='w-full bg-white border border-[#0179bf] text-[#0179bf] font-bold py-2 rounded-lg text-sm hover:bg-[#0179bf] hover:text-white transition-all font-display text-center block'
									>
										Download PDF
									</a>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
