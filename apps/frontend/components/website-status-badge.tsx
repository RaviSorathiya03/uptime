import type React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const statusBadgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold", {
  variants: {
    variant: {
      online: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      issue: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      offline: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    },
  },
  defaultVariants: {
    variant: "online",
  },
})

interface WebsiteStatusBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statusBadgeVariants> {
  status: "online" | "issue" | "offline"
}

export function WebsiteStatusBadge({ className, status, ...props }: WebsiteStatusBadgeProps) {
  const statusText = {
    online: "Online",
    issue: "Performance Issue",
    offline: "Offline",
  }

  return (
    <div className={cn(statusBadgeVariants({ variant: status }), className)} {...props}>
      <div className="mr-1 h-1.5 w-1.5 rounded-full bg-current" />
      {statusText[status]}
    </div>
  )
}

