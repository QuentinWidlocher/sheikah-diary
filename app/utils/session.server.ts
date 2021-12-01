import bcrypt from 'bcrypt'
import { createCookieSessionStorage, redirect } from 'remix'
import { db } from './db.server.'

type LoginForm = {
  username: string
  password: string
}

export async function register({ username, password }: LoginForm) {
  console.log('Request to register with username', username)
  let passwordHash = await bcrypt.hash(password, 10)
  return db.user.create({
    data: { username, passwordHash },
  })
}

export async function login({ username, password }: LoginForm) {
  console.log('Request to login with username', username)
  let user = await db.user.findUnique({
    where: { username },
  })
  if (!user) {
    console.log('User does not exists')
    return null
  }

  let isCorrectPassword = await bcrypt.compare(password, user.passwordHash)
  if (!isCorrectPassword) {
    console.log('Incorrect password')
    return null
  }

  return user
}

let sessionSecret = process.env.SESSION_SECRET
if (!sessionSecret) {
  throw new Error('SESSION_SECRET must be set')
}

let storage = createCookieSessionStorage({
  cookie: {
    name: 'RJ_session',
    // normally you want this to be `secure: true`
    // but that doesn't work on localhost for Safari
    // https://web.dev/when-to-use-local-https/
    secure: process.env.NODE_ENV === 'production',
    secrets: [sessionSecret],
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
})

export function getUserSession(request: Request) {
  return storage.getSession(request.headers.get('Cookie'))
}

export async function getUserId(request: Request) {
  let session = await getUserSession(request)
  let userId = session.get('userId')
  if (!userId || typeof userId !== 'string') return null
  return userId
}

export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname,
) {
  console.log('Request to get user id from session')
  let session = await getUserSession(request)
  let userId = session.get('userId')
  if (!userId || typeof userId !== 'string') {
    console.log(
      'Unable to retrieve user id from session, redirecting to login page with redirect_to = ',
      redirectTo,
    )
    let searchParams = new URLSearchParams([['redirectTo', redirectTo]])
    throw redirect(`/login?${searchParams}`)
  }
  return userId
}

export async function getUser(request: Request) {
  let userId = await getUserId(request)
  if (typeof userId !== 'string') {
    console.log('Unable to get user')
    return null
  }

  try {
    let user = await db.user.findUnique({
      where: { id: userId },
    })
    return user
  } catch {
    throw logout(request)
  }
}

export async function logout(request: Request) {
  console.log('Request to logout')

  let redirectTo =
    (await request.formData()).get('redirectTo')?.toString() ?? '/login'

  let session = await storage.getSession(request.headers.get('Cookie'))
  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await storage.destroySession(session),
    },
  })
}

export async function createUserSession(userId: string, redirectTo: string) {
  console.log(
    'Request to create a user session for user with id',
    userId,
    'and to redirect to',
    redirectTo,
  )
  let session = await storage.getSession()
  session.set('userId', userId)
  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await storage.commitSession(session),
    },
  })
}
