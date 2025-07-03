"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Plus, Save, Trash2 } from "lucide-react"
import Link from "next/link"

export function AddAlertRuleForm() {
  const [ruleName, setRuleName] = useState("")
  const [ruleType, setRuleType] = useState("")
  const [vehicles, setVehicles] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ ruleName, ruleType, vehicles })
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Create Alert Rule</h1>
        <Link href="/alerts">
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Alerts
          </Button>
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Rule Details</CardTitle>
            <CardDescription>Configure the settings for the new alert rule.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="ruleName">Rule Name</Label>
              <Input
                id="ruleName"
                placeholder="e.g., High-Speed Alert for City Zone"
                value={ruleName}
                onChange={(e) => setRuleName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ruleType">Rule Type</Label>
              <Select value={ruleType} onValueChange={setRuleType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select rule type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="speed">Speeding</SelectItem>
                  <SelectItem value="geofence">Geofence</SelectItem>
                  <SelectItem value="idle">Idling</SelectItem>
                  <SelectItem value="fuel">Fuel Level</SelectItem>
                  <SelectItem value="maintenance">Maintenance Due</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {ruleType === "speed" && (
              <div className="space-y-2">
                <Label htmlFor="maxSpeed">Max Speed (mph)</Label>
                <Input id="maxSpeed" type="number" placeholder="e.g., 60" />
              </div>
            )}

            <div className="space-y-4">
              <Label>Assign to Vehicles</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="all-vehicles" />
                  <Label htmlFor="all-vehicles">All Vehicles</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="vehicle-1" />
                  <Label htmlFor="vehicle-1">FL-001</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="vehicle-2" />
                  <Label htmlFor="vehicle-2">FL-002</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="vehicle-3" />
                  <Label htmlFor="vehicle-3">FL-003</Label>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit">
              <Save className="h-4 w-4 mr-2" />
              Save Rule
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}