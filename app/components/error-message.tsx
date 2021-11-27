type ErrorMessageProps = {
  error?: { _errors?: string[] }
  className?: string
}

export default function ErrorMessage({
  error,
  className = '',
}: ErrorMessageProps) {
  return error?._errors?.length ? (
    <small className={'text-red-500 ' + className}>{error._errors[0]}</small>
  ) : null
}
