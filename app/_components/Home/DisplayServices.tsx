"use client";
import { Check, Heart, PartyPopper, Send, Settings } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import cooperation from "../../../public/services/cooperation.png";
import henna from "../../../public/services/henna.png";
import torah from "../../../public/services/torah.png";
import baby from "../../../public/services/baby.png";
import champagne from "../../../public/services/champagne.png";
import economist from "../../../public/services/economist.png";
import marriage from "../../../public/services/marriage.png";
import application from "../../../public/services/application.png";
import ratingSatr1 from "../../../public/rankings/ratingSatr1.png";
import ratingSatr2 from "../../../public/rankings/ratingSatr2.png";
import ratingSatr3 from "../../../public/rankings/ratingSatr3.png";
import ratingSatr4 from "../../../public/rankings/ratingSatr4.png";
import ratingSatr5 from "../../../public/rankings/ratingSatr5.png";
import React, { JSX, useState } from "react";
import { log } from "console";
import ConnectUs from "./ConnectUs";
import ReviewsSlider from "./SlideShow";
type services = {
  Img: StaticImageData;
  name: string;
};
type FeatureBlock = {
  icon: JSX.Element;
  title: string;
  desc: string;
};
type Stage = {
  title: string;
  contant: string;
};

type rating = {
  title: string;
  contant: string;
  rating: number;
};
function DisplayServices() {
  const items: services[] = [
    {
      Img: marriage,
      name: "חתונות",
    },
    {
      Img: champagne,
      name: "מסיבות",
    },
    {
      Img: torah,
      name: "בר מצוות",
    },
    {
      Img: henna,
      name: "חינה",
    },
    {
      Img: baby,
      name: "בריתות",
    },
    {
      Img: economist,
      name: "אירועים עסקיים",
    },
  ];
  const ContentBoxes: FeatureBlock[] = [
    {
      icon: <Check className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      title: "שירות אישי וליווי צמוד",
      desc: "הודעות מותאמות אישית, אתכם בכל שלב, זמינות מלאה ודאגה לפרטים קטנים.",
    },
    {
      icon: <Settings className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      title: "אוטומציה חכמה בזמן אמת",
      desc: "שליחת תזכורות ועדכונים -בלי התעסקון ובלי לרדוף, מעקב בזמן אמת אחרי אישורי הגעה",
    },
    {
      icon: <PartyPopper className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      title: "מותאם לכל סוגי האירועים במחיר משתלם",
      desc: "שירות פרימיום-במחיר גמיש וללא תחרות, מתאים לכלל סוגי האירועים - אנחנו מוכנים להכל...",
    },
  ];

  const stages: Stage[] = [
    {
      title: " מקבלים תמונת מצב חכמה",
      contant: "מי מגיע, מי צריך תזכורת, מי לא ענה – והכל אצלכם בלחיצת כפתור.",
    },
    {
      title: " אנחנו דואגים להזמנות ואישורים",
      contant:
        "SMS, וואצאפ ושיחות- עם פנייה אישית לכל אורח. אתם רק בודקים נתונים",
    },
    {
      title: "  שולחים לנו רשימת אורחים",
      contant: "  יש לכם קובץ? שלחו! אין לכם? נבנה יחד! הכל פשוט נוח ומהיר.",
    },
    {
      title: "בוחרים חבילה ומתחילים",
      contant:
        "כמה קליקים - ואתם בפנים. אנחנו נתאים לכם את השירות המושלם לפי סוג האירוע.",
    },
  ];

  const ratingRe: Record<number, StaticImageData> = {
    1: ratingSatr1,
    2: ratingSatr2,
    3: ratingSatr3,
    4: ratingSatr4,
    5: ratingSatr5,
  };
  const reviews: rating[] = [
    {
      title: "הפכה את ההזמנות לחוויה נוחה ואלגנטית!",
      contant:
        "השתמשנו במערכת לאירוע החתונה שלנו – פשוט חלום! תוך דקות שלחנו הזמנות לכל האורחים, קיבלנו אישורים והגענו בצורה מסודרת, וידענו בדיוק מי מגיע ומתי. חוסך ים של כאב ראש נטע ואורי, חתונה",
      rating: 5,
    },
    {
      title: "הפכה את ההזמנות לחוויה נוחה ואלגנטית!",
      contant:
        "השתמשנו במערכת לאירוע החתונה שלנו – פשוט חלום! תוך דקות שלחנו הזמנות לכל האורחים, קיבלנו אישורים והגענו בצורה מסודרת, וידענו בדיוק מי מגיע ומתי. חוסך ים של כאב ראש נטע ואורי, חתונה",
      rating: 5,
    },
  ];
  const inputStyles =
    "text-[19px] text-black placeholder:text-center p-2 rounded-xl  border-[1px] border-gray-400";
  return (
    <div className="h-auto w-full  overflow-y-scroll max-sm:pb-14  ">
      {/* screen 1 */}
      <div className="overflow-hidden h-fit snap-start max-w-full overflow-x-hidden box-border px-4  font-heebo  overflow-y-scroll w-full flex flex-col items-center justify-center text-white text-4xl pb-5 lg:gap-8">
        <div className="text-center">
          <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-700">
            הזמנות חכמות מתחילות כאן
          </span>

          <span
            dir="rtl"
            className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-700 font-medium"
          >
            אישורי הגעה חכמים באמצעות SMS, וואטסאפ וטלפונים
          </span>

          <span
            dir="rtl"
            className="block text-base sm:text-lg md:text-xl lg:text-[20px] xl:text-[22px] text-gray-600"
          >
            מזינים. מאשרים. חוסכים זמן. אתר שיעשה בשבילכם את כל אישורי ההגעה
            לאירוע!
          </span>
        </div>

        <div className="flex flex-wrap justify-center items-stretch gap-4 px-4">
          {ContentBoxes.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col shadow-gray-500 items-center text-center flex-[1_1_220px] 
                sm:flex-[1_1_260px] max-w-[90%] sm:max-w-xs space-y-2 sm:space-y-3
                 bg-gradient-to-b from-white to-[#f2f9ff] rounded-xl shadow-md p-4 sm:p-6"
            >
              <div className="rounded-full bg-[#6dbfec] w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white">
                {item.icon}
              </div>
              <span className="font-semibold text-sm sm:text-base md:text-lg text-gray-800">
                {item.title}
              </span>
              <span
                className="text-xs sm:text-sm md:text-base text-gray-700 leading-snug"
                dir="rtl"
              >
                {item.desc}
              </span>
            </div>
          ))}
        </div>

        <div className=" flex flex-col justify-center items-center lg:gap-8 mt-[2%]">
          <span dir="rtl" className="text-[20px] font-semibold text-center">
            המומחיות שלנו!
          </span>

          <div className="grid grid-cols-3 sm:grid-cols-7 gap-8 p-4 lg:p-3 items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <Image alt="טוען..." src={application} width={70} height={70} />
              <span className="text-[15px]">{"...ועוד"}</span>
            </div>

            {items.map((item, index) => (
              <div
                key={index}
                className={`${
                  index > 1 ? "hidden sm:flex" : "flex"
                } flex-col items-center justify-center`}
              >
                <Image alt="טוען..." src={item.Img} width={70} height={70} />
                <span className="text-[15px]">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* screen 2 */}

      <div className=" overflow-hidden snap-start   flex-wrap h-fit w-full flex items-center justify-center text-white text-4xl relative">
        <div className="flex flex-col pb-16 w-full justify-center container items-center relative gap-3">
          <ReviewsSlider
            reviews={reviews}
            eventImg={marriage}
            ratingRe={ratingRe}
          />
          <div className="relative w-full max-w-6xl mx-auto px-4">
            <p className="hidden md:block absolute top-5 left-0 right-0 h-0.5 bg-[#364153] opacity-65 z-0" />

            <div className="grid md:grid-cols-4 grid-cols-1 w-full">
              {stages.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center relative z-10"
                >
                  <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-gray-800 font-bold text-lg">
                    {index + 1}
                  </div>

                  <h3 className="font-bold text-sm mt-2">{item.title}</h3>
                  <p className="text-lg text-gray-700 mt-1 leading-snug">
                    {item.contant}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <form
            dir="ltr"
            className="grid grid-cols-1  md:grid-cols-4 gap-2.5 w-[90%] bg-white rounded-xl p-1.5"
          >
            <button
              onClick={() => {}}
              dir="rtl"
              className="order-last md:order-none flex shrink-0 justify-center items-center gap-1 cursor-pointer active:scale-[1.05] p-2 rounded-xl border border-gray-400 bg-gray-700 text-white 
             text-sm sm:text-base md:text-lg"
            >
              שלח בקשה
              <Send className="w-4 h-4 ml-1" />
            </button>
            <input
              dir="rtl"
              name="email"
              type="email"
              placeholder="כמות אורחים משוערת..."
              className="order-none md:order-none col-span-1 px-4 py-2 rounded-xl border border-gray-300 text-gray-700 placeholder:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              value=""
              onChange={() => {}}
            />

            <input
              dir="rtl"
              name="last"
              type="text"
              placeholder="טלפון..."
              className="order-none md:order-none col-span-1 px-4 py-2 rounded-xl border border-gray-300 text-gray-700 placeholder:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              value=""
              onChange={() => {}}
            />

            <input
              dir="rtl"
              name="first"
              type="text"
              placeholder="שם מלא..."
              className="order-none md:order-none col-span-1 px-4 py-2 rounded-xl border border-gray-300 text-gray-700 placeholder:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              value=""
              onChange={() => {}}
            />
          </form>
        </div>
      </div>

      <ConnectUs />
    </div>
  );
}

export default DisplayServices;
