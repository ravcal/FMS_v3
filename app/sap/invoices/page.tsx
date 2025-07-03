import { SAPInvoiceSync } from "@/components/sap-invoice-sync";
import { MainLayout } from "@/components/main-layout";

export default function SAPInvoiceSyncPage() {
  return (
    <MainLayout activeTab="sap-invoices">
      <SAPInvoiceSync />
    </MainLayout>
  );
}