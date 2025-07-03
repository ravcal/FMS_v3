import { AddFuelTransaction } from "@/components/add-fuel-transaction";
import { MainLayout } from "@/components/main-layout";

export default function AddFuelPage() {
  return (
    <MainLayout activeTab="fuel">
      <AddFuelTransaction />
    </MainLayout>
  );
}