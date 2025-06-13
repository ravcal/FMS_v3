import { SAPVehicleSync } from "@/components/sap-vehicle-sync";
import { MainLayout } from "@/components/main-layout"; // Import the main layout

export default function SAPVehicleSyncPage() {
  return (
    // Wrap the component in the MainLayout
    <MainLayout activeTab="sap-vehicles">
      <SAPVehicleSync />
    </MainLayout>
  );
}