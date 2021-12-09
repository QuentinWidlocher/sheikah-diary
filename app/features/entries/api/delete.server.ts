import { ActionFunction, redirect } from 'remix'
import { z } from 'zod'
import { db } from '~/utils/db.server.'
import { pictures } from '~/utils/storage'

let formValidator = z.object({
  id: z.string().uuid().nonempty(),
})

export let deleteAction: ActionFunction = async ({ request }) => {
  if (request.method != 'DELETE') {
    return null
  }

  let formData = await request.formData()
  let form = formValidator.parse(Object.fromEntries(formData.entries()))

  console.log('Request to delete entry', form.id)

  let linkedPictures = await db.picture.findMany({
    where: {
      entryId: form.id,
    },
  })

  // This can be done in the bg
  pictures.remove(
    linkedPictures.flatMap((pic) => [pic.file, pic.preview, pic.thumbnail]),
  )

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
