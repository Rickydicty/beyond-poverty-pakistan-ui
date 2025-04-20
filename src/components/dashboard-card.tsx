
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  className?: string;
}

export function DashboardCard({
  title,
  description,
  icon: Icon,
  href,
  className,
}: DashboardCardProps) {
  return (
    <Link to={href}>
      <Card className={cn(
        "transition-all hover:scale-105 hover:shadow-lg",
        className
      )}>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Icon className="h-8 w-8" />
            <div>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
