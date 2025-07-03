import { AddAlertRuleForm } from "@/components/add-alert-rule-form";
import { MainLayout } from "@/components/main-layout";

export default function AddAlertRulePage() {
  return (
    <MainLayout activeTab="alerts">
      <AddAlertRuleForm />
    </MainLayout>
  );
}