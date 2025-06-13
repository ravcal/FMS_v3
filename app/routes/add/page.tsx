import { AddRouteForm } from "@/components/add-route-form";
import { MainLayout } from "@/components/main-layout";

export default function AddRoutePage() {
  return (
    <MainLayout activeTab="routes">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Create Route</h2>
          <p className="text-gray-600 mt-2">
            Plan and create a new route for your fleet
          </p>
        </div>
        <AddRouteForm />
      </div>
    </MainLayout>
  );
}