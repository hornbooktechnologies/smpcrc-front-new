'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	Compass,
	FileText,
	ArrowRight,
	X,
	ChevronLeft,
	ChevronRight,
} from 'lucide-react';
import Image from 'next/image';
import { GalleryImage } from '@/data/gallery';
import GalleryCard from '@/components/ui/GalleryCard';
import { getGallery } from '@/services/api';

export default function GalleryClient() {
	const [galleryList, setGalleryList] = useState<GalleryImage[]>([]);
	const [loading, setLoading] = useState(true);
	const [isFetching, setIsFetching] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const sentinelRef = React.useRef<HTMLDivElement>(null);
	const fetchingRef = React.useRef(false);

	const loadMoreImages = useCallback(
		async (pageNum: number) => {
			if (fetchingRef.current || !hasMore) return;

			fetchingRef.current = true;
			setIsFetching(true);
			try {
				const limit = 12;
				const response = await getGallery(pageNum, limit);

				let rawItems = [];
				let totalPages = 1;
				if (response.data) {
					if (Array.isArray(response.data)) {
						rawItems = response.data;
					} else if (Array.isArray(response.data.items)) {
						rawItems = response.data.items;
						totalPages = response.data.pagination?.totalPages || 1;
					} else if (Array.isArray(response.data.gallery)) {
						rawItems = response.data.gallery;
						totalPages = response.data.pagination?.totalPages || 1;
					} else if (Array.isArray(response.data.docs)) {
						rawItems = response.data.docs;
						totalPages = response.data.pagination?.totalPages || 1;
					}
				} else if (Array.isArray(response)) {
					rawItems = response;
				}

				if (rawItems.length === 0) {
					setHasMore(false);
					fetchingRef.current = false;
					return;
				}

				const mappedItems: GalleryImage[] = rawItems
					.map((item: any, index: number) => ({
						id: item.id || `gallery-${pageNum}-${index}`,
						url:
							item.image_url ||
							item.image ||
							'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80',
						title: item.title || 'Campus Gallery',
						category: item.category || 'General',
					}))
					.filter((item: GalleryImage) => item.url);

				setGalleryList((prev) => {
					const existingIds = new Set(prev.map((img) => img.id));
					const uniqueNew = mappedItems.filter(
						(img) => !existingIds.has(img.id),
					);
					return [...prev, ...uniqueNew];
				});

				setPage(pageNum + 1);
				setHasMore(pageNum < totalPages);
				setError(null);
			} catch (err) {
				console.error('Error fetching gallery:', err);
				setError('Failed to load gallery images.');
				setHasMore(false);
			} finally {
				fetchingRef.current = false;
				setIsFetching(false);
				setLoading(false);
			}
		},
		[hasMore],
	);

	// Initial load
	useEffect(() => {
		// Only run if not already loading and we're at the start
		if (galleryList.length === 0 && !fetchingRef.current) {
			loadMoreImages(1);
		}
	}, []);

	// Observer for infinite scroll
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				// Combined with Ref-guard for synchronous safety
				if (
					entries[0].isIntersecting &&
					hasMore &&
					!fetchingRef.current &&
					!loading
				) {
					loadMoreImages(page);
				}
			},
			{ threshold: 0.1 },
		);

		if (sentinelRef.current) {
			observer.observe(sentinelRef.current);
		}

		return () => observer.disconnect();
	}, [hasMore, isFetching, loading, page, loadMoreImages]);

	const handleNext = useCallback(() => {
		if (selectedIndex !== null) {
			setSelectedIndex((selectedIndex + 1) % galleryList.length);
		}
	}, [selectedIndex, galleryList.length]);

	const handlePrev = useCallback(() => {
		if (selectedIndex !== null) {
			setSelectedIndex(
				(selectedIndex - 1 + galleryList.length) % galleryList.length,
			);
		}
	}, [selectedIndex, galleryList.length]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (selectedIndex === null) return;
			if (e.key === 'ArrowRight') handleNext();
			if (e.key === 'ArrowLeft') handlePrev();
			if (e.key === 'Escape') setSelectedIndex(null);
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [selectedIndex, handleNext, handlePrev]);

	// Prevent scroll when lightbox is open
	useEffect(() => {
		if (selectedIndex !== null) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [selectedIndex]);

	return (
		<main className='flex-1'>
			{/* Hero Section */}
			<section className='relative w-full'>
				<div className='max-w-7xl mx-auto px-4 py-8'>
					<div className='relative overflow-hidden rounded-xl md:rounded-3xl bg-slate-900 min-h-[400px] flex items-center justify-center text-center p-6'>
						<div className='absolute inset-0 opacity-50'>
							<Image
								src='https://lh3.googleusercontent.com/aida-public/AB6AXuC7rOgkfjcubOAnTWKJ2Dtj20IPgwaWqSDdlpeWE2h6q3d_BtCCn07-T6KdCNHEuHFCuzzDjxQ_G0lsW52K2N6dO1tA8cra4-LcvD-7ObPUgrdHRYhlofF2hSHl-MlwkFuJJncbX3KlL8XOKb8IXaSDEi8w1XwYztiTlqm1MdRSmDk9GEp7P3bNa4imQBRDAqo_PtSgzLJMo0tqB9DCX1W72Oi3BR1yxzXmFsqdXXbD37fRU9p5am1yr_Itf8cPlmFG1LFkBUpEIic'
								alt='Modern medical college campus'
								fill
								className='object-cover object-center'
							/>
						</div>
						<div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent'></div>
						<div className='relative z-10 max-w-2xl'>
							<motion.h1
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1 }}
								className='text-4xl md:text-6xl font-black text-white mb-6 leading-tight'
							>
								Gallery
							</motion.h1>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
								className='text-slate-200 text-lg md:text-xl font-medium mb-8'
							>
								Take a visual journey through Sardar Patel Medical College &amp;
								Research Center.
							</motion.p>
						</div>
					</div>
				</div>
			</section>

			{/* Gallery Content */}
			<section className='max-w-7xl mx-auto px-4 py-12'>
				<div className='flex flex-col gap-8'>
					{loading ? (
						<div className='flex justify-center items-center py-20'>
							<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-primary'></div>
						</div>
					) : error ? (
						<div className='text-center py-20'>
							<p className='text-red-500 font-bold'>{error}</p>
							<button
								onClick={() => window.location.reload()}
								className='mt-4 bg-primary text-white px-6 py-2 rounded-lg'
							>
								Retry
							</button>
						</div>
					) : (
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-12'>
							{galleryList.map((image, index) => (
								<GalleryCard
									key={`${image.id}-${index}`}
									image={image}
									onClick={() => setSelectedIndex(index)}
								/>
							))}
						</div>
					)}

					{/* Loading sentinel and extra indicators */}
					<div
						ref={sentinelRef}
						className='py-8 flex flex-col items-center justify-center'
					>
						{isFetching && (
							<div className='flex flex-col items-center gap-4'>
								<div className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary'></div>
								<p className='text-slate-500 text-sm font-medium animate-pulse'>
									Loading more memories...
								</p>
							</div>
						)}
						{!hasMore && !loading && galleryList.length > 0 && (
							<motion.p
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								className='text-slate-400 text-sm font-medium border-t border-slate-100 pt-8 w-full text-center'
							>
								You&apos;ve reached the beginning of our story.
							</motion.p>
						)}
					</div>
				</div>
			</section>

			{/* Lightbox Slider */}
			<AnimatePresence>
				{selectedIndex !== null && galleryList[selectedIndex] && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-sm p-4 md:p-10'
					>
						{/* Close Button */}
						<button
							onClick={() => setSelectedIndex(null)}
							className='absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-[110]'
						>
							<X className='w-6 h-6' />
						</button>

						{/* Navigation Buttons */}
						<button
							onClick={handlePrev}
							className='absolute left-4 md:left-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all z-[110]'
						>
							<ChevronLeft className='w-8 h-8' />
						</button>

						<button
							onClick={handleNext}
							className='absolute right-4 md:right-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all z-[110]'
						>
							<ChevronRight className='w-8 h-8' />
						</button>

						{/* Large Image Container */}
						<div className='relative w-full h-full max-w-6xl max-h-[80vh] flex flex-col items-center justify-center'>
							<motion.div
								key={galleryList[selectedIndex].id}
								initial={{ opacity: 0, scale: 0.9, y: 20 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
								exit={{ opacity: 0, scale: 0.9, y: -20 }}
								transition={{ type: 'spring', damping: 25, stiffness: 200 }}
								className='relative w-full h-full'
							>
								<Image
									src={galleryList[selectedIndex].url}
									alt={galleryList[selectedIndex].title}
									fill
									className='object-contain'
									priority
								/>
							</motion.div>

							{/* Caption */}
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								className='absolute bottom-[-60px] text-center'
							>
								<span className='text-primary font-bold text-xs uppercase tracking-widest mb-1 block'>
									{galleryList[selectedIndex].category}
								</span>
								<h2 className='text-white text-xl md:text-2xl font-black'>
									{galleryList[selectedIndex].title}
								</h2>
								<p className='text-white/40 text-xs mt-2'>
									Image {selectedIndex + 1} of {galleryList.length}
								</p>
							</motion.div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</main>
	);
}
