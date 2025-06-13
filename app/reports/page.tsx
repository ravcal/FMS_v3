import { Reports } from "@/components/reports";
import { MainLayout } from "@/components/main-layout"; // Import the layout

export default function ReportsPage() {
  return (
    // Use the MainLayout to wrap the page content
    <MainLayout activeTab="reports">
      <Reports />
    </MainLayout>
  );
}