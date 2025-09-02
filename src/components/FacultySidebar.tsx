import {
  BookOpen,
  ClipboardList,
  FileText,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Users
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

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
      ? "bg-blue-50 text-blue-600 font-medium rounded-lg"
      : "text-gray-600 hover:bg-gray-100 rounded-lg";

  return (
    <Sidebar className="w-64">
      <SidebarContent className="bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Faculty Portal</h2>
              <p className="text-sm text-gray-500">Academic Management</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase font-semibold tracking-wide text-gray-500 px-6">
            Main Menu
          </SidebarGroupLabel>

          <SidebarGroupContent className="px-3 mt-2">
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 text-sm transition-colors ${getNavClassName({ isActive })}`
                      }
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* User Section */}
        <div className="mt-auto p-6 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-medium">DR</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Dr. Sarah Chen</p>
              <p className="text-xs text-gray-500">Computer Science</p>
            </div>
          </div>
          
          <button className="mt-4 w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors">
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
