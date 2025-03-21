import Link from "next/link"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { WebsiteStatusBadge } from "@/components/website-status-badge"

interface WebsiteCardProps {
  id: string
  name: string
  url: string
  status: "online" | "issue" | "offline"
  uptime: string
  responseTime: string
  lastChecked: string
}

export function WebsiteCard({ id, name, url, status, uptime, responseTime, lastChecked }: WebsiteCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-bold">
          <Link href={`/dashboard/${id}`} className="hover:underline">
            {name}
          </Link>
        </CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href={`/dashboard/${id}`}>View Details</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/dashboard/${id}/settings`}>Edit Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/dashboard/${id}/alerts`}>Alert Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Delete Website</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground mb-4 truncate">{url}</div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Status</p>
            <WebsiteStatusBadge status={status} />
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Uptime</p>
            <p className="text-sm font-medium">{uptime}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Response Time</p>
            <p className="text-sm font-medium">{responseTime}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Last Checked</p>
            <p className="text-sm font-medium">{lastChecked}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t px-6 py-3">
        <Button variant="ghost" size="sm" className="w-full" asChild>
          <Link href={`/dashboard/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

