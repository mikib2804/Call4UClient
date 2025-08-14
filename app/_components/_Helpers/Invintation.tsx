import React from "react";
import Image from "next/image";
import partyImg from "../../../public/party.jpg";
import { Pencil } from "lucide-react";
function Invintation() {
  return (
    <div className="w-full h-fit flex items-center justify-center">
      <div className="flex relative overflow-hidden flex-col max-lg:p-8 p-6 w-full justify-center items-center bg-gradient-to-b from-white to-[#f2f9ff] rounded-2xl ">
        <svg
          className="absolute bottom-0 left-0 w-full h-[45%] opacity-20 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#3c99cb"
            fillOpacity="0.7"
            d="M0,256L48,229.3C96,203,192,149,288,122.7C384,96,480,96,576,122.7C672,149,768,203,864,192C960,181,1056,107,1152,74.7C1248,43,1344,53,1392,58.7L1440,64V320H0Z"
          ></path>
        </svg>
        <svg
          className="absolute top-0 left-0 w-full h-[40%] rotate-180 opacity-20 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#3c99cb"
            fillOpacity="0.7"
            d="M0,256L48,229.3C96,203,192,149,288,122.7C384,96,480,96,576,122.7C672,149,768,203,864,192C960,181,1056,107,1152,74.7C1248,43,1344,53,1392,58.7L1440,64V320H0Z"
          ></path>
        </svg>
        <button className="absolute z-50 sm:top-5 sm:right-5 top-2 right-2 cursor-pointer hover:-translate-y-1 transition-all duration-200 w-fit h-fit p-1.5 rounded-full flex items-center justify-center  text-[#384355]">
          <Pencil />
        </button>
        <div className="w-full z-10 h-fit flex flex-col justify-center items-center p-2">
          <Image alt="" src={partyImg} className="object-contain rounded-lg" />

          <div
            dir="rtl"
            className="flex flex-col gap-1 w-full justify-center items-center"
          >
            <span>החתונה</span>
            <span>של</span>
            <span className="text-2xl font-medium">{"אנה ואלזה"}</span>
            <span>כ"ה בטבת התשפ"ה</span>
            <span className="text-xl font-medium max-sm:text-sm">
              אולם: ארמוניה בגן, האודם 6 גדרה
            </span>
          </div>
        </div>

        <div className="w-full grid grid-cols-2">
          <div className="flex flex-col w-full justify-center items-center">
            <span>קבלת פנים</span>
            <span>{"19:30"}</span>
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <span>חופה וקידושין</span>
            <span>{"19:30"}</span>
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <span> הורה החתן</span>
            <span>{"יוסי ואנה"}</span>
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <span> הורה הכלה</span>
            <span>{"יוסי ואנה"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invintation;
