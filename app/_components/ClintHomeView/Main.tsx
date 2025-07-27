"use client";
import React from "react";
import HeaderInApp from "../AppHeaders/HeaderInApp";
import GridDisplay from "./GridDisplay";

function Main() {
  return (
    <div className="w-full h-screen  bg-gradient-to-t from-[#63b5e0] to-[#d9f1ff] flex flex-col">
      <HeaderInApp />
      <GridDisplay />
    </div>
  );
}

export default Main;
