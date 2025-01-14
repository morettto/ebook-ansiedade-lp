'use client'

import { useEffect, useState } from 'react'

export default function CountdownTimer() {
  const TIMER_DURATION = 5400 // 1 hour and 30 minutes in seconds
  const TIMER_KEY = 'special-offer-timer'

  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION)

  useEffect(() => {
    // Check if there's an existing timer in localStorage
    const savedEndTime = localStorage.getItem(TIMER_KEY)
    if (savedEndTime) {
      const remainingTime = Math.floor((parseInt(savedEndTime) - Date.now()) / 1000)
      if (remainingTime > 0) {
        setTimeLeft(remainingTime)
      } else {
        // If timer expired, start a new one
        const newEndTime = Date.now() + TIMER_DURATION * 1000
        localStorage.setItem(TIMER_KEY, newEndTime.toString())
        setTimeLeft(TIMER_DURATION)
      }
    } else {
      // If no timer exists, start a new one
      const endTime = Date.now() + TIMER_DURATION * 1000
      localStorage.setItem(TIMER_KEY, endTime.toString())
    }

    const interval = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          // Reset timer when it reaches zero
          const newEndTime = Date.now() + TIMER_DURATION * 1000
          localStorage.setItem(TIMER_KEY, newEndTime.toString())
          return TIMER_DURATION
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const hours = Math.floor(timeLeft / 3600)
  const minutes = Math.floor((timeLeft % 3600) / 60)
  const seconds = timeLeft % 60

  return (
    <div className="bg-[#1F1F1F] p-6 rounded-lg text-center max-w-md mx-auto">
      <p className="text-[#E5B17A] font-semibold mb-3">Oferta Especial - Tempo Restante:</p>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#2A2A2A] p-4 rounded-lg">
          <div className="text-white text-3xl font-bold">
            {hours.toString().padStart(2, '0')}
          </div>
          <div className="text-[#E5B17A] text-sm">horas</div>
        </div>
        <div className="bg-[#2A2A2A] p-4 rounded-lg">
          <div className="text-white text-3xl font-bold">
            {minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-[#E5B17A] text-sm">minutos</div>
        </div>
        <div className="bg-[#2A2A2A] p-4 rounded-lg">
          <div className="text-white text-3xl font-bold">
            {seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-[#E5B17A] text-sm">segundos</div>
        </div>
      </div>
    </div>
  )
}

