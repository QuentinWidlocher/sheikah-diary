import { ActionFunction } from 'remix'
import { createCommentAction } from '~/features/entries/api/create-comment.server'

export let action: ActionFunction = createCommentAction
