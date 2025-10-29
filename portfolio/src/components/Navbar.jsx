import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      'px-3 py-2 rounded-md text-sm font-medium ' + (isActive ? 'bg-gray-200 dark:bg-gray-800' : 'hover:bg-gray-100 dark:hover:bg-gray-900')
    }
  >
    {children}
  </NavLink>
)

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'auto'
    } catch {
      return 'auto'
    }
  })

  useEffect(() => {
    const onPrefChange = (e) => {
      if (theme === 'auto') {
        if (e.matches) document.documentElement.classList.add('dark')
        else document.documentElement.classList.remove('dark')
      }
    }
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addEventListener('change', onPrefChange)
    return () => mq.removeEventListener('change', onPrefChange)
  }, [theme])

  const toggleTheme = () => {
    const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    const next = current === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', next === 'dark')
    try {
      localStorage.setItem('theme', next)
      setTheme(next)
    } catch {}
  }

  const resetAuto = () => {
    try {
      localStorage.removeItem('theme')
      setTheme('auto')
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      document.documentElement.classList.toggle('dark', prefersDark)
    } catch {}
  }

  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-800 bg-opacity-60 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <NavLink to="/" className="text-lg font-semibold tracking-tight">Jacob Grimes</NavLink>
          <nav className="hidden md:flex items-center space-x-2">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/resume">Resume</NavItem>
          </nav>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            title="Toggle dark / light"
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900"
          >
            <span aria-hidden>
              {document.documentElement.classList.contains('dark') ? '🌞' : '🌙'}
            </span>
          </button>

          <button
            onClick={resetAuto}
            title="Reset to system preference"
            className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800"
          >
            Auto
          </button>
        </div>
      </div>
    </header>
  )
}
