import { RouteOptimization } from "@/components/route-optimization";
import { MainLayout } from "@/components/main-layout";

export default function RouteOptimizationPage() {
  return (
    <MainLayout activeTab="routes-optimize">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Route Optimization
          </h2>
          <p className="text-gray-600 mt-2">
            Optimize existing routes for better efficiency
          </p>
        </div>
        <RouteOptimization />
      </div>
    </MainLayout>
  );
}