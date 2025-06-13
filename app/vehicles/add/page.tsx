"use client"; // Make this a Client Component

import { useState } from "react"; // Import useState for managing state
import { AddVehicleForm } from "@/components/add-vehicle-form";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export default function AddVehiclePage() {
  // State to manage if the sidebar is open on mobile
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to open the sidebar
  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  // Function to close the sidebar
  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Pass the required state and handlers to the child components.
        The problematic 'setActiveTab' prop is removed.
      */}
      <Sidebar
        activeTab="vehicles"
        isOpen={sidebarOpen}
        onClose={handleCloseSidebar}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={handleMenuClick} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Add Vehicle</h2>
              <p className="text-gray-600 mt-2">
                Add a new vehicle to your fleet
              </p>
            </div>
            <AddVehicleForm />
          </div>
        </main>
      </div>
    </div>
  );
}