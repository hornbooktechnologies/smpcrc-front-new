import { getPageMetadata } from '@/utils/metadata';
import CoursesClient from './CoursesClient';

export async function generateMetadata() {
	const meta = await getPageMetadata('courses');
	return {
		title: meta?.title || 'Our Medical Programs | Sardar Patel Medical College & Research Center',
		description: meta?.description || 'Empowering the next generation of healthcare leaders through clinical excellence and innovative research.',
		keywords: meta?.keywords,
	};
}

export default function CoursesPage() {
	return <CoursesClient />;
}
