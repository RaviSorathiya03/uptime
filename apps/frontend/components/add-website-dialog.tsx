"use client"

import type React from "react"

import { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const monitoringLocations = [
  { label: "US East (N. Virginia)", value: "us-east-1" },
  { label: "US West (Oregon)", value: "us-west-2" },
  { label: "Europe (Ireland)", value: "eu-west-1" },
  { label: "Europe (Frankfurt)", value: "eu-central-1" },
  { label: "Asia Pacific (Tokyo)", value: "ap-northeast-1" },
  { label: "Asia Pacific (Singapore)", value: "ap-southeast-1" },
  { label: "Asia Pacific (Sydney)", value: "ap-southeast-2" },
]

interface AddWebsiteDialogProps {
  children: React.ReactNode
}

export function AddWebsiteDialog({ children }: AddWebsiteDialogProps) {
  const [open, setOpen] = useState(false)
  const [location, setLocation] = useState("")

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add a new website</DialogTitle>
          <DialogDescription>Enter the details of the website you want to monitor.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Website Name</Label>
            <Input id="name" placeholder="My Website" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="url">Website URL</Label>
            <Input id="url" placeholder="https://example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="interval">Check Interval</Label>
            <Select defaultValue="60">
              <SelectTrigger id="interval">
                <SelectValue placeholder="Select interval" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">Every 30 seconds</SelectItem>
                <SelectItem value="60">Every 1 minute</SelectItem>
                <SelectItem value="300">Every 5 minutes</SelectItem>
                <SelectItem value="600">Every 10 minutes</SelectItem>
                <SelectItem value="1800">Every 30 minutes</SelectItem>
                <SelectItem value="3600">Every 1 hour</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label>Monitoring Locations</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" role="combobox" className="justify-between">
                  {location ? monitoringLocations.find((loc) => loc.value === location)?.label : "Select locations..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[400px] p-0">
                <Command>
                  <CommandInput placeholder="Search locations..." />
                  <CommandList>
                    <CommandEmpty>No location found.</CommandEmpty>
                    <CommandGroup>
                      {monitoringLocations.map((loc) => (
                        <CommandItem
                          key={loc.value}
                          value={loc.value}
                          onSelect={(currentValue) => {
                            setLocation(currentValue === location ? "" : currentValue)
                          }}
                        >
                          <Check className={cn("mr-2 h-4 w-4", location === loc.value ? "opacity-100" : "opacity-0")} />
                          {loc.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button type="submit" onClick={() => setOpen(false)}>
            Add Website
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

