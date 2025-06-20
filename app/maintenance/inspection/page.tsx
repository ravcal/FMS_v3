import { VehicleInspection } from "@/components/vehicle-inspection";
import { MainLayout } from "@/components/main-layout";

export default function InspectionPage() {
  return (
    <MainLayout activeTab="maintenance-inspection">
      <VehicleInspection />
    </MainLayout>
  );
}