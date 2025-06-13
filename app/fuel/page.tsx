import { FuelManagement } from "@/components/fuel-management";
import { MainLayout } from "@/components/main-layout";

export default function FuelPage() {
  return (
    <MainLayout activeTab="fuel">
      <FuelManagement />
    </MainLayout>
  );
}