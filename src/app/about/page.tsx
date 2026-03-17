import { getPageMetadata } from '@/utils/metadata';
import AboutClient from './AboutClient';

export async function generateMetadata() {
	const meta = await getPageMetadata('about');
	return {
		title: meta?.title || 'Excellence in Healthcare Education | Sardar Patel Medical College & Research Center',
		description: meta?.description || 'Dedicated to nurturing the next generation of medical professionals since 1955.',
		keywords: meta?.keywords,
	};
}

export default function AboutPage() {
	return <AboutClient />;
}
