import { RouteHistory } from "@/components/route-history";
import { MainLayout } from "@/components/main-layout";

export default function RouteHistoryPage() {
  return (
    <MainLayout activeTab="routes-history">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Route History</h2>
          <p className="text-gray-600 mt-2">
            View completed routes and performance analytics
          </p>
        </div>
        <RouteHistory />
      </div>
    </MainLayout>
  );
}