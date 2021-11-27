import React from 'react'
import SheikahLogo from '~/components/sheika-logo'
import { displayDateTime } from '~/utils/date.utils'
import { EntryInList } from '../types/entries'
import EntryFrame from './entry-frame'
import EntrySelector from './entry-selector'

interface EntryCardProps {
  entry: EntryInList
}

const EntryCard = ({ entry }: EntryCardProps) => {
  return (
    <div className="entry-card">
      <section className="picture">
        <div className="pic-wrapper">
          {entry.previewUrl ? (
            <img className="picture" src={entry.previewUrl} alt={entry.title} />
          ) : (
            <SheikahLogo className="picture text-primary-700" />
          )}
        </div>
        <EntrySelector />
        <EntryFrame />
      </section>
      <section className="title">
        <h1 className="font-bold text-xl">{entry.title}</h1>
        <small className="text-sm">{displayDateTime(entry.createdAt)}</small>
      </section>
    </div>
  )
}

export default EntryCard
