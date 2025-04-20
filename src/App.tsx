
import { lazy, Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { StarryBackground } from "./components/starry-background";
import { Chatbot } from "./components/chatbot";
import Home from "./pages/home";
import NotFound from "./pages/NotFound";

const Login = lazy(() => import("./pages/login"));
const Register = lazy(() => import("./pages/register"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Welfare = lazy(() => import("./pages/welfare"));
const Jobs = lazy(() => import("./pages/jobs"));
const Training = lazy(() => import("./pages/training"));
const Tracker = lazy(() => import("./pages/tracker"));

const queryClient = new QueryClient();

const App = () => (
  <div className="relative">
    <StarryBackground />
    <ThemeProvider defaultTheme="dark" attribute="class">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div className="relative min-h-screen">
            <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/welfare" element={<Welfare />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/training" element={<Training />} />
                <Route path="/tracker" element={<Tracker />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <Footer />
          </div>
          <Toaster />
          <Sonner />
          <Chatbot />
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  </div>
);

export default App;
