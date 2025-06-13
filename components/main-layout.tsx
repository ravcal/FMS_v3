"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

// Define the props for the layout, including the active tab and the page content
interface MainLayoutProps {
  children: React.ReactNode;
  activeTab: string;
}

export function MainLayout({ children, activeTab }: MainLayoutProps) {
  // State for the sidebar is managed here
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

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
