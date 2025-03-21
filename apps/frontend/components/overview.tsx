"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Mon",
    total: 580,
  },
  {
    name: "Tue",
    total: 520,
  },
  {
    name: "Wed",
    total: 550,
  },
  {
    name: "Thu",
    total: 590,
  },
  {
    name: "Fri",
    total: 540,
  },
  {
    name: "Sat",
    total: 480,
  },
  {
    name: "Sun",
    total: 490,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}ms`}
        />
        <Bar dataKey="total" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
      </BarChart>
    </ResponsiveContainer>
  )
}

