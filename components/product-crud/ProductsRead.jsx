import Link from "next/link";
import React from "react";
import TableHeader from "./TableHeader";
import { AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

import { BsTrash3 } from "react-icons/bs";

export default function ProductsRead() {
  return (
    <div className="flex flex-col">
      <TableHeader
        title="Products"
        linkTitle="Add Products"
        path="/dashboard/admin/products/create"
      />
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-all"
                  type="checkbox"
                  class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-all" class="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" class="p-4">
              Product
            </th>
            <th scope="col" class="p-4">
              Category
            </th>
            <th scope="col" class="p-4">
              Stock
            </th>

            <th scope="col" class="p-4">
              Last Update
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
            <td class="p-4 w-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  onclick="event.stopPropagation()"
                  class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-1" class="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div class="flex items-center mr-3">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                  alt="iMac Front Image"
                  class="h-8 w-auto mr-3"
                />
                Apple iMac 27&#34;
              </div>
            </th>
            <td class="px-4 py-3">
              <span class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                Desktop PC
              </span>
            </td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <div class="flex items-center">
                <div class="h-4 w-4 rounded-full inline-block mr-2 bg-red-700"></div>
                95
              </div>
            </td>
            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <div class="flex items-center space-x-4">
                <Link
                  href="/dashboard/admin/products/edit"
                  type="button"
                  data-drawer-target="drawer-update-product"
                  data-drawer-show="drawer-update-product"
                  aria-controls="drawer-update-product"
                  class="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <FiEdit />
                  Edit
                </Link>
                <Link
                  href="/dashboard/admin/products/read"
                  type="button"
                  data-drawer-target="drawer-read-product-advanced"
                  data-drawer-show="drawer-read-product-advanced"
                  aria-controls="drawer-read-product-advanced"
                  class="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <AiOutlineEye />
                  Preview
                </Link>
                <button
                  type="button"
                  data-modal-target="delete-modal"
                  data-modal-toggle="delete-modal"
                  class="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                >
                  <BsTrash3 />
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
