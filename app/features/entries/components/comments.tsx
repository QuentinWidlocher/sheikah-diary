import { User } from '@prisma/client'
import { displayDateTime } from '~/utils/date.utils'
import { EntryInPage } from '../types/entries'
import CommentTextArea from './comment-text-area'

type CommentsProps = {
  entry: Pick<EntryInPage, 'comments' | 'slug'> & { id: string }
}

export default function Comments({ entry }: CommentsProps) {
  return (
    <>
      <ul className="mb-5">
        {entry.comments.map((comment) => (
          <li className="p-5" key={comment.id}>
            <strong>
              {comment.user?.username}
              <span className="text-sm">
                {comment.createdAt
                  ? ` (${displayDateTime(comment.createdAt)})`
                  : null}
              </span>
            </strong>
            <br />
            <p className="mt-2 ml-5">{comment.body}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
