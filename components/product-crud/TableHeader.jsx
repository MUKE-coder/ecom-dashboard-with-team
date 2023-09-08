import Link from "next/link";
import React from "react";

export default function TableHeader({ title, path, linkTitle }) {
  return (
    <div className="flex justify-between py-4 px-8 bg-gray-50 mb-4 items-center rounded-lg">
      <h2>{title}</h2>
      <Link
        href={path}
        className="py-2 px-8 bg-blue-800 text-gray-100 rounded-md"
      >
        {linkTitle}
      </Link>
    </div>
  );
}
