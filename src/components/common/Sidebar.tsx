'use client'

import { useState, useEffect } from 'react'
import { NAV_ITEMS, SOCIAL_LINKS } from '@/consts'

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects']
      let current = ''

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && element.getBoundingClientRect().top <= 100) {
          current = section
        }
      }

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="font-satoshi text-4xl font-bold tracking-tight text-evergreen-100 sm:text-5xl">
          <a href="/">Francisco Santopietro</a>
        </h1>
        <h2 className="subtitle font-satoshi mt-3 text-lg tracking-tight sm:text-xl">
          Fullstack Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          Building scalable web applications with modern technologies. Based in Buenos Aires, Argentina.
        </p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {NAV_ITEMS.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`group flex items-center py-3 transition-all ${
                    activeSection === item.href.slice(1)
                      ? 'opacity-100'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <span
                    className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-focus-visible:w-16 motion-reduce:transition-none ${
                      activeSection === item.href.slice(1)
                        ? 'w-16 bg-warm-sand-400'
                        : 'w-8 bg-evergreen-600 group-hover:bg-warm-sand-400'
                    }`}
                  ></span>
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest transition-all ${
                      activeSection === item.href.slice(1)
                        ? 'text-evergreen-100'
                        : 'text-evergreen-100 group-hover:text-evergreen-100 group-focus-visible:text-evergreen-100'
                    }`}
                  >
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        {SOCIAL_LINKS.map((link) => (
          <li key={link.name} className="mr-5 shrink-0 text-xs">
            <a
              className="block hover:text-warm-sand-400 transition"
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${link.name} (opens in a new tab)`}
              title={link.name}
            >
              <span className="sr-only">{link.name}</span>
              {link.name === 'GitHub' && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
              )}
              {link.name === 'LinkedIn' && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              )}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
