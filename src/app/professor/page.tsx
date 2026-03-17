import { getPageMetadata } from '@/utils/metadata';
import ProfessorClient from './ProfessorClient';

export async function generateMetadata() {
	const meta = await getPageMetadata('professors');
	return {
		title:
			meta?.title ||
			'Our Expert Faculty | Sardar Patel Medical College & Research Center',
		description:
			meta?.description ||
			'Dedicated educators and world-class medical professionals shaping the next generation of healthcare leaders.',
		keywords: meta?.keywords,
	};
}

export default function ProfessorPage() {
	return <ProfessorClient />;
}
