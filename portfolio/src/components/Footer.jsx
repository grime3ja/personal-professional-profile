import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm text-gray-600 dark:text-gray-400">©2025 Jacob Grimes Portfolio</div>
        <div className="mt-3 md:mt-0 flex items-center space-x-4">
          <a href="jgrimes112003@gmail.com" target="_blank" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">Email</a>
          <a href="https://www.linkedin.com/in/jacob-grimes-cs/" target="_blank" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">LinkedIn</a>
          <a href="https://github.com/grime3ja" target="_blank" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
