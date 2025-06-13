import { AddExpenseForm } from "@/components/add-expense-form";
import { MainLayout } from "@/components/main-layout";

export default function AddExpensePage() {
  return (
    <MainLayout activeTab="expenses">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Add New Expense</h1>
          <p className="text-gray-600">Record a new fleet expense</p>
        </div>
        <AddExpenseForm />
      </div>
    </MainLayout>
  );
}