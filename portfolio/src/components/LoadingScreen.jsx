import React, { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // small pseudo-progress for polish
    let i = 0
    const t = setInterval(() => {
      i += Math.random() * 12
      setProgress(Math.min(100, Math.round(i)))
      if (i >= 100) clearInterval(t)
    }, 180)

    return () => clearInterval(t)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="text-center">
        <div className="mx-auto mb-6 w-[320px] h-[240px] bg-black rounded shadow-lg overflow-hidden flex items-center justify-center">
          {/* the image — put loading-screen.png in public/assets */}
          <img src="/assets/loading-screen.png" alt="Loading" className="w-full h-full object-contain" />
        </div>

        <div className="text-sm text-gray-300 mb-2">Loading portfolio…</div>

        <div className="w-64 h-2 bg-gray-700 rounded-full mx-auto overflow-hidden">
          <div
            className="h-full bg-white/90"
            style={{ width: `${progress}%`, transition: 'width 200ms linear' }}
          />
        </div>
      </div>
    </div>
  )
}
