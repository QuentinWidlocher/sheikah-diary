import { useEffect, useState } from 'react'
import { Form } from 'remix'
import ReactLoading from 'react-loading'
import { Transition } from '@remix-run/react/transition'

type EntryDeleteModalProps = {
  entryId: string
  transition: Transition
  show?: boolean
  onCancel?: () => void
  onDelete?: () => void
}

export default function EntryDeleteModal({
  entryId,
  show = false,
  transition,
  onCancel,
  onDelete,
}: EntryDeleteModalProps) {
  const [opacity, setOpacity] = useState(show ? 'opacity-100' : 'opacity-0')
  const [display, setDisplay] = useState(show ? 'flex' : 'hidden')

  useEffect(() => {
    if (show) {
      setDisplay('flex')
      setTimeout(() => setOpacity('opacity-100'))
    } else {
      setOpacity('opacity-0')
      setTimeout(() => setDisplay('hidden'), 200)
    }
  }, [show])

  return (
    <div
      onClick={() => onCancel?.()}
      className={`backdrop absolute bg-black bg-opacity-30 top-0 left-0 w-full h-full transition-opacity ${display} ${opacity}`}
    >
      <div className="mt-auto mb-20 mx-5 md:mx-auto w-full flex flex-wrap-reverse justify-center">
        <div className="w-full md:w-1/2 h-36 bg-black bg-opacity-60 text-white rounded-full px-12 flex justify-center items-center font-bold text-xl">
          <span>
            Are you sure you want to delete this entry ? <br />
            This is <em> permanent !</em>
          </span>
        </div>
        <aside className="w-44 ml-auto mb-5 md:ml-5 md:my-auto space-y-5">
          <Form method="delete">
            <input type="hidden" name="id" value={entryId} readOnly />
            <button
              type="submit"
              onClick={(e) => {
                e.stopPropagation()
                onDelete?.()
              }}
              className="w-full h-16 bg-black bg-opacity-60 text-white rounded-full flex justify-center items-center font-bold text-xl"
            >
              {transition.submission ? (
                <ReactLoading
                  type="spinningBubbles"
                  color="white"
                  height="1.5rem"
                  width="1.5rem"
                />
              ) : (
                'Delete.'
              )}
            </button>
          </Form>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onCancel?.()
            }}
            className="w-full h-16 bg-black bg-opacity-60 text-white rounded-full flex justify-center items-center font-bold text-xl"
          >
            Don't delete.
          </button>
        </aside>
      </div>
    </div>
  )
}
