import React from "react";
import { FaSearch } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className="bg-gray-800 border-b-3 border-gray-400 text-[#919191]">
      <div className="container mx-auto px-4 flex">
        <div className="flex items-center gap-5 py-3 w-full">
          <img src="https://www.yts-official.top/static/yts/image/logo-YTS.svg" />
          <h1 className="text-lg font-bold">
            HD Movies at the smallest file size.
          </h1>
        </div>
        <div className="w-full flex justify-end items-center gap-5">
          <div className="relative">
            <input
              type="text"
              className="border-2 border-gray-700 rounded-full px-7"
              placeholder="Quick Search"
            />
            <FaSearch className="absolute inset-y-0 left-2 top-1.5" />
          </div>
          <a>Home</a>
          <a className="text-green-500">4K</a>
          <a>Browse Movies</a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
