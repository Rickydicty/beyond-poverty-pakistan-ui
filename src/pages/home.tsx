
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StarryBackground } from "@/components/starry-background";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <StarryBackground />
      <div className="container relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-6 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Empowering Lives,{" "}
          <span className="text-primary">Erasing Poverty</span>
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Join us in building a future where every Pakistani has access to
          opportunities, support, and the means to prosper.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/register">
            <Button size="lg" className="h-11 px-8">
              Enroll for Help
            </Button>
          </Link>
          <Link to="/jobs">
            <Button
              size="lg"
              variant="outline"
              className="h-11 px-8"
            >
              Find Jobs
            </Button>
          </Link>
          <Link to="/training">
            <Button
              size="lg"
              variant="outline"
              className="h-11 px-8"
            >
              Join Training
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
