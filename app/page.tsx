import { DashboardOverview } from "@/components/dashboard-overview";
import { MainLayout } from "@/components/main-layout"; // 1. Import the reusable layout

export default function Home() {
  return (
    // 2. Wrap the page's content in the MainLayout component
    <MainLayout activeTab="dashboard">
      <DashboardOverview />
    </MainLayout>
  );
}