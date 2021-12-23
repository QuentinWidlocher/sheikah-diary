import { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import {
	Form,
	Link,
	LinksFunction,
	useActionData,
	useSearchParams,
} from 'remix'
import ErrorMessage from '~/components/error-message'
import { loginAction, LoginFormError } from '~/features/login/api'
import { invert } from '~/utils/functional.utils'
import stylesUrl from '../styles/login.css'

export let links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: stylesUrl }]
}

export let action = loginAction

export default function Login() {
	let errors = useActionData<LoginFormError | undefined>()
	let [searchParams] = useSearchParams()
	const [showPassword, setShowPassword] = useState(false)

	return (
		<div className="wrapper">
			<div className="content">
				<h1>Login</h1>
				<Form
					method="post"
					aria-describedby={errors?._errors ? 'form-error-message' : undefined}>
					<input
						type="hidden"
						name="redirectTo"
						value={searchParams.get('redirectTo') ?? undefined}
					/>
					<fieldset>
						<legend className="sr-only">Login or Register?</legend>
						<div className="form-group">
							<label className="radio">
								<input type="radio" name="loginType" value="login" defaultChecked />
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
						<label className="flex justify-between" htmlFor="password-input">
							<span>Password</span>
							<button type="button" onClick={() => setShowPassword(invert)}>
								{showPassword ? <FiEyeOff /> : <FiEye />}
							</button>
						</label>
						<input
							id="password-input"
							name="password"
							type={showPassword ? 'text' : 'password'}
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
					to="/app/entries">
					See the entries
				</Link>
			</nav>
		</div>
	)
}
