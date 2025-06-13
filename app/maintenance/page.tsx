import { UnifiedMaintenance } from "@/components/unified-maintenance";
import { MainLayout } from "@/components/main-layout"; // Import the layout

export default function MaintenancePage() {
  return (
    // Use the MainLayout to wrap the page content
    <MainLayout activeTab="maintenance">
      <UnifiedMaintenance />
    </MainLayout>
  );
}