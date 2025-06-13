import { ReportBreakdown } from "@/components/report-breakdown";
import { MainLayout } from "@/components/main-layout"; // 1. Import the reusable layout

export default function ReportBreakdownPage() {
  return (
    // 2. Wrap the page's content in the MainLayout component
    <MainLayout activeTab="maintenance-breakdown">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Report Breakdown</h2>
          <p className="text-gray-600 mt-2">
            Report a vehicle breakdown or emergency maintenance need
          </p>
        </div>
        <ReportBreakdown />
      </div>
    </MainLayout>
  );
}
