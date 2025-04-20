
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { StarryBackground } from "@/components/starry-background";

const jobListings = [
  {
    title: "Web Developer",
    company: "Tech Solutions Ltd",
    location: "Islamabad",
    type: "Full-time",
    salary: "PKR 80,000 - 120,000",
  },
  {
    title: "Customer Service Rep",
    company: "Service Hub",
    location: "Lahore",
    type: "Part-time",
    salary: "PKR 35,000 - 45,000",
  },
  {
    title: "Sales Executive",
    company: "Growth Corp",
    location: "Karachi",
    type: "Full-time",
    salary: "PKR 50,000 - 70,000",
  },
];

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobListings.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container relative py-8">
      <StarryBackground />
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold">Job Opportunities</h1>
        <Input
          placeholder="Search jobs by title, company, or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((job) => (
          <Card key={job.title} className="glass-card">
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
              <CardDescription>{job.company}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Type:</strong> {job.type}</p>
                <p><strong>Salary:</strong> {job.salary}</p>
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
