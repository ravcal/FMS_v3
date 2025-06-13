import { DashboardOverview } from "@/components/dashboard-overview";
import { MainLayout } from "@/components/main-layout";

export default function Home() {
  return (
    <MainLayout activeTab="dashboard">
      <DashboardOverview />
    </MainLayout>
  );
}