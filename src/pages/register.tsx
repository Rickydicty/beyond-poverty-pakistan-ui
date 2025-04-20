
import { Link } from "react-router-dom";
import { AuthForm } from "@/components/auth-form";
import { Button } from "@/components/ui/button";
import { StarryBackground } from "@/components/starry-background";

export default function Register() {
  return (
    <div className="container relative min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center">
      <StarryBackground />
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <AuthForm type="register" />
        <p className="px-8 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login">
            <Button variant="link" className="px-0">Login</Button>
          </Link>
        </p>
      </div>
    </div>
  );
}
