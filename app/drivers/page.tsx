"use client"; // Step 1: Convert to a Client Component

import { useState } from "react"; // Step 2: Import useState
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { DriverManagement } from "@/components/driver-management";

export default function DriversPage() {
  // Step 2: Manage the sidebar's state
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Step 3: Define handler functions
  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Step 4: Pass the state and handlers as props */}
      <Sidebar
        activeTab="drivers"
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={handleMenuClick} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <DriverManagement />
        </main>
      </div>
    </div>
  );
}