import { Prisma } from '@prisma/client'
import { ActionFunction, redirect } from 'remix'
import { z } from 'zod'
import { db } from '~/utils/db.server'
import { parseFormData } from '../../../utils/formdata.utils.server'
import { getUser } from '~/utils/session.server'

let formValidator = z.object({
	alreadyLiked: z.boolean().default(false),
})

export let likeAction: ActionFunction = async ({ params, request }) => {
	if (!params.slug) {
		return null
	}

	console.log('Request to like/unlike post', params.slug)

	let formData = await parseFormData(request, formValidator)

	let user = await getUser(request)

	if (!user) {
		return redirect('/login')
	}

	let updateAction: {
		[k in
			| 'connect'
			| 'disconnect']?: Prisma.UserUpdateManyWithoutEntriesInput['connect']
	}

	if (formData.alreadyLiked) {
		updateAction = {
			disconnect: {
				id: user.id,
			},
		}
	} else {
		updateAction = {
			connect: {
				id: user.id,
			},
		}
	}

	await db.entry.update({
		data: {
			likedBy: {
				...updateAction,
			},
		},
		where: {
			slug: params.slug,
		},
	})

	return !formData.alreadyLiked
}
