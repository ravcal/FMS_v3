"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FolderSyncIcon as Sync, CheckCircle, AlertTriangle, Clock, Upload, RefreshCw, Eye, Edit } from "lucide-react"

interface InvoiceSyncData {
  invoiceId: string
  sapInvoiceNumber: string
  customer: string
  amount: number
  status: string
  lastSyncDate: string
  syncStatus: "synced" | "pending" | "error" | "conflict"
  conflicts?: string[]
}

export function SAPInvoiceSync() {
  const [invoices, setInvoices] = useState<InvoiceSyncData[]>([
    {
      invoiceId: "INV-001",
      sapInvoiceNumber: "SAP-98765",
      customer: "ABC Corp",
      amount: 1250.75,
      status: "Paid",
      lastSyncDate: "2024-03-15 10:00:00",
      syncStatus: "synced",
    },
    {
      invoiceId: "INV-002",
      sapInvoiceNumber: "",
      customer: "XYZ Logistics",
      amount: 850.00,
      status: "Pending",
      lastSyncDate: "Never",
      syncStatus: "pending",
    },
    {
      invoiceId: "INV-003",
      sapInvoiceNumber: "SAP-98767",
      customer: "DEF Company",
      amount: 2500.00,
      status: "Paid",
      lastSyncDate: "2024-03-14 12:00:00",
      syncStatus: "conflict",
      conflicts: ["Amount mismatch: Fleet shows $2500.00, SAP shows $2450.00"],
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const getSyncStatusColor = (status: string) => {
    switch (status) {
      case "synced":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "error":
        return "bg-red-100 text-red-800"
      case "conflict":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getSyncStatusIcon = (status: string) => {
    switch (status) {
      case "synced":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-600" />
      case "error":
        return <AlertTriangle className="h-4 w-4 text-red-600" />
      case "conflict":
        return <AlertTriangle className="h-4 w-4 text-orange-600" />
      default:
        return <Sync className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Invoice SAP Synchronization</h2>
          <p className="text-gray-600 mt-2">Manage invoice data synchronization with SAP ERP</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" disabled={isLoading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
            Sync All
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Upload className="h-4 w-4 mr-2" />
            Generate Invoices
          </Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Invoice Synchronization Status</CardTitle>
          <CardDescription>Current sync status for all customer invoices</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice ID</TableHead>
                <TableHead>SAP Invoice</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Sync Status</TableHead>
                <TableHead>Last Sync</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoiceId}>
                  <TableCell className="font-medium">{invoice.invoiceId}</TableCell>
                  <TableCell>{invoice.sapInvoiceNumber || "Not Synced"}</TableCell>
                  <TableCell>{invoice.customer}</TableCell>
                  <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{invoice.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {getSyncStatusIcon(invoice.syncStatus)}
                      <Badge className={getSyncStatusColor(invoice.syncStatus)}>{invoice.syncStatus}</Badge>
                    </div>
                  </TableCell>
                  <TableCell>{invoice.lastSyncDate}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" disabled={isLoading}>
                        <Sync className="h-3 w-3 mr-1" />
                        Sync
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Eye className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}