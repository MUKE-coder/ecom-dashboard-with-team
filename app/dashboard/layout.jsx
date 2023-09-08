import DashboardNavbar from "@/components/DashboardNavbar";
import DashboardSidebar from "@/components/DashboardSidebar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex ">
      <DashboardSidebar />
      <div className="flex flex-col w-full ml-60">
        <DashboardNavbar />
        <section className="bg-gray-900 min-h-screen mt-14 py-8 px-16">
          {children}
        </section>
      </div>
    </div>
  );
}
