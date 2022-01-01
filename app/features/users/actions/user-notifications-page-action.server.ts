import { ActionFunction, redirect } from 'remix'
import { z } from 'zod'
import { db } from '~/utils/db.server'
import { parseFormData } from '~/utils/formdata.utils.server'

let validator = z.object({
	id: z.string().uuid(),
	redirectTo: z.string().optional(),
})

export let userNotificationsPageAction: ActionFunction = async ({
	request,
}) => {
	let { id, redirectTo } = await parseFormData(request, validator)

	console.log(
		'Request to mark notification',
		id,
		'as seen and redirect to',
		redirectTo,
	)

	await db.notification.update({
		data: {
			seenAt: new Date(),
		},
		where: {
			id,
		},
	})

	if (redirectTo) {
		return redirect(redirectTo)
	} else {
		return null
	}
}
