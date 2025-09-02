import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  description?: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  className?: string;
  gradient?: boolean;
}

export function DashboardCard({ 
  title, 
  description, 
  value, 
  icon: Icon, 
  trend, 
  className,
  gradient = false 
}: DashboardCardProps) {
  return (
    <Card className={cn(
      "relative overflow-hidden shadow-card hover:shadow-primary transition-all duration-300",
      gradient && "bg-gradient-primary text-white border-0",
      className
    )}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardDescription className={cn(
            "text-sm font-medium",
            gradient ? "text-white/80" : "text-muted-foreground"
          )}>
            {title}
          </CardDescription>
          <div className={cn(
            "p-2 rounded-lg",
            gradient ? "bg-white/20" : "bg-primary-muted"
          )}>
            <Icon className={cn(
              "w-4 h-4",
              gradient ? "text-white" : "text-primary"
            )} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          <CardTitle className={cn(
            "text-2xl font-bold",
            gradient ? "text-white" : "text-foreground"
          )}>
            {value}
          </CardTitle>
          {description && (
            <p className={cn(
              "text-sm",
              gradient ? "text-white/70" : "text-muted-foreground"
            )}>
              {description}
            </p>
          )}
          {trend && (
            <div className="flex items-center gap-1 text-sm">
              <span className={cn(
                "font-medium",
                trend.isPositive 
                  ? gradient ? "text-white" : "text-success"
                  : gradient ? "text-white/80" : "text-destructive"
              )}>
                {trend.isPositive ? "+" : ""}{trend.value}
              </span>
              <span className={cn(
                gradient ? "text-white/70" : "text-muted-foreground"
              )}>
                from last semester
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}