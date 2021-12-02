import { Entry } from '@prisma/client'
import { useEffect, useRef } from 'react'
import { useFetcher } from 'remix'
import FormField from '~/components/form-field'
import ReactLoading from 'react-loading'

export default function CommentTextArea({ slug }: { slug: Entry['slug'] }) {
  const fetcher = useFetcher()
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (fetcher.state == 'idle' && textAreaRef.current) {
      textAreaRef.current.value = ''
    }
  }, [fetcher.state])

  return (
    <fetcher.Form method="post" action={`/entries/${slug}/create-comment`}>
      <FormField label="Add a comment">
        <textarea ref={textAreaRef} name="body" rows={5}></textarea>
      </FormField>
      <button type="submit" className="float-right flex mr-3 space-x-3">
        {fetcher.submission ? (
          <>
            <ReactLoading
              type="spinningBubbles"
              color="var(--primary-500)"
              height="1.5rem"
              width="1.5rem"
            />{' '}
            <span>Sending...</span>
          </>
        ) : (
          'Send your comment'
        )}
      </button>
    </fetcher.Form>
  )
}
