"use client";
import Image from "next/image";
import React from "react";
import Header from "./Header";
import DisplayServices from "./DisplayServices";

function Main() {
  return (
    <div className="w-full h-screen  bg-gradient-to-t from-[#63b5e0] to-[#d9f1ff] flex flex-col">
      <Header />
      <DisplayServices />
    </div>
  );
}

export default Main;
