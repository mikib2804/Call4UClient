"use client";

import React from "react";
import Image from "next/image";
import call4U from "../../../public/call4U.png";
import { BookOpen, Info, Menu, Phone, ThumbsUp } from "lucide-react";

function Header() {
  return (
    <div
      dir="rtl"
      className="w-screen h-20  contain-content flex p-[4px] justify-between items-center bg-[#d9f1ff]"
    >
      <div className="contain-content flex">
        <Image alt="" src={call4U} width={100} height={100} />
        <div className="h-100% w-[0.5px] bg-gray-500 opacity-55"></div>
      </div>
      <div className="flex items-center gap-3 font-semibold text-[#133551] text-[20px]">
        {/* <div className="hidden sm:flex 2xl:hidden gap-3">
          <span className="cursor-pointer">אודות</span>
          <span className="cursor-pointer">צור קשר</span>
          <span className="cursor-pointer">המלצות</span>
          <span className="cursor-pointer">נושאים</span>
        </div> */}
        <div className="hidden sm:flex  gap-6 text-3xl">
          <span className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition">
            אודות
            <Info className="w-5 h-5" />
          </span>
          <span className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition">
            צור קשר
            <Phone className="w-5 h-5" />
          </span>
          <span className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition">
            המלצות
            <ThumbsUp className="w-5 h-5" />
          </span>
          <span className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition">
            נושאים
            <BookOpen className="w-5 h-5" />
          </span>
        </div>
        <div className="sm:hidden  mt-2">
          <Menu className="text-[#133551] size-10" />
        </div>
      </div>
      {/* <PhoneCall /> */}
      <div dir="rtl" className="flex gap-1 justify-center mt-2 items-center">
        <button className="bg-[#133551] cursor-pointer hover:bg-[#3084b5] text-white font-semibold py-2 px-6 rounded-full shadow transition duration-200">
          כניסה
        </button>
        <button className="bg-white border border-blue-600 cursor-pointer text-blue-600 hover:bg-blue-50 font-semibold py-2 px-6 rounded-full shadow transition duration-200">
          הרשמה
        </button>
      </div>
    </div>
  );
}

export default Header;
