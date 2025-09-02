import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FacultyLayout } from "./components/FacultyLayout";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import ExamMarks from "./pages/ExamMarks";
import CourseNotes from "./pages/CourseNotes";
import Students from "./pages/Students";
import Reports from "./pages/Reports";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <FacultyLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/marks" element={<ExamMarks />} />
            <Route path="/notes" element={<CourseNotes />} />
            <Route path="/students" element={<Students />} />
            <Route path="/reports" element={<Reports />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </FacultyLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
