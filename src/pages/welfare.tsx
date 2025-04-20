
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { StarryBackground } from "@/components/starry-background";

const welfarePrograms = [
  {
    title: "Cash Grants",
    description: "Monthly financial assistance for basic needs",
    amount: "PKR 8,000/month",
    eligibility: "Low-income families",
  },
  {
    title: "Food Assistance",
    description: "Monthly ration package for essential nutrition",
    amount: "Monthly package",
    eligibility: "Families below poverty line",
  },
  {
    title: "Healthcare Support",
    description: "Free medical care and health insurance",
    amount: "Full coverage",
    eligibility: "All registered members",
  },
];

export default function Welfare() {
  return (
    <div className="container relative py-8">
      <StarryBackground />
      <h1 className="mb-8 text-3xl font-bold">Available Welfare Programs</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {welfarePrograms.map((program) => (
          <Card key={program.title} className="glass-card">
            <CardHeader>
              <CardTitle>{program.title}</CardTitle>
              <CardDescription>{program.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Amount:</strong> {program.amount}</p>
                <p><strong>Eligibility:</strong> {program.eligibility}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Apply Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
