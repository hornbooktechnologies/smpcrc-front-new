import { getPageMetadata } from '@/utils/metadata';
import ContactUsClient from './ContactUsClient';

export async function generateMetadata() {
	const meta = await getPageMetadata('contact');
	return {
		title: meta?.title || 'Connect with Us | Sardar Patel Medical College & Research Center',
		description: meta?.description || 'Reach out to us for any queries regarding admissions, medical services, or general information.',
		keywords: meta?.keywords,
	};
}

export default function ContactUsPage() {
	return <ContactUsClient />;
}
