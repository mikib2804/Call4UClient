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
        <div className="h-100% w-[1.5px] bg-gray-500 opacity-55"></div>
        <div dir="rtl" className="max-sm:hidden flex flex-col gap-[1px] p-2">
          <span>מזינים מאשרים וחוסכים זמן.</span>
          <span>מערכת שתעשה בשבילכם את כל אישורי ההגעה לאירוע</span>
        </div>
      </div>
      <div className="flex items-center gap-3 font-semibold text-[#133551] text-[20px] p-4">
        <div className="flex  gap-6 ">
          <div className="flex items-center text-[20px] max-md:flex-col  gap-2 cursor-pointer  transition">
            <span className="hover:-translate-y-0.5 transition-all duration-300 active:text-[#5c718d] active:duration-75 active:scale-110">
              לתמיכה צרו קשר
            </span>
            <ConnectUs className={"flex gap-1"} />
          </div>
        </div>
      </div>
      {/* <PhoneCall /> */}
    </div>
  );
}

export default HeaderInApp;
