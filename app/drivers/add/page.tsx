import { AddDriverForm } from "@/components/add-driver-form";
import { MainLayout } from "@/components/main-layout";

export default function AddDriverPage() {
  return (
    <MainLayout activeTab="drivers">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Add Driver</h2>
          <p className="text-gray-600 mt-2">
            Add a new driver to your fleet
          </p>
        </div>
        <AddDriverForm />
      </div>
    </MainLayout>
  );
}