import { LoaderFunction, MetaFunction, redirect } from 'remix'

export let loader: LoaderFunction = () => {
  return redirect('/entries')
}
