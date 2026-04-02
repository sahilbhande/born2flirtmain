import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

const App = () => {
  const routing = useRoutes(routes);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />

          <Navbar />

          {/* ✅ Prevent blank screen if routes fail */}
          {routing || <div className="p-10 text-center">Loading...</div>}

          <Footer />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;