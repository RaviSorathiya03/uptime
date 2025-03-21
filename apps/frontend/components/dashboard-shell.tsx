import type React from "react"
import { SidebarNav } from "@/components/sidebar-nav"

interface DashboardShellProps {
  children: React.ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 items-start md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <aside className="fixed top-0 z-30 hidden h-screen w-full shrink-0 border-r md:sticky md:block">
          <SidebarNav />
        </aside>
        <main className="flex w-full flex-col overflow-hidden">
          <div className="container flex-1 space-y-4 p-8 pt-6">{children}</div>
        </main>
      </div>
    </div>
  )
}

