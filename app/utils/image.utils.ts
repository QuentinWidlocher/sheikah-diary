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
	const averageSize = Math.ceil(widths.reduce((a, s) => a + s) / widths.length)

	let props = {
		src: cloudinary.url(publicId, {
			quality: 'auto',
			format: 'webp',
			width: averageSize,
			crop: 'scale',
			...transformations,
		}),
		srcSet: widths
			.map(width => {
				return [
					cloudinary.url(publicId, {
						quality: 'auto',
						format: 'webp',
						width,
						crop: 'scale',
						...transformations,
					}),
					`${width}w`,
				].join(' ')
			})
			.join(', '),
		sizes: sizes.join(', '),
	}

	return props
}
