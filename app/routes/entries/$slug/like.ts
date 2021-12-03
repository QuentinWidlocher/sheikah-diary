import { ActionFunction } from 'remix'
import { likeAction } from '~/features/entries/api/like.server'

export let action = likeAction
