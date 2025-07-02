"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TrendingUp, TrendingDown, Shield, Gauge, AlertTriangle, User, X, Zap } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const driverBehaviorData = [
  {
    id: "D001",
    driver: "John Smith",
    overallScore: 92,
    speeding: 2,
    harshBraking: 1,
    rapidAcceleration: 3,
    idling: "5 min",
    trend: "up",
    recentEvents: [
      { type: "Rapid Acceleration", time: "2 hours ago", location: "Main St & 2nd Ave" },
      { type: "Speeding", time: "5 hours ago", location: "Highway 101" },
    ],
  },
  {
    id: "D002",
    driver: "Sarah Johnson",
    overallScore: 85,
    speeding: 5,
    harshBraking: 4,
    rapidAcceleration: 2,
    idling: "12 min",
    trend: "down",
    recentEvents: [
      { type: "Harsh Braking", time: "1 hour ago", location: "Oak St & 5th Ave" },
      { type: "Speeding", time: "3 hours ago", location: "I-280" },
    ],
  },
  {
    id: "D003",
    driver: "Mike Davis",
    overallScore: 95,
    speeding: 0,
    harshBraking: 0,
    rapidAcceleration: 1,
    idling: "2 min",
    trend: "up",
    recentEvents: [
      { type: "Rapid Acceleration", time: "Yesterday", location: "Warehouse District" },
    ],
  },
  {
    id: "D004",
    driver: "Lisa Wilson",
    overallScore: 88,
    speeding: 3,
    harshBraking: 2,
    rapidAcceleration: 4,
    idling: "8 min",
    trend: "up",
    recentEvents: [
      { type: "Speeding", time: "4 hours ago", location: "Industrial Park" },
      { type: "Harsh Braking", time: "6 hours ago", location: "City Center" },
    ],
  },
]

export function DrivingBehavior() {
  const [selectedDriver, setSelectedDriver] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 80) return "text-yellow-600"
    return "text-red-600"
  }

  const handleRowClick = (driver: any) => {
    setSelectedDriver(driver)
    setIsModalOpen(true)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Driving Behavior Summary</CardTitle>
          <CardDescription>Key metrics for driver performance.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Safety Score</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">90</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Efficiency Score</CardTitle>
              <Gauge className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">88</div>
              <p className="text-xs text-muted-foreground">-1 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">17</div>
              <p className="text-xs text-muted-foreground">in the last 7 days</p>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Driver Performance</CardTitle>
          <CardDescription>Detailed breakdown of driver behavior metrics.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Driver</TableHead>
                <TableHead>Overall Score</TableHead>
                <TableHead>Speeding Incidents</TableHead>
                <TableHead>Harsh Braking</TableHead>
                <TableHead>Rapid Acceleration</TableHead>
                <TableHead>Idling Time</TableHead>
                <TableHead>Trend</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {driverBehaviorData.map((data) => (
                <TableRow key={data.id} onClick={() => handleRowClick(data)} className="cursor-pointer">
                  <TableCell>{data.driver}</TableCell>
                  <TableCell>
                    <span className={getScoreColor(data.overallScore)}>{data.overallScore}</span>
                  </TableCell>
                  <TableCell>{data.speeding}</TableCell>
                  <TableCell>{data.harshBraking}</TableCell>
                  <TableCell>{data.rapidAcceleration}</TableCell>
                  <TableCell>{data.idling}</TableCell>
                  <TableCell>
                    {data.trend === "up" ? (
                      <TrendingUp className="h-5 w-5 text-green-500" />
                    ) : (
                      <TrendingDown className="h-5 w-5 text-red-500" />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              {selectedDriver?.driver}
            </DialogTitle>
            <DialogDescription>
              Detailed performance metrics for {selectedDriver?.driver}.
            </DialogDescription>
          </DialogHeader>
          {selectedDriver && (
            <div className="py-4">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Overall Score</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={`text-4xl font-bold ${getScoreColor(selectedDriver.overallScore)}`}>
                      {selectedDriver.overallScore}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {selectedDriver.trend === "up" ? (
                      <TrendingUp className="h-10 w-10 text-green-500" />
                    ) : (
                      <TrendingDown className="h-10 w-10 text-red-500" />
                    )}
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Event Type</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Location</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedDriver.recentEvents.map((event: any, index: number) => (
                        <TableRow key={index}>
                          <TableCell>
                            <div className="flex items-center">
                              {event.type === "Speeding" && <Zap className="h-4 w-4 mr-2 text-red-500" />}
                              {event.type === "Harsh Braking" && <AlertTriangle className="h-4 w-4 mr-2 text-yellow-500" />}
                              {event.type === "Rapid Acceleration" && <TrendingUp className="h-4 w-4 mr-2 text-orange-500" />}
                              {event.type}
                            </div>
                          </TableCell>
                          <TableCell>{event.time}</TableCell>
                          <TableCell>{event.location}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}