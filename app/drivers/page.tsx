import { DriverManagement } from "@/components/driver-management";
import { MainLayout } from "@/components/main-layout";

export default function DriversPage() {
  return (
    <MainLayout activeTab="drivers">
      <DriverManagement />
    </MainLayout>
  );
}