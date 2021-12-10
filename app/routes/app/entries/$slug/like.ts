import { ActionFunction } from 'remix'
import { likeAction } from '~/features/entries/api/like.server'

export let action: ActionFunction = (args) =>  likeAction(args)
