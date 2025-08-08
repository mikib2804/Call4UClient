"use client";

import React from "react";
import Image from "next/image";
import call4U from "../../../public/call4U.png";
import { BookOpen, Info, Menu, Phone, ThumbsUp } from "lucide-react";
import ConnectUs from "../_Helpers/ConnectUs";

function HeaderInApp() {
  return (
    <div
      dir="rtl"
      className="w-screen h-20  contain-content flex p-[4px] justify-end items-center bg-[#d9f1ff]"
    >
      <div className="contain-content flex absolute right-0">
        <Image alt="" src={call4U} width={100} height={100} />
        <div className="h-100% w-[0.5px] bg-gray-500 opacity-55"></div>
      </div>
      <div className="flex items-center gap-3 font-semibold text-[#133551] text-[20px] p-4">
        <div className="flex  gap-6 ">
          <span className="flex items-center text-[20px] max-md:flex-col  gap-2 cursor-pointer hover:text-blue-600 transition">
            לתמיכה צרו קשר
            <ConnectUs className={"flex gap-1"} />
          </span>
        </div>
      </div>
      {/* <PhoneCall /> */}
    </div>
  );
}

export default HeaderInApp;
