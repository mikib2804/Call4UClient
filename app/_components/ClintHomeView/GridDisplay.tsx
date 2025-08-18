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
import someInvate from "../../../public/someInvite.png";
import Tooltip from "../_Helpers/toolTip";
import Invintation from "../_Helpers/Invintation";

function GridDisplay() {
  const cardStyle: ClassValue =
    "flex w-full h-fit flex-col items-center text-white justify-center gap-2 p-6  rounded-xl bg-gradient-to-b from-white to-[#f2f9ff] rounded-xl shadow-md shadow-gray-500 hover:-translate-y-1 transition-all duration-300";
  const textCardStl: ClassValue =
    "text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] text-center text-gray-700 truncate overflow-hidden";
  const circleStyle: ClassValue = "w-12 h-12 text-gray-700 ";
  const circleAmounts: ClassValue =
    "w-16 h-16 rounded-full bg-[#6dbfec] flex items-center justify-center text-white font-semibold shadow-sm shadow-gray-500";
  return (
    <div className="flex justify-center lg:items-center w-full h-full  overflow-x-hidden  from-[#63b5e0] to-[#d9f1ff] ">
      <div className="grid max-lg:grid-cols-1 lg:w-[75%] w-[95%] grid-cols-[10fr_6fr] h-fit gap-4 max-md:bg-gradient-to-t p-8">
        {/* Left panel */}
        <div dir="rtl" className=" w-full flex flex-col max-lg:gap-3 gap-5">
          <div className="flex justify-between bg-gradient-to-b from-white to-[#f2f9ff] rounded-2xl items-center h-fit p-4  shadow-md shadow-gray-500">
            <Image
              alt="חסר"
              src={group}
              className="sm:size-[60px] size-[40px]"
            />
            <span className="text-3xl font-medium max-sm:text-[16px] text-center">
              רשימת מוזמנים לאירוע
            </span>
            <div className=" flex flex-col items-center justify-center ">
              <div className={circleAmounts}>1500</div>
              <span className="sm:text-[14px] font-semibold text-[#133551] max-sm:mt-2 text-[12px]">
                סך מוזמנים
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 w-full md:grid-cols-4 gap-2 ">
            <div className={cardStyle}>
              <CheckCircle2 className={circleStyle} />
              <span className={textCardStl}>אישרו הגעה</span>
              <div className={circleAmounts}>10</div>
            </div>
            <div className={cardStyle}>
              <CircleQuestionMark className={circleStyle} />
              <span className={textCardStl}> לא בטוחים</span>
              <div className={circleAmounts}>10</div>
            </div>
            <div className={cardStyle}>
              <CircleX className={circleStyle} />
              <span className={textCardStl}>לא מגיעים </span>
              <div className={circleAmounts}>10</div>
            </div>
            <div className={cardStyle}>
              <ClockFading className={circleStyle} />
              <span className={textCardStl}> טרם השיבו</span>
              <div className={circleAmounts}>10</div>
            </div>
          </div>

          <div className="grid  grid-cols-1 sm:grid-cols-2 gap-2 p-2">
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
        <div className="flex items-center justify-center w-full h-fit">
          <Invintation />
        </div>
      </div>
    </div>
  );
}

export default GridDisplay;
