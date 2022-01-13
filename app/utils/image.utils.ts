import { ImageTransformationOptions } from 'cloudinary'
import { cloudinary } from './storage.server'

export function getImgProps(
	publicId: string,
	{
		widths,
		sizes,
		transformations = {},
	}: {
		widths: number[]
		sizes: string[]
		transformations?: ImageTransformationOptions
	},
) {
	let { src, srcSet } = getImgTransformations({
		widths,
		transformations,
	})

	return getImgPropsFromTransformations(publicId, {
		src,
		srcSet,
		sizes,
	})
}

export function getImgPropsFromTransformations(
	publicId: string,
	{
		src,
		srcSet,
		sizes,
	}: {
		src: ReturnType<typeof getImgTransformations>['src']
		srcSet: ReturnType<typeof getImgTransformations>['srcSet']
		sizes: string[]
		transformations?: ImageTransformationOptions
	},
) {
	return {
		src: cloudinary.url(publicId, src),
		srcSet: srcSet
			.map(set => {
				return [cloudinary.url(publicId, set), `${set.width}w`].join(' ')
			})
			.join(', '),
		sizes: sizes.join(', '),
	}
}

export function getImgTransformations({
	widths,
	transformations = {},
}: {
	widths: number[]
	transformations?: ImageTransformationOptions
}): { src: ImageTransformationOptions; srcSet: ImageTransformationOptions[] } {
	const averageSize = Math.ceil(widths.reduce((a, s) => a + s) / widths.length)

	return {
		src: {
			quality: 'auto',
			format: 'webp',
			width: averageSize,
			crop: 'scale',
			...transformations,
		},
		srcSet: widths.map(width => ({
			quality: 'auto',
			format: 'webp',
			width,
			crop: 'scale',
			...transformations,
		})),
	}
}
