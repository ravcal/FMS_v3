"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { DashboardOverview } from "@/components/dashboard-overview"
import { VehicleManagement } from "@/components/vehicle-management"
import { DriverManagement } from "@/components/driver-management"
import { UnifiedMaintenance } from "@/components/unified-maintenance"
import { RouteManagement } from "@/components/route-management"
import { FuelManagement } from "@/components/fuel-management"
import { ExpenseManagement } from "@/components/expense-management"
import { Reports } from "@/components/reports"
import { LiveGPSTracking } from "@/components/live-gps-tracking"
import { GPSAlerts } from "@/components/gps-alerts"
import { SAPIntegrationDashboard } from "@/components/sap-integration-dashboard"
import { SAPVehicleSync } from "@/components/sap-vehicle-sync"
import { RouteOptimization } from "@/components/route-optimization"
import { RouteHistory } from "@/components/route-history"
import { RouteAnalytics } from "@/components/route-analytics"
import { ReportBreakdown } from "@/components/report-breakdown"

export function FleetDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview />
      case "vehicles":
        return <VehicleManagement />
      case "drivers":
        return <DriverManagement />
      case "maintenance":
        return <UnifiedMaintenance />
      case "maintenance-breakdown":