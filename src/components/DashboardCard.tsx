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
}

export function DashboardCard({ 
  title, 
  description, 
  value, 
  icon: Icon, 
  trend, 
  className 
}: DashboardCardProps) {
  return (
    <Card className={cn(
      "relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white border rounded-2xl",
      className
    )}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardDescription className="text-sm font-medium text-gray-500">
            {title}
          </CardDescription>
          <div className="p-2 rounded-lg bg-blue-100">
            <Icon className="w-4 h-4 text-blue-600" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          <CardTitle className="text-2xl font-bold text-gray-900">
            {value}
          </CardTitle>
          {description && (
            <p className="text-sm text-gray-500">
              {description}
            </p>
          )}
          {trend && (
            <div className="flex items-center gap-1 text-sm">
              <span className={cn(
                "font-medium",
                trend.isPositive ? "text-green-600" : "text-red-600"
              )}>
                {trend.isPositive ? "+" : ""}{trend.value}
              </span>
              <span className="text-gray-500">
                from last semester
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
