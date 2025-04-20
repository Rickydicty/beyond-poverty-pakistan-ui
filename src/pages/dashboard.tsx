
import { Briefcase, Book, ListCheck, Home } from "lucide-react";
import { StarryBackground } from "@/components/starry-background";
import { DashboardCard } from "@/components/dashboard-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="container relative py-8">
      <StarryBackground />
      
      <div className="mb-8">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Welcome Back, User!</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Your journey to prosperity starts here.</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <DashboardCard
          title="Welfare Programs"
          description="Access available welfare and support options"
          icon={Home}
          href="/welfare"
        />
        <DashboardCard
          title="Job Opportunities"
          description="Find and apply for job openings"
          icon={Briefcase}
          href="/jobs"
        />
        <DashboardCard
          title="Training Programs"
          description="Enhance your skills with our courses"
          icon={Book}
          href="/training"
        />
        <DashboardCard
          title="Assistance Tracker"
          description="Monitor your aid and applications"
          icon={ListCheck}
          href="/tracker"
        />
      </div>
    </div>
  );
}
