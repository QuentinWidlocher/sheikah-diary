import React from 'react'
import { Link } from 'remix'
import SheikahLogo from '~/components/sheika-logo'
import entryCardStylesheet from '~/styles/entry-card.css'
import { EntryInList } from '../types/entry-in-list'
import EntryFrame from './entry-frame'
import EntrySelector from './entry-selector'

export let stylesheet = { rel: 'stylesheet', href: entryCardStylesheet }

interface EntryCardProps {
	entry: EntryInList
}

const EntryCard = ({ entry }: EntryCardProps) => {
	return (
		<Link
			prefetch="intent"
			to={`/app/entries/${entry.slug}`}
			className="outline-none">
			<div className="entry-card">
				<section className="picture">
					<div className="pic-wrapper">
						{entry.thumbnailImgProps ? (
							<img
								loading="lazy"
								className="picture bg-cover"
								style={{
									backgroundImage: entry.placeholderUrl
										? `url('${entry.placeholderUrl}')`
										: undefined,
								}}
								{...entry.thumbnailImgProps}
								alt=""
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
					<h2>by {entry.createdBy}</h2>
				</section>
			</div>
		</Link>
	)
}

export default EntryCard
