"use client";
import React from "react";
import Image from "next/image";
import {
  Check,
  CheckCircle2,
  CircleQuestionMark,
  CircleX,
  ClockFading,
} from "lucide-react";

function GridDisplay() {
  return (
    <div className=" grid grid-cols-[10fr_6fr] h-screen gap-4">
      <div className="bg-green-50 h-full w-full">
        <div className="flex justify-between">
          <span>רשימת מוזמנים לאירוע</span>
          <div className="rounded-full h-16 w-16 p-4 flex  items-center justify-center bg-amber-300">
            3
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div>
            <CheckCircle2 />
            <span>אישרו הגעה</span>
          </div>
          <div>
            <CircleQuestionMark />
            <span>לא בטוחים</span>
          </div>
          <div>
            <CircleX />
            <span>לא מגיעים</span>
          </div>
          <div>
            <ClockFading />
            <span>טרם השיבו</span>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <span> לוח זמנים של אישורי ההגעה לאירוע שלכם</span>
          </div>
          <div>
            <span>ראשון SMS שליחת </span>
          </div>
        </div>
      </div>
      <div className="bg-red-500  h-full w-full"></div>
    </div>
  );
}

export default GridDisplay;
