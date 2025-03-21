"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, HelpCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Generate mock data for the uptime calendar
const generateUptimeData = (websiteId: string) => {
  const today = new Date()
  const data = []

  // Generate data for the last 30 days
  for (let i = 29; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)

    // Generate 24 hours of data for each day
    const hours = []
    for (let h = 0; h < 24; h++) {
      // For the website with issue, add some downtime
      if (websiteId === "7" && i < 5 && (h === 10 || h === 11)) {
        hours.push({
          hour: h,
          status: h === 10 ? "issue" : "offline",
          responseTime: h === 10 ? 678 : 0,
          timestamp: new Date(date.setHours(h)).toISOString(),
        })
      } else {
        // Random response time between 150ms and 300ms for normal operation
        const responseTime = Math.floor(Math.random() * 150) + 150
        hours.push({
          hour: h,
          status: "online",
          responseTime,
          timestamp: new Date(date.setHours(h)).toISOString(),
        })
      }
    }

    data.push({
      date: date.toISOString().split("T")[0],
      hours,
    })
  }

  return data
}

interface UptimeCalendarProps {
  websiteId: string
}

export function UptimeCalendar({ websiteId }: UptimeCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const uptimeData = generateUptimeData(websiteId)

  // Group data by week for display
  const weeks = []
  let currentWeek = []

  for (const day of uptimeData) {
    currentWeek.push(day)
    if (currentWeek.length === 7) {
      weeks.push([...currentWeek])
      currentWeek = []
    }
  }

  if (currentWeek.length > 0) {
    weeks.push(currentWeek)
  }

  const statusColors = {
    online: "bg-green-500",
    issue: "bg-yellow-500",
    offline: "bg-red-500",
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h3 className="text-sm font-medium">Last 30 Days</h3>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-5 w-5">
                  <HelpCircle className="h-4 w-4" />
                  <span className="sr-only">Help</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Each cell represents one hour of monitoring.</p>
                <p>Green: Online, Yellow: Performance Issue, Red: Offline</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7"
            onClick={() => {
              const prevMonth = new Date(currentMonth)
              prevMonth.setMonth(prevMonth.getMonth() - 1)
              setCurrentMonth(prevMonth)
            }}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous month</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7"
            onClick={() => {
              const nextMonth = new Date(currentMonth)
              nextMonth.setMonth(nextMonth.getMonth() + 1)
              setCurrentMonth(nextMonth)
            }}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next month</span>
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7 gap-1">
            {week.map((day, dayIndex) => {
              const date = new Date(day.date)
              const dayName = date.toLocaleDateString("en-US", { weekday: "short" })
              const dayOfMonth = date.getDate()

              return (
                <div key={dayIndex} className="space-y-1">
                  <div className="text-center">
                    <div className="text-xs font-medium">{dayName}</div>
                    <div className="text-xs text-muted-foreground">{dayOfMonth}</div>
                  </div>
                  <div className="grid grid-cols-6 gap-[2px]">
                    {day.hours.map((hour, hourIndex) => {
                      if (hourIndex % 4 !== 0) return null // Only show every 4 hours to save space

                      return (
                        <TooltipProvider key={hourIndex}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div
                                className={`h-3 w-full rounded-sm ${statusColors[hour.status as keyof typeof statusColors]}`}
                              />
                            </TooltipTrigger>
                            <TooltipContent side="top">
                              <div className="text-xs">
                                <p className="font-medium">
                                  {new Date(hour.timestamp).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </p>
                                <p>Status: {hour.status.charAt(0).toUpperCase() + hour.status.slice(1)}</p>
                                {hour.status !== "offline" && <p>Response Time: {hour.responseTime}ms</p>}
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-end space-x-2 pt-2">
        <div className="flex items-center space-x-1">
          <div className={`h-3 w-3 rounded-sm ${statusColors.online}`} />
          <span className="text-xs text-muted-foreground">Online</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className={`h-3 w-3 rounded-sm ${statusColors.issue}`} />
          <span className="text-xs text-muted-foreground">Performance Issue</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className={`h-3 w-3 rounded-sm ${statusColors.offline}`} />
          <span className="text-xs text-muted-foreground">Offline</span>
        </div>
      </div>
    </div>
  )
}

