import { RouteManagement } from "@/components/route-management";
import { MainLayout } from "@/components/main-layout"; // 1. Import the reusable layout

export default function RoutesPage() {
  return (
    // 2. Wrap your page's content in the MainLayout component
    <MainLayout activeTab="routes">
      <RouteManagement />
    </MainLayout>
  );
}