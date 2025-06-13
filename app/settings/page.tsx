import { SettingsPage } from "@/components/settings-page";
import { MainLayout } from "@/components/main-layout";

export default function Settings() {
  return (
    <MainLayout activeTab="settings">
      <SettingsPage />
    </MainLayout>
  );
}