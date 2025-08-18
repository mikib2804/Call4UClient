"use client";

import React from "react";

export default function SameSectionForAll() {
  const animals = ["asdas", "asdasd", "ASDAS"];
  return (
    <div>
      <span>פרטי האירוע</span>
      <div>
        <span>סוג אירוע:</span>
        autocomplate need to do
      </div>
      <div>
        <span> תאריך:</span>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <input type="date" className="max-w-[284px] bg-amber-500" />
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
}
