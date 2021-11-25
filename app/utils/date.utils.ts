import { z } from 'zod'

export function displayDate(date: Date): string {
  let d = z.date().parse(date)
  return `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
}

export function displayTime(date: Date, displaySeconds = false): string {
  let d = z.date().parse(date)
  return (
    `${d.getHours()}:${d.getMinutes()}` +
    (displaySeconds ? `:${d.getSeconds()}` : '')
  )
}

export function displayDateTime(date: Date, displaySeconds = false): string {
  let d = z.date().parse(date)
  return `${displayDate(d)} at ${displayTime(d, displaySeconds)}`
}
