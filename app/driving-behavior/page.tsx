import { DrivingBehavior } from "@/components/driving-behavior";
import { MainLayout } from "@/components/main-layout";

export default function DrivingBehaviorPage() {
  return (
    <MainLayout activeTab="driving-behavior">
      <DrivingBehavior />
    </MainLayout>
  );
}