"use client";

import { LayoutDashboard, Settings2 } from "lucide-react";
import Dashboard from "./Dashboard";
import NavItem from "./NavItem";
import { useRouter } from "next/router";
import Settings from "./Settings";

export function AdminDashboardComponent() {
  const router = useRouter();
  const { section } = router.query;

  const handleNavClick = (section: string) => {
    router.push(`?section=${section}`);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 border-r">
        <nav className="p-4">
          <ul className="space-y-2">
            <NavItem
              onClick={handleNavClick}
              section="dashboard"
              icon={LayoutDashboard}
              label="Dashboard"
            />
            <NavItem
              onClick={handleNavClick}
              section="settings"
              icon={Settings2}
              label="Contract Settings"
            />
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {(!section || section === "dashboard") && <Dashboard />}

        {section === "settings" && <Settings />}
      </div>
    </div>
  );
}
