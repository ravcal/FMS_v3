import { BreakdownMaintenance } from "@/components/breakdown-maintenance";
import { MainLayout } from "@/components/main-layout"; // 1. Import the reusable layout

export default function BreakdownPage() {
  return (
    // 2. Wrap the page's content in the MainLayout component.
    // We'll set 'maintenance' as the active tab for the sidebar.
    <MainLayout activeTab="maintenance">
      <BreakdownMaintenance />
    </MainLayout>
  );
}