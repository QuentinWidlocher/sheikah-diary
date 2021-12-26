import { z } from 'zod'

function getObjectFromFormData(request: Request) {
	return request.formData().then(fd => Object.fromEntries(fd.entries()))
}

function transformField(val: unknown | null) {
	switch (val) {
		case 'true':
			return true
		case 'false':
			return false
		default:
			return val
	}
}

function transformFields(obj: any) {
	return Object.keys(obj as any).reduce(
		(acc, k) => ({
			...acc,
			[k]: transformField(obj[k]),
		}),
		{},
	)
}

function transformFormData<T extends z.ZodRawShape>(validator: z.ZodObject<T>) {
	return z.preprocess(
		obj => (typeof obj == 'object' ? transformFields(obj) : obj),
		validator,
	)
}

export async function safeParseFormData<T extends z.ZodRawShape>(
	request: Request,
	validator: z.ZodObject<T>,
) {
	return getObjectFromFormData(request).then(x =>
		transformFormData(validator).safeParse(x),
	)
}

export async function parseFormData<T extends z.ZodRawShape>(
	request: Request,
	validator: z.ZodObject<T>,
) {
	return getObjectFromFormData(request).then(x =>
		transformFormData(validator).parse(x),
	)
}
