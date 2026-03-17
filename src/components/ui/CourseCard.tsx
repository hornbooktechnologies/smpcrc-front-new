'use client';

import { useNavigateState } from '@/context/NavigationContext';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Course } from '@/data/courses';

interface CourseCardProps {
	course: Course;
	index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
	const { navigate } = useNavigateState();

	const handleNavigate = (e: React.MouseEvent) => {
		e.preventDefault();
		const slug =
			course.slug ||
			course.title
				.toLowerCase()
				.replace(/[^a-z0-9]+/g, '-')
				.replace(/(^-|-$)+/g, '');
		navigate(`/courses/${slug}`, { state: { id: course.id } });
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			viewport={{ once: true }}
			className='group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col cursor-pointer'
			onClick={handleNavigate}
		>
			<div className='aspect-video w-full overflow-hidden relative'>
				<Image
					src={
						course.image ||
						'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop'
					}
					alt={course.title}
					fill
					className='object-cover transition-transform duration-500 group-hover:scale-110'
				/>
			</div>
			<div className='p-6 flex flex-col grow'>
				<div className='flex justify-between items-start mb-2'>
					<span className='flex items-center text-xs text-slate-500'>
						<span className='material-symbols-outlined text-sm mr-1'>
							schedule
						</span>
						{course.duration}
					</span>
				</div>
				<h3 className='text-xl font-bold text-slate-900 mb-2'>
					{course.title}
				</h3>
				<p className='text-slate-600 text-sm mb-6 line-clamp-3'>
					{course.description}
				</p>
				<div className='mt-auto pt-4 border-t border-slate-100 flex items-center justify-between'>
					<div className='text-[#0179bf] font-bold text-sm hover:underline flex items-center gap-1'>
						View Details{' '}
						<span className='material-symbols-outlined text-sm'>
							arrow_forward
						</span>
					</div>
					<span className='text-slate-400 text-xs'>
						{course.modes_of_study}
					</span>
				</div>
			</div>
		</motion.div>
	);
}
