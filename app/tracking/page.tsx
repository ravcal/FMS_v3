import { LiveGPSTracking } from "@/components/live-gps-tracking";
import { MainLayout } from "@/components/main-layout";
import { ErrorBoundary, GPSErrorFallback } from "@/components/error-boundary";
import { ErrorLogger } from "@/components/error-logger";

export default function TrackingPage() {
  return (
    <MainLayout activeTab="tracking">
      <ErrorLogger>
        <ErrorBoundary fallback={GPSErrorFallback}>
          <LiveGPSTracking />
        </ErrorBoundary>
      </ErrorLogger>
    </MainLayout>
  );
}