
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { StarryBackground } from "@/components/starry-background";

const trainingCourses = [
  {
    title: "Digital Skills Fundamentals",
    description: "Learn basic computer and internet skills",
    duration: "6 weeks",
    enrolled: 245,
    maxCapacity: 300,
  },
  {
    title: "English Language Course",
    description: "Improve your English speaking and writing",
    duration: "12 weeks",
    enrolled: 180,
    maxCapacity: 200,
  },
  {
    title: "Vocational Training",
    description: "Hands-on training in various trades",
    duration: "16 weeks",
    enrolled: 75,
    maxCapacity: 100,
  },
];

export default function Training() {
  return (
    <div className="container relative py-8">
      <StarryBackground />
      <h1 className="mb-8 text-3xl font-bold">Training Programs</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {trainingCourses.map((course) => (
          <Card key={course.title} className="glass-card">
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p><strong>Duration:</strong> {course.duration}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Enrollment</span>
                    <span>{course.enrolled}/{course.maxCapacity}</span>
                  </div>
                  <Progress value={(course.enrolled / course.maxCapacity) * 100} />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                disabled={course.enrolled >= course.maxCapacity}
              >
                {course.enrolled >= course.maxCapacity ? "Full" : "Register Now"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
