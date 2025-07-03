import { AddInvoiceForm } from "@/components/add-invoice-form";
import { MainLayout } from "@/components/main-layout";

export default function AddInvoicePage() {
  return (
    <MainLayout activeTab="invoices">
      <AddInvoiceForm />
    </MainLayout>
  );
}