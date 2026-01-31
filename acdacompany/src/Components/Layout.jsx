 
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050B2E] via-[#060F3F] to-[#020617] text-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
