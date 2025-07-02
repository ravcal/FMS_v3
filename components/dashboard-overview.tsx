"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Truck, Users, Route, Wrench, AlertTriangle, Fuel, Calendar, CheckCircle, Clock, Shield } from "lucide-react"
import { ErrorBoundary } from "@/components/error-boundary"
import { VehicleManagement } from "@/components/vehicle-management"
import { DriverManagement } from "@/components/driver-management"
import { RouteManagement } from "@/components/route-management"

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-gray-600 mt-2">Welcome to Cassandra</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-white border">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
          <TabsTrigger value="drivers">Drivers</TabsTrigger>
          <TabsTrigger value="routes">Routes</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Fleet Status Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">89</div>
                    <p className="text-sm text-gray-600">Total Vehicles</p>
                  </div>
                  <Truck className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-green-600">94</div>
                    <p className="text-sm text-gray-600">Active Drivers</p>
                  </div>
                  <Users className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">12</div>
                    <p className="text-sm text-gray-600">Active Routes</p>
                  </div>
                  <Route className="h-8 w-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-orange-600">5</div>
                    <p className="text-sm text-gray-600">Maintenance Due</p>
                  </div>
                  <Wrench className="h-8 w-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-teal-600">90</div>
                    <p className="text-sm text-gray-600">Avg. Behavior Score</p>
                  </div>
                  <Shield className="h-8 w-8 text-teal-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alerts and Notifications */}
          <Card>
            <CardHeader>
              <CardTitle>Alerts & Notifications</CardTitle>
              <CardDescription>Recent alerts requiring attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg bg-red-50">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-red-800">Vehicle Breakdown</h4>
                      <p className="text-sm text-red-700 mt-1">
                        Vehicle FL-002 (Mercedes Sprinter) reported engine failure on Highway 101.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg bg-yellow-50">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-yellow-800">Maintenance Due</h4>
                      <p className="text-sm text-yellow-700 mt-1">
                        5 vehicles are due for scheduled maintenance in the next 7 days.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg bg-blue-50">
                  <div className="flex items-start space-x-3">
                    <Fuel className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-800">Fuel Consumption Alert</h4>
                      <p className="text-sm text-blue-700 mt-1">
                        Vehicle FL-003 showing 20% higher fuel consumption than average.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vehicles" className="space-y-6">
          <VehicleManagement />
        </TabsContent>

        <TabsContent value="drivers" className="space-y-6">
          <DriverManagement />
        </TabsContent>

        <TabsContent value="routes" className="space-y-6">
          <RouteManagement />
        </TabsContent>
      </Tabs>
    </div>
  )
}