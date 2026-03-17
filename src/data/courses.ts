export interface CourseDetail {
	overview: string[];
	eligibility: {
		academic: string;
		marks: string;
		age: string;
		entrance: string;
	};
	curriculum: {
		phase: string;
		duration: string;
		subjects: string;
	}[];
	admissionProcess: {
		step: string;
		title: string;
		description: string;
	}[];
}

export interface Course {
	id: string;
	title: string;
	description: string;
	category: string;
	duration: string;
	image: string;
	modes_of_study: string;
	level: 'Undergraduate' | 'Postgraduate' | 'Diploma' | 'Clinical';
	recognition?: string;
	internship?: string;
	slug?: string;
	details?: CourseDetail;
}

export const courses: Course[] = [];
