
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { mockLogin } from "@/utils/mockAuth";

interface AuthFormProps {
  type: "login" | "register";
}

export function AuthForm({ type }: AuthFormProps) {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (type === "login") {
      const user = mockLogin(username, password);
      
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        toast({
          title: "Login successful!",
          description: `Welcome back, ${user.username}!`,
        });
        navigate(user.role === "admin" ? "/admin-dashboard" : "/dashboard");
      } else {
        toast({
          title: "Login failed",
          description: "Invalid credentials. Try admin/admin or user/user",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Registration not available",
        description: "Please use the test accounts: admin/admin or user/user",
      });
      navigate("/login");
    }
    
    setLoading(false);
  };

  return (
    <Card className="w-[350px] glass-card">
      <CardHeader>
        <CardTitle>{type === "login" ? "Login" : "Create Account"}</CardTitle>
        <CardDescription>
          {type === "login"
            ? "Use admin/admin for admin or user/user for regular user"
            : "Registration is disabled, use test accounts"}
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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
