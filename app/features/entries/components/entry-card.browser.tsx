import React from 'react'
import { displayDateTime } from '~/utils/date.utils'
import { EntryInList } from '../types/entries'

interface EntryCardProps {
  entry: EntryInList
}

const EntryCard = ({ entry }: EntryCardProps) => {
  return (
    <div className="entry-card">
      <div className="pic-wrapper">
        {entry.previewUrl ? (
          <img className="picture" src={entry.previewUrl} alt={entry.title} />
        ) : null}
        <svg
          className="selector"
          width="150.4339mm"
          height="150.55228mm"
          viewBox="0 0 150.4339 150.55228"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(-30.820808,-64.00766)">
            <path
              fill="currentColor"
              d="M 30.820808,64.00766 H 42.939469 L 30.820808,76.211487 Z"
            />
            <path
              fill="currentColor"
              d="M 181.2547,64.00766 V 76.126321 L 169.05087,64.00766 Z"
            />
            <path
              fill="currentColor"
              d="M 181.2547,214.55994 H 169.13604 L 181.2547,202.35611 Z"
            />
            <path
              fill="currentColor"
              d="m 30.820808,214.55994 v -12.11867 l 12.20383,12.11867 z"
            />
          </g>
        </svg>
      </div>
      <section className="title">
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
          {entry.title}
        </h1>
        <small className="text-sm md:text-lg xl:text-xl">
          {displayDateTime(entry.createdAt)}
        </small>
      </section>
    </div>
  )
}

export default EntryCard
