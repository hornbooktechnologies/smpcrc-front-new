'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FacultyMember } from '@/data/faculty';

interface FacultyCardProps {
	member: FacultyMember;
}

export default function FacultyCard({ member }: FacultyCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			className='group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100'
		>
			<div className='aspect-[4/5] overflow-hidden relative'>
				<Image
					src={member.image}
					alt={member.name}
					fill
					className='object-cover group-hover:scale-105 transition-transform duration-500'
				/>
			</div>
			<div className='p-5'>
				<span className='text-[10px] font-bold text-primary uppercase tracking-normal'>
					{member.department}
				</span>
				<h4 className='text-lg font-bold text-slate-900 mt-1'>{member.name}</h4>
				<p className='text-sm text-slate-500'>{member.title}</p>
				{member.experience && (
					<div className='mt-4 pt-4 border-t border-slate-100 flex justify-between items-center'>
						<span className='text-xs font-semibold text-slate-400'>
							{member.experience}
						</span>
						{/* <button className="p-2 bg-slate-50 rounded-lg text-primary hover:bg-primary hover:text-white transition-colors">
            <ArrowRight className="w-4 h-4" />
          </button> */}
					</div>
				)}
			</div>
		</motion.div>
	);
}
