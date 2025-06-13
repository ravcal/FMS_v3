import { ExpenseManagement } from "@/components/expense-management";
import { MainLayout } from "@/components/main-layout";

export default function ExpensesPage() {
  return (
    <MainLayout activeTab="expenses">
      <ExpenseManagement />
    </MainLayout>
  );
}