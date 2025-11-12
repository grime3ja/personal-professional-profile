import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [initialLoading, setInitialLoading] = useState(true)
  const location = useLocation()
  // small state to force fade-in on route change
  const [routeKey, setRouteKey] = useState(location.pathname)

  useEffect(() => {
    // initial loading screen duration ~2.2s
    const t = setTimeout(() => setInitialLoading(false), 2200)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    // update key to trigger remount/fade
    setRouteKey(location.pathname)
  }, [location.pathname])

  if (initialLoading) {
    return <LoadingScreen />
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main
          key={routeKey}
          className="flex-grow container mx-auto px-4 py-8 transition-opacity duration-300"
        >
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App
