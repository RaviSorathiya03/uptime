import { AlertCircle, CheckCircle2, Clock } from "lucide-react"

interface RecentActivityProps {
  showOnlyAlerts?: boolean
}

export function RecentActivity({ showOnlyAlerts = false }: RecentActivityProps) {
  const activities = [
    {
      id: 1,
      type: "alert",
      website: "E-commerce Store",
      message: "High response time detected (678ms)",
      time: "Today at 10:45 AM",
      status: "issue",
    },
    {
      id: 2,
      type: "status",
      website: "Admin Dashboard",
      message: "Website is back online",
      time: "Today at 9:30 AM",
      status: "online",
    },
    {
      id: 3,
      type: "alert",
      website: "E-commerce Store",
      message: "Slow response time (456ms)",
      time: "Today at 8:12 AM",
      status: "issue",
    },
    {
      id: 4,
      type: "check",
      website: "Main Website",
      message: "Successful check (189ms)",
      time: "Today at 8:00 AM",
      status: "online",
    },
    {
      id: 5,
      type: "alert",
      website: "Admin Dashboard",
      message: "Website is offline",
      time: "Today at 7:45 AM",
      status: "offline",
    },
    {
      id: 6,
      type: "status",
      website: "Blog",
      message: "SSL certificate renewed",
      time: "Yesterday at 4:30 PM",
      status: "online",
    },
  ]

  const filteredActivities = showOnlyAlerts ? activities.filter((activity) => activity.type === "alert") : activities

  return (
    <div className="space-y-4">
      {filteredActivities.map((activity) => (
        <div key={activity.id} className="flex items-start space-x-4">
          <div className="mt-0.5">
            {activity.status === "online" ? (
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            ) : activity.status === "issue" ? (
              <Clock className="h-5 w-5 text-yellow-500" />
            ) : (
              <AlertCircle className="h-5 w-5 text-red-500" />
            )}
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">{activity.website}</p>
            <p className="text-sm text-muted-foreground">{activity.message}</p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

