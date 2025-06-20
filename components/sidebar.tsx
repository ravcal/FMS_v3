"use client"

import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Truck,
  Users,
  Wrench,
  Route,
  FileText,
  Settings,
  MapPin,
  Fuel,
  Database,
  BarChart3,
  History,
  AlertTriangle,
  Navigation,
  DollarSign,
  X,
  ClipboardCheck, // 1. Import the new icon
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

interface SidebarProps {
  activeTab: string;
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { id: "vehicles", label: "Vehicles", icon: Truck, path: "/vehicles" },
  { id: "drivers", label: "Drivers", icon: Users, path: "/drivers" },
  { id: "maintenance", label: "Maintenance", icon: Wrench, path: "/maintenance" },
  // 2. Add the new menu item for Inspection
  {
    id: "maintenance-inspection",
    label: "Vehicle Inspection",
    icon: ClipboardCheck,
    path: "/maintenance/inspection",
  },
  {
    id: "maintenance-breakdown",
    label: "Report Breakdown",
    icon: AlertTriangle,
    path: "/maintenance/report-breakdown",
  },
  { id: "routes", label: "Routes", icon: Route, path: "/routes" },
  { id: "routes-optimize", label: "Optimize Routes", icon: Navigation, path: "/routes/optimize" },
  { id: "routes-history", label: "Route History", icon: History, path: "/routes/history" },
  { id: "routes-analytics", label: "Route Analytics", icon: BarChart3, path: "/routes/analytics" },
  { id: "tracking", label: "Live GPS Tracking", icon: MapPin, path: "/tracking" },
  { id: "alerts", label: "GPS Alerts", icon: AlertTriangle, path: "/alerts" },
  { id: "fuel", label: "Fuel Management", icon: Fuel, path: "/fuel" },
  { id: "expenses", label: "Expenses", icon: DollarSign, path: "/expenses" },
  { id: "sap", label: "SAP Integration", icon: Database, path: "/sap" },
  { id: "sap-vehicles", label: "SAP Vehicle Sync", icon: Database, path: "/sap/vehicles" },
  { id: "reports", label: "Reports", icon: FileText, path: "/reports" },
]

export function Sidebar({ activeTab, isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()

  const isPathActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname?.startsWith(path) || false
  }

  // --- 1. This function handles the click and calls onClose ---
  const handleLinkClick = () => {
    // Close sidebar on mobile when a link is clicked
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      onClose();
    }
  }

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (typeof window === "undefined") return

      const sidebar = document.getElementById("mobile-sidebar")
      const target = event.target as Node

      if (isOpen && sidebar && !sidebar.contains(target) && window.innerWidth < 768) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      // Prevent body scroll when sidebar is open on mobile
      if (typeof window !== "undefined" && window.innerWidth < 768) {
        document.body.style.overflow = "hidden"
      }
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      if (typeof document !== "undefined") {
        document.body.style.overflow = "unset"
      }
    }
  }, [isOpen, onClose])

  // Close sidebar on route change (for browser back/forward buttons)
  useEffect(() => {
    if (isOpen && typeof window !== 'undefined' && window.innerWidth < 768) {
      onClose();
    }
  }, [pathname, isOpen, onClose]);


  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={onClose} aria-hidden="true" />
      )}

      {/* Sidebar */}
      <div
        id="mobile-sidebar"
        className={cn(
          "bg-white shadow-lg h-full flex flex-col transition-transform duration-300 ease-in-out z-50",
          "md:relative md:translate-x-0 md:w-64",
          "fixed top-0 left-0 w-80 max-w-[85vw]",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Header */}
        <div className="p-6 border-b flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
            <Truck className="h-8 w-8 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-800">My Cassandra</h1>
          </Link>

          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <div className="px-2 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = isPathActive(item.path)

              return (
                <Link
                  key={item.id}
                  href={item.path}
                  // --- 2. The onClick handler is added to each link ---
                  onClick={handleLinkClick}
                  className={cn(
                    "w-full flex items-center px-3 py-3 rounded-md text-sm font-medium transition-colors",
                    "md:py-2",
                    isActive
                      ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600"
                      : "text-gray-700 hover:bg-gray-100 active:bg-gray-200",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span className="truncate">{item.label}</span>
                </Link>
              )
            })}
          </div>
        </nav>

        {/* Settings */}
        <div className="border-t p-4">
          <Link
            href="/settings"
            onClick={handleLinkClick}
            className="flex items-center px-3 py-3 md:py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition-colors"
          >
            <Settings className="h-5 w-5 mr-3" />
            Settings
          </Link>
        </div>
      </div>
    </>
  )
}