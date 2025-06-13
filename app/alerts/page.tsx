import { GPSAlerts } from "@/components/gps-alerts";
import { MainLayout } from "@/components/main-layout";
import { ErrorBoundary } from "@/components/error-boundary";
import { ErrorLogger } from "@/components/error-logger";

export default function AlertsPage() {
  return (
    // Use the MainLayout to provide the consistent page structure
    <MainLayout activeTab="alerts">
      {/* The ErrorBoundary and ErrorLogger can wrap the specific
          component for this page's content. */}
      <ErrorLogger>
        <ErrorBoundary>
          <GPSAlerts />
        </ErrorBoundary>
      </ErrorLogger>
    </MainLayout>
  );
}