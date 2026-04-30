import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="h-screen flex flex-col ">

      {/* GLOBAL NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <div className="flex flex-1 overflow-hidden">
        <Outlet />
      </div>

    </div>
  );
}