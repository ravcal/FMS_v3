"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Check, Loader2, ClipboardCheck, ArrowLeft, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

const inspectionCategories = {
  exterior: [
    { id: "lights", label: "Headlights, Taillights, Turn Signals" },
    { id: "tires", label: "Tire Pressure and Tread Depth" },
    { id: "windshield", label: "Windshield and Wipers" },
    { id: "bodywork", label: "Bodywork, Mirrors, and Glass" },
  ],
  interior: [
    { id: "dashboard", label: "Dashboard Warning Lights" },
    { id: "horn", label: "Horn" },
    { id: "seatbelts", label: "Seatbelts" },
    { id: "brakes", label: "Brake Pedal and Parking Brake" },
  ],
  underTheHood: [
    { id: "engineOil", label: "Engine Oil Level" },
    { id: "coolant", label: "Coolant Level" },
    { id: "brakeFluid", label: "Brake Fluid Level" },
    { id: "battery", label: "Battery and Terminals" },
  ],
  safety: [
    { id: "firstAid", label: "First Aid Kit" },
    { id: "fireExtinguisher", label: "Fire Extinguisher" },
    { id: "emergencyKit", label: "Emergency Triangle/Flares" },
  ],
}

type InspectionStatus = "Pass" | "Fail" | "N/A"
type InspectionResults = Record<string, { status: InspectionStatus; notes: string }>

export function VehicleInspection() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isFailDialogOpen, setIsFailDialogOpen] = useState(false)
  const [results, setResults] = useState<InspectionResults>({})

  const handleStatusChange = (itemId: string, status: InspectionStatus) => {
    setResults((prev) => ({
      ...prev,
      [itemId]: { ...prev[itemId], notes: prev[itemId]?.notes || "", status },
    }))
  }

  const handleNotesChange = (itemId: string, notes: string) => {
    setResults((prev) => ({
      ...prev,
      [itemId]: { ...prev[itemId], status: prev[itemId]?.status || "Pass", notes },
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    toast.loading("Submitting inspection report...")

    const hasFailedItems = Object.values(results).some(
      (item) => item.status === "Fail"
    );

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast.dismiss() // Dismiss loading toast

      if (hasFailedItems) {
        toast.error("Inspection Failed", {
            description: "One or more items did not pass. Please create a breakdown report.",
        });
        setIsFailDialogOpen(true);
      } else {
        toast.success("Inspection Passed", {
          description: "The vehicle inspection was submitted successfully.",
        });
        setTimeout(() => {
          router.push('/maintenance');
        }, 1200);
      }
    }, 1500);
  }

  return (
    <div className="space-y-6">
       <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Vehicle Inspection</h1>
          <p className="text-gray-600 mt-1">Complete the pre-trip or post-trip inspection checklist.</p>
        </div>
        <Link href="/maintenance">
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Maintenance
          </Button>
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Inspection Details</CardTitle>
            <CardDescription>Select the vehicle and complete the checklist below.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="vehicleId">Vehicle</Label>
                    <Select required>
                        <SelectTrigger id="vehicleId">
                        <SelectValue placeholder="Select vehicle" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectItem value="fl-001">FL-001 (Ford Transit)</SelectItem>
                        <SelectItem value="fl-002">FL-002 (Mercedes Sprinter)</SelectItem>
                        <SelectItem value="fl-003">FL-003 (Chevrolet Express)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="driverId">Inspector (Driver)</Label>
                    <Select required>
                        <SelectTrigger id="driverId">
                        <SelectValue placeholder="Select driver" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectItem value="drv-001">John Smith</SelectItem>
                        <SelectItem value="drv-002">Emily Johnson</SelectItem>
                        <SelectItem value="drv-003">Sarah Wilson</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="inspectionType">Inspection Type</Label>
                    <Select required>
                        <SelectTrigger id="inspectionType">
                        <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectItem value="pre-trip">Pre-Trip</SelectItem>
                        <SelectItem value="post-trip">Post-Trip</SelectItem>
                        <SelectItem value="annual">Annual</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <Accordion type="multiple" defaultValue={["exterior", "interior", "underTheHood", "safety"]} className="w-full">
              {Object.entries(inspectionCategories).map(([categoryId, items]) => (
                <AccordionItem value={categoryId} key={categoryId}>
                  <AccordionTrigger className="text-lg font-medium capitalize">
                    {categoryId.replace(/([A-Z])/g, ' $1')}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      {items.map((item) => (
                        <div key={item.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start border-b pb-4 last:border-b-0 last:pb-0">
                          <Label htmlFor={`notes-${item.id}`} className="pt-2">{item.label}</Label>
                          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <RadioGroup
                              defaultValue="Pass"
                              onValueChange={(value: InspectionStatus) => handleStatusChange(item.id, value)}
                              className="flex items-center space-x-4"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Pass" id={`pass-${item.id}`} />
                                <Label htmlFor={`pass-${item.id}`}>Pass</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Fail" id={`fail-${item.id}`} />
                                <Label htmlFor={`fail-${item.id}`}>Fail</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="N/A" id={`na-${item.id}`} />
                                <Label htmlFor={`na-${item.id}`}>N/A</Label>
                              </div>
                            </RadioGroup>
                            <Textarea
                              id={`notes-${item.id}`}
                              placeholder="Add notes..."
                              className="text-sm"
                              rows={1}
                              onChange={(e) => handleNotesChange(item.id, e.target.value)}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
          <CardFooter className="flex justify-end space-x-2">
            <Button type="button" variant="outline" asChild>
              <Link href="/maintenance">Cancel</Link>
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <ClipboardCheck className="mr-2 h-4 w-4" />
                  Submit Report
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>

      <Dialog open={isFailDialogOpen} onOpenChange={setIsFailDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
              Inspection Failed
            </DialogTitle>
            <DialogDescription>
              One or more items failed the inspection. To ensure safety and prompt repair, please proceed to create a breakdown report.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsFailDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              className="bg-red-600 hover:bg-red-700"
              onClick={() => {
                setIsFailDialogOpen(false);
                router.push('/maintenance/report-breakdown');
              }}
            >
              Proceed to Report Breakdown
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}