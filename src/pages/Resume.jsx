import React from 'react'
import accomplishments from '../data/accomplishments'

export default function Resume() {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Resume</h2>
        </div>

        <div className="flex items-center space-x-2">
          <a
            href={`${import.meta.env.BASE_URL}assets/loading-screen.png`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md bg-brand-500 text-white text-sm"
          >
            View Resume
          </a>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-3">Accomplishments</h3>
        
        <h4 className="text-lg font-medium mb-3">Personal Projects</h4>
        <ul className="space-y-3">
          {accomplishments.personal.map((a) => (
            <li key={a.id} className="p-4 border rounded-md border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">{a.title}</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{a.description}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{a.time_frame}</p>
              {a.links.map((link) => (
                <a href={link.exact} target="_blank" rel="noopener noreferrer" className="px-4 py-1 rounded-md bg-brand-500 text-white text-sm">{link.display}</a>
              ))}
            </li>
          ))}
        </ul>

        <h4 className="text-lg font-medium mb-3">School Projects</h4>
        <ul className="space-y-3">
          {accomplishments.school.map((a) => (
            <li key={a.id} className="p-4 border rounded-md border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">{a.title}</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{a.description}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{a.time_frame}</p>
              {a.links.map((link) => (
                <a href={link.exact} target="_blank" rel="noopener noreferrer" className="px-4 py-1 rounded-md bg-brand-500 text-white text-sm">{link.display}</a>
              ))}
            </li>
          ))}
        </ul>
        <h4 className="text-lg font-medium mb-3">Work Projects</h4>
        <ul className="space-y-3">
          {accomplishments.work.map((a) => (
            <li key={a.id} className="p-4 border rounded-md border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">{a.title}</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{a.description}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{a.time_frame}</p>
              {a.links.map((link) => (
                <a href={link.exact}>{link.display}</a>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
