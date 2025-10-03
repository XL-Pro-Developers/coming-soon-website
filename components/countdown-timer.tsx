"use client"

import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const istOffset = 5.5 * 60 * 60 * 1000 // IST is UTC+5:30
      const istNow = new Date(now.getTime() + now.getTimezoneOffset() * 60 * 1000 + istOffset)

      // Parse target date as IST
      const target = new Date(targetDate + "+05:30")
      const difference = target.getTime() - istNow.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (!mounted) {
    return (
      <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md">
        {[
          { label: "Days", value: 0 },
          { label: "Hours", value: 0 },
          { label: "Minutes", value: 0 },
          { label: "Seconds", value: 0 },
        ].map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-4 rounded-lg bg-secondary border border-border"
          >
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-mono">00</span>
            <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">{item.label}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ].map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-4 rounded-lg bg-secondary border border-border"
        >
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-mono">
            {String(item.value).padStart(2, "0")}
          </span>
          <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">{item.label}</span>
        </div>
      ))}
    </div>
  )
}
