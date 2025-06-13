import { LiveGPSTracking } from "@/components/live-gps-tracking";
import { MainLayout } from "@/components/main-layout"; // Import the layout
import { ErrorBoundary, GPSErrorFallback } from "@/components/error-boundary";
import { ErrorLogger } from "@/components/error-logger";

export default function TrackingPage() {
  return (
    // Use the MainLayout to provide the structure
    <MainLayout activeTab="tracking">
      {/* Keep the error handling specific to the tracking component */}
      <ErrorLogger>
        <ErrorBoundary fallback={GPSErrorFallback}>
          <LiveGPSTracking />
        </ErrorBoundary>
      </ErrorLogger>
    </MainLayout>
  );
}