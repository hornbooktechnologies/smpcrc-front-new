import { getPageMetadata } from '@/utils/metadata';
import GalleryClient from './GalleryClient';

export async function generateMetadata() {
	const meta = await getPageMetadata('gallery');
	return {
		title:
			meta?.title ||
			'Campus Gallery | Sardar Patel Medical College & Research Center',
		description:
			meta?.description ||
			"Take a visual journey through Sardar Patel Medical College & Research Center's world-class facilities.",
		keywords: meta?.keywords,
	};
}

export default function GalleryPage() {
	return <GalleryClient />;
}
