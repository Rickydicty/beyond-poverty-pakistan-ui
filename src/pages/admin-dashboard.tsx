
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Users, FileSpreadsheet, Settings, Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarryBackground } from "@/components/starry-background";
import { DashboardCard } from "@/components/dashboard-card";

export default function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (user.role !== "admin") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="container relative py-8">
      <StarryBackground />
      
      <div className="mb-8">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Admin Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Manage your poverty alleviation system here.</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <DashboardCard
          title="User Management"
          description="Manage user accounts and permissions"
          icon={Users}
          href="/admin/users"
        />
        <DashboardCard
          title="Reports"
          description="View system statistics and reports"
          icon={FileSpreadsheet}
          href="/admin/reports"
        />
        <DashboardCard
          title="System Settings"
          description="Configure system parameters"
          icon={Settings}
          href="/admin/settings"
        />
        <DashboardCard
          title="Notifications"
          description="Manage system notifications"
          icon={Bell}
          href="/admin/notifications"
        />
      </div>
    </div>
  );
}
