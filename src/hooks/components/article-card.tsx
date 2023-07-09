import { useClickOutside } from '@mantine/hooks'
import { useState } from 'react'

/*
|-------------------------------------------------------------------------------
| Hooks
|-------------------------------------------------------------------------------
*/

export function useArticleCardOpened() {
  const [opened, setOpened] = useState(false)
  const ref = useClickOutside(() => {
    if (opened) {
      setOpened(false)
    }
  })

  const onToggleOpened = () => setOpened((previous) => !previous)

  return {
    opened,
    ref,
    handlers: { onToggleOpened },
  }
}
