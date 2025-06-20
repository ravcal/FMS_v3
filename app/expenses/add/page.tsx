import { AddExpenseForm } from "@/components/add-expense-form";
import { MainLayout } from "@/components/main-layout";

export default function AddExpensePage() {
  return (
    <MainLayout activeTab="expenses">
      <AddExpenseForm />
    </MainLayout>
  );
}