"use client";
import React from "react";
import Image from "next/image";
import group from "../../../public/add-group.png";
import {
  CheckCircle2,
  CircleQuestionMark,
  CircleX,
  ClockFading,
  Edit,
} from "lucide-react";
import { ClassValue } from "clsx";
import invitation from "../../../public/invitation.png";
import Tooltip from "../_Helpers/toolTip";

function GridDisplay() {
  const cardStyle: ClassValue =
    "flex w-full h-fit flex-col items-center text-white justify-center gap-2 p-6 bg-[#2f84b7] rounded-xl";
  const textCardStl: ClassValue =
    "text-[20px] max-lg:text-[16px] max-md:text-[14px] max-sm:text-[12px] text-center truncate overflow-hidden";

  return (
    <div className="grid grid-cols-1  md:grid-cols-[10fr_6fr] h-fit gap-4 p-10 bg-gradient-to-t from-[#63b5e0] to-[#d9f1ff]">
      {/* Left panel */}
      <div dir="rtl" className=" w-full flex flex-col gap-3">
        <div className="flex justify-between bg-[#93d8fc] rounded-2xl items-center h-fit p-4">
          <Image alt="חסר" src={group} width={60} height={60} />
          <span className="text-3xl font-medium">רשימת מוזמנים לאירוע</span>
          <div className=" flex flex-col items-center justify-center ">
            <div className="rounded-full h-16 w-16 p-4 flex items-center justify-center bg-white text-[#133551] font-semibold">
              3
            </div>
            <span className="text-[14px] font-semibold text-[#133551]">
              סך מוזמנים
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1">
          <div className={cardStyle}>
            <CheckCircle2 className="w-12 h-12" />
            <span className={textCardStl}>אישרו הגעה</span>
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#133551] font-semibold">
              10
            </div>
          </div>
          <div className={cardStyle}>
            <CircleQuestionMark className="w-12 h-12" />
            <span className={textCardStl}> לא בטוחים</span>
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#133551] font-semibold">
              10
            </div>
          </div>
          <div className={cardStyle}>
            <CircleX className="w-12 h-12" />
            <span className={textCardStl}>לא מגיעים </span>
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#133551] font-semibold">
              10
            </div>
          </div>
          <div className={cardStyle}>
            <ClockFading className="w-12 h-12" />
            <span className={textCardStl}> טרם השיבו</span>
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#133551] font-semibold">
              10
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 p-2">
          <div className="w-full text-white bg-gradient-to-b from-[rgb(60,153,203)] to-[#1c678f]  p-2 py-8 rounded-2xl flex items-center justify-center">
            <span className="text-xl max-sm:text-xl max-md:text-[14px]">
              לוח זמנים של אישורי
              <br />
              ההגעה לאירוע שלכם
            </span>
          </div>
          <div className="w-full py-8 text-white text-xl max-sm:text-xl max-md:text-[14px] rounded-2xl flex flex-col items-center justify-center bg-gradient-to-b from-[rgb(60,153,203)] to-[#1c678f] ">
            <span className="border-b-2  border-white/30">השלב הבא</span>
            <span>ראשון SMS שליחת </span>
            <span> 12/23/23</span>
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="border-[2px] border-[rgba(28,103,143,0.30)]  w-full rounded-3xl overflow-hidden relative aspect-[4/5] md:aspect-auto">
        <Image alt="" src={invitation} fill className="object-cover" />

        <div className="absolute top-8 right-8">
          <Tooltip text="עריכת הזמנה">
            <button className="cursor-pointer transition-transform active:scale-110">
              <Edit className="w-6 h-6" />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default GridDisplay;
