import { ImageTransformationOptions } from 'cloudinary'
import { cloudinary } from './storage.server'

export function getImgProps(
	publicId: string,
	{
		widths,
		sizes,
		transformations = [],
	}: {
		widths: number[]
		sizes: string[]
		transformations?: ImageTransformationOptions[]
	},
) {
	const averageSize = Math.ceil(widths.reduce((a, s) => a + s) / widths.length)

	let props = {
		src: cloudinary.url(publicId, {
			secure: true,
			quality: 'auto',
			format: 'webp',
			transformations: [...transformations, { width: averageSize }],
		}),
		srcSet: widths
			.map(width =>
				[
					cloudinary.url(publicId, {
						secure: true,
						quality: 'auto',
						format: 'webp',
						transformations: [...transformations, { width }],
					}),
					`${width}w`,
				].join(' '),
			)
			.join(', '),
		sizes: sizes.join(', '),
	}

	console.log(props)

	return props
}
