import { v2 as c } from 'cloudinary'

c.config({
	cloud_name: 'dslgqiqtk',
	api_key: '541476277984537',
	api_secret: process.env.CLOUDINARY_API_SECRET,
})
export const cloudinary = c
