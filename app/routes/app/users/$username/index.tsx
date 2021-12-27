import { LoaderFunction, redirect } from 'remix'

export let loader: LoaderFunction = ({ params }) => {
	return redirect(`/app/users/${params.username}/entries`)
}
