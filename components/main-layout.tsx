"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

// Define the props for the layout
interface MainLayoutProps {
  children: React.ReactNode;
  activeTab: string;
}

export function MainLayout({ children, activeTab }: MainLayoutProps) {
  // State to manage if the sidebar is open or closed
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function passed to the Header to open the sidebar
  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  // Function passed to the Sidebar to close it
  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        activeTab={activeTab}
        isOpen={sidebarOpen}
        onClose={handleCloseSidebar}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={handleMenuClick} />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}