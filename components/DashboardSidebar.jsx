import Link from "next/link";
import React from "react";
import { BsBagFill, BsGrid } from "react-icons/bs";
export default function DashboardSidebar() {
  const sidebarItems = [
    {
      title: "Dashboard",
      path: "/dashboard/admin",
      icon: BsGrid,
    },
    {
      title: "Categories",
      path: "/dashboard/admin/categories",
      icon: BsGrid,
    },
    {
      title: "Sub Categories",
      path: "/dashboard/admin/sub-categories",
      icon: BsGrid,
    },
    {
      title: "Products",
      path: "/dashboard/admin/products",
      icon: BsGrid,
    },
    {
      title: "Brands",
      path: "/dashboard/admin/brands",
      icon: BsGrid,
    },
  ];
  return (
    <section className=" bg-gray-950 min-h-screen fixed left-0 w-60 py-4 px-8">
      <div className="flex gap-2 mb-4">
        <BsBagFill className="w-6 h-6 text-gray-100" />
        <span className="text-xl text-gray-100">Desishub</span>
      </div>
      <div className="flex gap-2 flex-col">
        {sidebarItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              href={item.path}
              className="flex space-x-2 text-gray-100 items-center"
              key={i}
            >
              <Icon className="" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
