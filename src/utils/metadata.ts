import { getMetadata } from '@/services/api';

export async function getPageMetadata(pageName: string) {
	try {
		const response = await getMetadata();
		const metadataList = response?.data?.metadata || [];
		
		const pageMeta = metadataList.find(
			(meta: any) => meta.page_name.toLowerCase() === pageName.toLowerCase()
		);

		if (pageMeta) {
			return {
				title: pageMeta.meta_title,
				description: pageMeta.meta_description,
				keywords: pageMeta.keywords,
			};
		}
	} catch (error) {
		console.error(`Error getting metadata for ${pageName}:`, error);
	}

	return null; // Fallback to layout metadata
}
