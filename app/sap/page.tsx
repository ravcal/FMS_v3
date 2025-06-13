import { SAPIntegrationDashboard } from "@/components/sap-integration-dashboard";
import { MainLayout } from "@/components/main-layout"; // Import the main layout

export default function SAPIntegrationPage() {
  return (
    // Wrap the component in the MainLayout
    <MainLayout activeTab="sap">
      <SAPIntegrationDashboard />
    </MainLayout>
  );
}