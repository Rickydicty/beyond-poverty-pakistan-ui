
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { StarryBackground } from "@/components/starry-background";

export default function Tracker() {
  const assistance = [
    {
      title: "Cash Grants",
      received: "PKR 24,000",
      total: "PKR 32,000",
      progress: 75,
    },
    {
      title: "Job Applications",
      submitted: 4,
      inProgress: 2,
      accepted: 1,
      progress: 60,
    },
    {
      title: "Training Progress",
      completed: 2,
      total: 3,
      progress: 66,
    },
  ];

  return (
    <div className="container relative py-8">
      <StarryBackground />
      <h1 className="mb-8 text-3xl font-bold">Assistance Tracker</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {assistance.map((item) => (
          <Card key={item.title} className="glass-card">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>Track your progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {item.received && (
                  <p>
                    <strong>Received:</strong> {item.received} of {item.total}
                  </p>
                )}
                {item.submitted && (
                  <div className="space-y-2">
                    <p><strong>Applications:</strong></p>
                    <ul className="list-inside list-disc space-y-1">
                      <li>Submitted: {item.submitted}</li>
                      <li>In Progress: {item.inProgress}</li>
                      <li>Accepted: {item.accepted}</li>
                    </ul>
                  </div>
                )}
                {item.completed && (
                  <p>
                    <strong>Completed:</strong> {item.completed} of {item.total} courses
                  </p>
                )}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Overall Progress</span>
                    <span>{item.progress}%</span>
                  </div>
                  <Progress value={item.progress} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
