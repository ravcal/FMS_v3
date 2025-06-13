import { AddMaintenanceForm } from "@/components/add-maintenance-form";
import { MainLayout } from "@/components/main-layout"; // 1. Import the reusable layout

export default function AddMaintenancePage() {
  return (
    // 2. Wrap the page's content with MainLayout
    <MainLayout activeTab="maintenance">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Schedule Maintenance
          </h2>
          <p className="text-gray-600 mt-2">
            Schedule maintenance for a vehicle in your fleet
          </p>
        </div>
        <AddMaintenanceForm />
      </div>
    </MainLayout>
  );
}