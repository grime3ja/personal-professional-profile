import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Hi — I’m Jacob Grimes</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        I am currently a undergraduate student at James Madison University, studying Computer Science.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        I also work at FVCbank, where I do Part Time IT support.
      </p>

      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-3">
        <Link to="/about" className="inline-block px-5 py-2 rounded-md bg-brand-500 text-white font-medium">Learn more</Link>
        <Link to="/resume" className="inline-block px-5 py-2 rounded-md border border-gray-300 dark:border-gray-700">Resume & accomplishments</Link>
      </div>
    </section>
  )
}
