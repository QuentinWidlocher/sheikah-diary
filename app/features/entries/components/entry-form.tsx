import { Transition } from '@remix-run/react/transition'
import { useState } from 'react'
import ReactLoading from 'react-loading'
import { Form } from 'remix'
import FormField from '~/components/form-field'
import { FormError } from '../actions/create-or-update.server'
import { EntryInUpdate } from '../types/entry-in-update'
import ImageSelector from './image-selector'

type EntryFormProps = {
	errors?: FormError
	transition: Transition
	submitLabel: { default: string; sending: string }
	action: string
	defaultValues?: EntryInUpdate
	ButtonsSlot?: () => JSX.Element
}

export default function EntryForm({
	errors,
	transition,
	submitLabel,
	action,
	defaultValues,
	ButtonsSlot,
}: EntryFormProps) {
	const [mainPicture, setMainPicture] = useState<
		{ b64: string; name: string } | undefined
	>(undefined)

	const [imageIsLoading, setImageIsLoading] = useState(true)

	return (
		<div className="mt-16 px-3 md:mx-auto w-full md:w-3/4 lg:w-1/2">
			<Form method="post" action={action}>
				<div className="-mx-3">
					<input
						type="hidden"
						name="originalSlug"
						readOnly
						value={defaultValues?.slug}
					/>
					<FormField error={errors?.mainPicture}>
						<input
							type="hidden"
							name="mainPicture"
							readOnly
							value={mainPicture?.b64}
						/>
						<ImageSelector
							loadedImage={mainPicture}
							onImageLoaded={setMainPicture}
							onImageLoading={setImageIsLoading}
						/>
					</FormField>
					<FormField label="Title" error={errors?.title}>
						<input type="text" name="title" defaultValue={defaultValues?.title} />
					</FormField>
					<FormField label="Content" error={errors?.content}>
						<textarea
							name="content"
							defaultValue={defaultValues?.content}
							rows={8}></textarea>
					</FormField>
				</div>
				<div role="separator"></div>
				<div className="flex justify-end">
					{ButtonsSlot ? <ButtonsSlot /> : null}
					<button
						className="sheika button"
						type="submit"
						disabled={!!transition.submission || imageIsLoading}>
						{transition.submission ? (
							<div className="flex space-x-3">
								<ReactLoading
									type="spinningBubbles"
									color="var(--primary-500)"
									height="1.5rem"
									width="1.5rem"
								/>
								<span>{submitLabel.sending}</span>
							</div>
						) : (
							submitLabel.default
						)}
					</button>
				</div>
			</Form>
		</div>
	)
}
