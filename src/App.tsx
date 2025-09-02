import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FacultyLayout } from "./components/FacultyLayout";
import Attendance from "./pages/Attendance";
import CourseNotes from "./pages/CourseNotes";
import Dashboard from "./pages/Dashboard";
import ExamMarks from "./pages/ExamMarks";
import NotFound from "./pages/NotFound";
import Reports from "./pages/Reports";
import Students from "./pages/Students";

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
