"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart, Bell, Clock, LayoutDashboard, LineChart, Plus, Settings, Users, Globe } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <Clock className="h-5 w-5 text-primary" />
          <span>UptimeGuard</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 text-sm font-medium">
          <Link
            href="/dashboard"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground",
              pathname === "/dashboard" && "bg-accent text-accent-foreground",
            )}
          >
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            href="/dashboard/websites"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground",
              pathname === "/dashboard/websites" && "bg-accent text-accent-foreground",
            )}
          >
            <Globe className="h-4 w-4" />
            Websites
          </Link>
          <Link
            href="/dashboard/analytics"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground",
              pathname === "/dashboard/analytics" && "bg-accent text-accent-foreground",
            )}
          >
            <LineChart className="h-4 w-4" />
            Analytics
          </Link>
          <Link
            href="/dashboard/alerts"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground",
              pathname === "/dashboard/alerts" && "bg-accent text-accent-foreground",
            )}
          >
            <Bell className="h-4 w-4" />
            Alerts
          </Link>
          <Link
            href="/dashboard/reports"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground",
              pathname === "/dashboard/reports" && "bg-accent text-accent-foreground",
            )}
          >
            <BarChart className="h-4 w-4" />
            Reports
          </Link>
          <Link
            href="/dashboard/team"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground",
              pathname === "/dashboard/team" && "bg-accent text-accent-foreground",
            )}
          >
            <Users className="h-4 w-4" />
            Team
          </Link>
          <Link
            href="/dashboard/settings"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground",
              pathname === "/dashboard/settings" && "bg-accent text-accent-foreground",
            )}
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </nav>
      </div>
      <div className="mt-auto p-4">
        <Button className="w-full" size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Add Website
        </Button>
      </div>
    </div>
  )
}

