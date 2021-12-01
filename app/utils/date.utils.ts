import { z } from 'zod'

export function displayDate(date: Date): string {
  let d = z.date().parse(date)
  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`
}

export function displayTime(date: Date, displaySeconds = false): string {
  let d = z.date().parse(date)
  return (
    `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}` +
    (displaySeconds ? `:${d.getSeconds()}` : '')
  )
}

export function displayDateTime(date: Date, displaySeconds = false): string {
  let d = z.date().parse(date)
  return `${displayDate(d)} at ${displayTime(d, displaySeconds)}`
}
