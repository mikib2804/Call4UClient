"use client";
import React from "react";
import facebook from "../../../public/connectUs/facebook.png";
import instegram from "../../../public/connectUs/instagram.png";
import media from "../../../public/connectUs/media.png";
import Image from "next/image";
function ConnectUs() {
  return (
    <div className="flex gap-1.5 absolute bottom-3 left-3 ">
      {/* <div className="w-full flex justify-center mt-auto p-10"> */}
      <Image alt="טוען.." src={instegram} width={30} height={30} />
      <Image alt="טוען.." src={facebook} width={30} height={30} />
      <Image alt="טוען.." src={media} width={30} height={30} />
    </div>
  );
}

export default ConnectUs;
