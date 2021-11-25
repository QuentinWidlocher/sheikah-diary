import React from 'react'
import { displayDateTime } from '~/utils/date.utils'
import { EntryInList } from '../types/entries'

interface EntryCardProps {
  entry: EntryInList
}

const EntryCard = ({ entry }: EntryCardProps) => {
  return (
    <div className="p-5 dark:bg-gray-700 dark:text-white bg-white shadow rounded-xl border-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:shadow-lg transition">
      <h1 className="text-xl">{entry.title}</h1>
      <small className="text-sm opacity-50">
        {displayDateTime(entry.createdAt)}
      </small>
    </div>
  )
}

export default EntryCard
