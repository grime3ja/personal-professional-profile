import React from 'react'

export default function About() {
  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">About me</h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        My name is Jacob Grimes, I am a senior Computer Science student at James Madison University in Harrisonburg, VA. I am from Northern Virginia
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        In my free time, I enjoy playing guitar, playing videogames, going to concerts with my girlfriend, watching sports, and hanging out with friends. Back home, I used to play acoustic guitar for my church Sunday mornings and for the youth group Wednesday nights
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Languages I have learned as well as what I have used them for
      </p>
      <h3 className="text-lg font-medium mt-4 mb-2">Skills</h3>
      <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-300">
        <li>C</li> <li>Systems Programming</li>
        <li>Java</li> <li>Advanced Programming / Software Development</li>
        <li>Python</li> <li>Automation and Algorithm Programming</li>
        <li>Ruby</li> <li>Personal Projects</li>
        <li>Rust</li> <li>Systems Programming</li>
        <li>MySQL, PostgreSQL</li> <li>Database Management and Querying</li>
        <li>HTML/JavaScript/CSS</li> <li>Front End Development</li>
        <li>C#</li> <li>Software Development for Quick Games</li>
        <li>Haskell</li> <li>Quick Functional Programming</li>
      </ul>
    </section>
  )
}
