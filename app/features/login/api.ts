import { ActionFunction } from 'remix'
import { z } from 'zod'
import { db } from '~/utils/db.server.'
import { login, createUserSession, register } from '~/utils/session.server'

let formValidator = z.object({
  username: z.string().min(1, { message: 'The username is required' }),
  password: z
    .string()
    .min(6, { message: 'The password must be at least 6 characters' }),
  redirectTo: z.string().optional(),
  loginType: z.literal('login').or(z.literal('register')),
})

export type LoginFormType = z.infer<typeof formValidator>
export type LoginFormError = z.ZodFormattedError<LoginFormType>

export let loginAction: ActionFunction = async ({
  request,
}): Promise<Response | LoginFormError> => {
  let formData = await request.formData()

  let parsedFormData = formValidator.safeParse(
    Object.fromEntries(formData.entries()),
  )

  if (!parsedFormData.success) {
    return parsedFormData.error.format()
  }

  let {
    loginType,
    password,
    username,
    redirectTo = '/app/entries',
  } = parsedFormData.data

  switch (loginType) {
    case 'login': {
      let user = await login({ username, password })
      if (!user) {
        return {
          _errors: ['Username/Password combination is incorrect'],
        }
      }
      return createUserSession(user.id, redirectTo)
    }

    case 'register': {
      let userExists = await db.user.findFirst({
        select: { id: true },
        where: { username },
      })

      if (userExists) {
        return {
          username: {
            _errors: [`User with username ${username} already exists`],
          },
          _errors: [],
        }
      }

      let user = await register({ username, password })

      if (!user) {
        return {
          _errors: ['Something went wrong trying to create a new user.'],
        }
      }
      return createUserSession(user.id, redirectTo)
    }
    default: {
      return { _errors: ['Login type invalid'] }
    }
  }
}
