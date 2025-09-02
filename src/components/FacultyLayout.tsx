import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, Search, User, LogOut } from "lucide-react";
import { FacultySidebar } from "./FacultySidebar";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface FacultyLayoutProps {
  children: React.ReactNode;
}

export function FacultyLayout({ children }: FacultyLayoutProps) {
  const { logout, userEmail } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out successfully",
      description: "You have been signed out of the faculty portal",
    });
    navigate("/login");
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <FacultySidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 border-b bg-white flex items-center justify-between px-6 shadow-sm">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search students, courses..."
                    className="pl-9 w-80 border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{userEmail}</span>
              </div>
              <Button variant="ghost" size="icon" className="hover:bg-blue-50">
                <Bell className="w-5 h-5 text-blue-600" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-blue-50">
                <User className="w-5 h-5 text-blue-600" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-red-50"
                onClick={handleLogout}
                title="Logout"
              >
                <LogOut className="w-5 h-5 text-red-600" />
              </Button>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6 bg-gray-50">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
