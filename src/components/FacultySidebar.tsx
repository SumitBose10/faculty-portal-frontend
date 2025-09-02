import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  ClipboardList, 
  BookOpen, 
  FileText,
  GraduationCap,
  LogOut 
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Attendance", url: "/attendance", icon: ClipboardList },
  { title: "Exam Marks", url: "/marks", icon: GraduationCap },
  { title: "Course Notes", url: "/notes", icon: BookOpen },
  { title: "Students", url: "/students", icon: Users },
  { title: "Reports", url: "/reports", icon: FileText },
];

export function FacultySidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  const getNavClassName = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-sidebar-accent text-sidebar-primary font-medium" 
      : "hover:bg-sidebar-accent/50 text-sidebar-foreground";

  return (
    <Sidebar className="w-64">
      <SidebarContent className="bg-sidebar border-r border-sidebar-border">
        {/* Header */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-sidebar-foreground">Faculty Portal</h2>
              <p className="text-sm text-sidebar-foreground/60">Academic Management</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/80 px-6">
            Main Menu
          </SidebarGroupLabel>

          <SidebarGroupContent className="px-3">
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavClassName}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="ml-3">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* User Section */}
        <div className="mt-auto p-6 border-t border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white font-medium">DR</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-sidebar-foreground">Dr. Sarah Chen</p>
              <p className="text-xs text-sidebar-foreground/60">Computer Science</p>
            </div>
          </div>
          
          <button className="mt-4 w-full flex items-center gap-2 px-3 py-2 text-sm text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent/50 rounded-lg transition-colors">
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}