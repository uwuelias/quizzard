import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AuthenticationPage from "./pages/AuthenticationPage";
import DashboardPage from "./pages/DashboardPage";
import Footer from "./components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen text-primary overscroll-contain">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/authentication" element={<AuthenticationPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
