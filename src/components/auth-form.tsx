
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface AuthFormProps {
  type: "login" | "register";
}

export function AuthForm({ type }: AuthFormProps) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      if (type === "register") {
        toast({
          title: "Account created successfully!",
          description: "Please login with your credentials.",
        });
        navigate("/login");
      } else {
        navigate("/dashboard");
      }
    }, 1500);
  };

  return (
    <Card className="w-[350px] glass-card">
      <CardHeader>
        <CardTitle>{type === "login" ? "Login" : "Create Account"}</CardTitle>
        <CardDescription>
          {type === "login"
            ? "Enter your credentials to access your account"
            : "Enter your details to create your account"}
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {type === "register" && (
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" type="text" required />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit" disabled={loading}>
            {loading ? "Please wait..." : type === "login" ? "Login" : "Create Account"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
