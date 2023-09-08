import Image from "next/image";
import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { MdOutlineNotificationsNone } from "react-icons/md";
export default function DashboardNavbar() {
  return (
    <div className="flex items-center justify-between bg-gray-900 fixed top-0 h-14 px-16 right-0 left-60">
      <button>
        {" "}
        <BiMenuAltLeft className="h-6 w-6 text-gray-100" />
      </button>
      <nav className="flex items-center gap-4">
        <button>
          {" "}
          <BsSun className="h-6 w-6 text-gray-100 " />
        </button>
        <button>
          {" "}
          <MdOutlineNotificationsNone className="h-6 w-6 text-gray-100" />
        </button>
        <button>
          {" "}
          <Image
            src="/images/profile.JPG"
            width={50}
            height={50}
            className="rounded-full"
            alt="profile"
          />
        </button>
      </nav>
    </div>
  );
}
