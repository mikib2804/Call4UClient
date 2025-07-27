"use client";

import { useEffect, useState } from "react";
import ratingSatr1 from "../../../public/rankings/ratingSatr1.png";
import ratingSatr2 from "../../../public/rankings/ratingSatr2.png";
import ratingSatr3 from "../../../public/rankings/ratingSatr3.png";
import ratingSatr4 from "../../../public/rankings/ratingSatr4.png";
import ratingSatr5 from "../../../public/rankings/ratingSatr5.png";
import eventImg from "../../../public/services/eventImg.png";
import Image, { StaticImageData } from "next/image";
import { Heart } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

type Rating = {
  title: string;
  contant: string;
  rating: number;
};

type Props = {
  reviews: Rating[];
  eventImg: StaticImageData;
  ratingRe: Record<number, StaticImageData>;
};

function ReviewsSlider({ reviews, ratingRe, eventImg }: Props) {
  const [activeIndex, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const cardVariants: Variants = {
    initial: { opacity: 0, x: -50, rotate: -5 },
    animate: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 12,
      },
    },
    exit: {
      opacity: 0,
      x: 50,
      rotate: 5,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <span
        dir="rtl"
        className="flex text-center items-center gap-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-700"
      >
        מה הלקוחות אומרים עלינו?
        <Heart className="fill-[#364153] w-10 h-10" />
      </span>
      {/* Mobile slider with animation */}
      <div className="relative w-[20rem] sm:w-[22rem] h-[22rem] md:hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-white to-[#f2f9ff] rounded-xl shadow-md text-[#364153] flex flex-col items-center gap-3 text-center"
          >
            <Image alt="event" src={eventImg} width={70} height={70} />
            <Image
              alt="rating"
              src={ratingRe[reviews[activeIndex].rating]}
              width={70}
              height={70}
            />
            <span className="text-[20px]">{`"${reviews[activeIndex].title}"`}</span>
            <span className="text-[15px]">{reviews[activeIndex].contant}</span>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* All cards on desktop (no animation) */}
      <div className="hidden md:grid grid-cols-2 gap-4">
        {reviews.map((item, index) => (
          <div
            key={index}
            dir="rtl"
            className="flex flex-col justify-center text-center items-center bg-gradient-to-b from-white to-[#f2f9ff] rounded-xl shadow-md text-[#364153] gap-3 w-[22rem] p-4 relative"
          >
            <div className="absolute top-2 left-2">{index}</div>
            <Image alt="event" src={eventImg} width={70} height={70} />
            <Image
              alt="rating"
              src={ratingRe[item.rating]}
              width={70}
              height={70}
            />
            <span className="text-[20px]">{`"${item.title}"`}</span>
            <span className="text-[15px]">{item.contant}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewsSlider;
