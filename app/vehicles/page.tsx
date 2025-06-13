import { VehicleManagement } from "@/components/vehicle-management";
import { MainLayout } from "@/components/main-layout";

export default function VehiclesPage() {
  return (
    <MainLayout activeTab="vehicles">
      <VehicleManagement />
    </MainLayout>
  );
}