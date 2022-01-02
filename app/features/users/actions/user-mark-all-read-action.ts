import { ActionFunction, redirect } from 'remix'
import { z } from 'zod'
import { db } from '~/utils/db.server'
import { parseFormData } from '~/utils/formdata.utils.server'

let validator = z.object({
	userId: z.string().uuid(),
})

export let markAllNotificationsReadAction: ActionFunction = async ({
	params,
}) => {
	let username = z.string().parse(params.username)

	await db.notification.updateMany({
		where: {
			user: {
				username,
			},
		},
		data: {
			seenAt: new Date(),
		},
	})

	return redirect(`/app/users/${username}/notifications`)
}
