import { ActionFunction, redirect } from 'remix'
import { z } from 'zod'
import { db } from '~/utils/db.server'
import { cloudinary } from '~/utils/storage.server'
import { parseFormData } from '../../../utils/formdata.utils.server'

let formValidator = z.object({
	id: z.string().uuid().nonempty(),
})

export let deleteAction: ActionFunction = async ({ request }) => {
	if (request.method != 'DELETE') {
		return null
	}

	let form = await parseFormData(request, formValidator)

	console.log('Request to delete entry', form.id)

	let linkedPictures = await db.picture.findMany({
		where: {
			entryId: form.id,
		},
	})

	let picturesToDelete = linkedPictures.map(pic => pic.file)

	console.debug('picturesToDelete', picturesToDelete)

	// This can be done in the bg
	cloudinary.api
		.delete_resources(picturesToDelete)
		.then(() => console.info('All files have been deleted'))
		.catch(console.error)

	// We first delete all the pictures
	await db.picture.deleteMany({
		where: {
			entryId: form.id,
		},
	})

	// Then we delete the entry
	await db.entry.delete({
		where: {
			id: form.id,
		},
	})

	return redirect('/app/entries')
}
