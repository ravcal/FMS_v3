import { RouteAnalytics } from "@/components/route-analytics";
import { MainLayout } from "@/components/main-layout";

export default function RouteAnalyticsPage() {
  return (
    <MainLayout activeTab="routes-analytics">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Route Analytics</h2>
          <p className="text-gray-600 mt-2">
            Detailed performance analytics and insights
          </p>
        </div>
        <RouteAnalytics />
      </div>
    </MainLayout>
  );
}