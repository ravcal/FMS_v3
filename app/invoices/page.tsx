import { InvoiceManagement } from "@/components/invoice-management";
import { MainLayout } from "@/components/main-layout";

export default function InvoicesPage() {
  return (
    <MainLayout activeTab="invoices">
      <InvoiceManagement />
    </MainLayout>
  );
}