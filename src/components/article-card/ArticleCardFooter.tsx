import type { PropsWithChildren } from 'react'

import clsx from 'clsx'

import { IconFacebook } from '@/assets/icons/facebook'
import { IconPinterest } from '@/assets/icons/pinterest'
import { IconShare } from '@/assets/icons/share'
import { IconTwitter } from '@/assets/icons/twitter'

import { useArticleCardOpened } from '@/hooks/components/article-card'

import { onClickWithPreventDefault } from '@/utilities/default-mouse-events'

/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

export function ArticleCardFooter() {
  const { handlers, opened, ref } = useArticleCardOpened()

  return (
    <footer
      className="flex gap-5 items-center overflow-hidden pb-5 pt-5 px-8 relative rounded-b-[0.625rem]"
      ref={ref}
    >
      <picture className="block h-10 w-10" aria-hidden={opened}>
        <img
          src="profile.png"
          className="h-full w-full"
          alt="Profile picture for Michelle Appleton"
        />
      </picture>
      <section aria-hidden={opened}>
        <p className="font-bold leading-5 text-[0.8125rem] tracking-[0.0075rem]">
          Michelle Appleton
        </p>
        <p className="font-medium leading-5 text-[0.8125rem] text-grey-very-light tracking-[0.0075rem]">
          28 Jun 2020
        </p>
      </section>
      <section className="ml-auto z-10">
        <button
          className={clsx(
            'flex h-8 items-center outline-none overflow-hidden ring-offset-2 rounded-full transition-colors w-8 z-10 focus:ring-4',
            opened
              ? 'bg-grey-light ring-grey-light ring-offset-grey-normal text-white'
              : 'bg-default ring-grey-light/30 text-grey-light'
          )}
          onClick={handlers.onToggleOpened}
        >
          <IconShare />
          <span className="sr-only">Share options</span>
        </button>
        <div
          className={clsx(
            'absolute bg-grey-normal flex gap-5 h-full items-center left-0 px-8 py-4 top-0 transition-all w-full -z-10',
            'opacity-100 visible aria-hidden:invisible aria-hidden:opacity-0 aria-hidden:pointer-events-none'
          )}
          aria-hidden={!opened}
        >
          <span
            className="font-medium leading-5 text-[0.8125rem] text-grey-very-light tracking-[0.3125rem] uppercase"
            aria-hidden="true"
          >
            Share
          </span>
          <ul className="flex gap-4 text-[0] text-white">
            <ShareOptionItem name="Facebook">
              <IconFacebook />
            </ShareOptionItem>
            <ShareOptionItem name="Twitter">
              <IconTwitter />
            </ShareOptionItem>
            <ShareOptionItem name="Pinterest" circle>
              <IconPinterest />
            </ShareOptionItem>
          </ul>
        </div>
      </section>
    </footer>
  )
}

function ShareOptionItem({
  children,
  circle,
  name,
}: PropsWithChildren<{
  circle?: boolean
  name: string
}>) {
  return (
    <li className="">
      <a
        href="/#"
        className={clsx(
          'h-5 inline-block outline-none ring-offset-2 ring-offset-grey-normal ring-white/80 w-5 focus:ring-2',
          circle && 'rounded-full'
        )}
        onClick={onClickWithPreventDefault}
      >
        {children}
        <span className="sr-only">Share in {name}</span>
      </a>
    </li>
  )
}
