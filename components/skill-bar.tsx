"use client"

import { useState, useEffect } from 'react'

interface SkillBarProps {
  name: string
  percentage: number
}

export function SkillBar({ name, percentage }: SkillBarProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 300)
    return () => clearTimeout(timer)
  }, [percentage])

  return (
    <div className="space-y-1.5" aria-label={`${name}: ${percentage}%`}>
      <div className="flex justify-end text-xs">
        <span className="text-[#A1A1AA]">{percentage}%</span>
      </div>
      <div className="h-[3px] w-full rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  )
}