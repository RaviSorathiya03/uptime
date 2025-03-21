"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, type TooltipProps } from "recharts"
import type { AxisDomain } from "recharts/types/util/types"

// Generate mock data for the response time chart
const generateResponseTimeData = (websiteId: string) => {
  const today = new Date()
  const data = []

  // Generate data for the last 30 days
  for (let i = 29; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)

    // Base response time between 150ms and 250ms
    let responseTime = Math.floor(Math.random() * 100) + 150

    // For the website with issue, add some spikes
    if (websiteId === "7" && i < 5) {
      responseTime = Math.floor(Math.random() * 300) + 350
    }

    data.push({
      date: date.toISOString().split("T")[0],
      responseTime,
    })
  }

  return data
}

interface ResponseTimeChartProps {
  websiteId: string
}

export function ResponseTimeChart({ websiteId }: ResponseTimeChartProps) {
  const data = generateResponseTimeData(websiteId)

  const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border bg-background p-2 shadow-sm">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col">
              <span className="text-xs font-medium">Date</span>
              <span className="text-xs">{label}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium">Response Time</span>
              <span className="text-xs">{payload[0].value}ms</span>
            </div>
          </div>
        </div>
      )
    }

    return null
  }

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis
            dataKey="date"
            tickFormatter={(value) => {
              const date = new Date(value)
              return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
            }}
            tick={{ fontSize: 12 }}
            tickMargin={10}
            className="text-xs text-muted-foreground"
          />
          <YAxis
            tickFormatter={(value) => `${value}ms`}
            tick={{ fontSize: 12 }}
            tickMargin={10}
            className="text-xs text-muted-foreground"
            domain={[0, "dataMax + 100"] as AxisDomain}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="responseTime"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, className: "fill-primary stroke-background stroke-2" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

