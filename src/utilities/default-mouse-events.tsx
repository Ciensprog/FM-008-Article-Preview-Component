import type { MouseEvent } from 'react'

/*
|-------------------------------------------------------------------------------
| Utilities
|-------------------------------------------------------------------------------
*/

export function onClickWithPreventDefault(
  event: MouseEvent<HTMLAnchorElement>
) {
  event.preventDefault()
}
