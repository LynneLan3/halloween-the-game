import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';
import { assetUrl } from '../components/experience/routes/asset-url';

const IMAGE_EXT = /\.(jpe?g|png|webp|gif|avif)$/i;

const assetImages: Record<string, ImageMetadata> = Object.fromEntries(
	Object.entries(
		import.meta.glob('../assets/**/*', {
			eager: true,
			import: 'default',
		}),
	)
		.filter(([path]) => IMAGE_EXT.test(path))
		.map(([path, mod]) => [path.replace('../assets/', ''), mod as ImageMetadata]),
);

export interface Site2ImageOptions {
	width: number;
	height?: number;
	quality?: number;
}

export function resolveSite2Asset(rel?: string): ImageMetadata | undefined {
	if (!rel) return undefined;
	return assetImages[rel];
}

/** Build-time WebP URL for CSS background-image (falls back to raw asset URL). */
export async function optimizeSite2Background(
	rel: string | undefined,
	{ width, height, quality = 80 }: Site2ImageOptions,
): Promise<string | undefined> {
	if (!rel) return undefined;
	const src = resolveSite2Asset(rel);
	if (!src) return assetUrl(rel);
	const optimized = await getImage({
		src,
		width,
		...(height ? { height } : {}),
		format: 'webp',
		quality,
	});
	return optimized.src;
}

export async function getSite2HeroPreloadUrl(rel?: string): Promise<string | undefined> {
	return optimizeSite2Background(rel, { width: 1920, height: 1080, quality: 82 });
}
