import React from 'react'
import SheikahLogo from '~/components/sheika-logo'
import { displayDateTime } from '~/utils/date.utils'
import EntryFrame from './entry-frame'
import EntrySelector from './entry-selector'
import entryCardStylesheet from '~/styles/entry-card.css'
import { Link } from 'remix'
import { EntryInList } from '../types/entry-in-list'

export let stylesheet = { rel: 'stylesheet', href: entryCardStylesheet }

interface EntryCardProps {
  entry: EntryInList
}

const EntryCard = ({ entry }: EntryCardProps) => {
  return (
    <Link
      prefetch="intent"
      to={`/app/entries/${entry.slug}`}
      className="outline-none"
    >
      <div className="entry-card">
        <section className="picture">
          <div className="pic-wrapper">
            {entry.thumbnailUrl ? (
              <img
                loading="lazy"
                className="picture"
                src={entry.thumbnailUrl}
                alt={entry.title}
              />
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
    </Link>
  )
}

export default EntryCard
