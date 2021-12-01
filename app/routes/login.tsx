import { ActionFunction, Form, LinksFunction } from 'remix'
import { useActionData, Link, useSearchParams } from 'remix'
import { z } from 'zod'
import ErrorMessage from '~/components/error-message'
import { db } from '~/utils/db.server.'
import { createUserSession, login, register } from '~/utils/session.server'
import stylesUrl from '../styles/login.css'

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }]
}

let formValidator = z.object({
  username: z.string().min(1, { message: 'The username is required' }),
  password: z
    .string()
    .min(6, { message: 'The password must be at least 6 characters' }),
  redirectTo: z.string().optional(),
  loginType: z.literal('login').or(z.literal('register')),
})

type FormType = z.infer<typeof formValidator>
type FormError = z.ZodFormattedError<FormType>

export let action: ActionFunction = async ({
  request,
}): Promise<Response | FormError> => {
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
    redirectTo = '/entries',
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

export default function Login() {
  let errors = useActionData<FormError | undefined>()
  let [searchParams] = useSearchParams()
  return (
    <div className="wrapper">
      <div className="content">
        <h1>Login</h1>
        <Form
          method="post"
          aria-describedby={errors?._errors ? 'form-error-message' : undefined}
        >
          <input
            type="hidden"
            name="redirectTo"
            value={searchParams.get('redirectTo') ?? undefined}
          />
          <fieldset>
            <legend className="sr-only">Login or Register?</legend>
            <div className="form-group">
              <label className="radio">
                <input
                  type="radio"
                  name="loginType"
                  value="login"
                  defaultChecked
                />
                <div>Login</div>
              </label>
              <label className="radio">
                <input type="radio" name="loginType" value="register" />
                <div>Register</div>
              </label>
            </div>
          </fieldset>
          <div className="form-group">
            <label htmlFor="username-input">Username</label>
            <input
              type="text"
              id="username-input"
              name="username"
              aria-invalid={Boolean(errors?.username)}
              aria-describedby={errors?.username ? 'username-error' : undefined}
            />
            <div className="w-full" role="separator"></div>
            <ErrorMessage className="ml-auto mr-2" error={errors?.username} />
          </div>
          <div className="form-group">
            <label htmlFor="password-input">Password</label>
            <input
              id="password-input"
              name="password"
              type="password"
              aria-invalid={Boolean(errors?.password) || undefined}
              aria-describedby={errors?.password ? 'password-error' : undefined}
            />
            <div className="w-full" role="separator"></div>
            <ErrorMessage className="ml-auto mr-2" error={errors?.password} />
          </div>
          <div id="form-error-message">
            <ErrorMessage error={errors} onlyFirst={false} />
          </div>
          <button type="submit" className="button">
            Submit
          </button>
        </Form>
      </div>
      <nav className="absolute bottom-0 right-0 p-5 font-bold">
        <Link
          className="filter hover:drop-shadow-base focus:drop-shadow-base"
          to="/entries"
        >
          See the entries
        </Link>
      </nav>
    </div>
  )
}
