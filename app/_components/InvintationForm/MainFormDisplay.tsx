"use client";

import React from "react";
import SameSectionForAll from "./SameSectionForAll";

function MainFormDisplay() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <span>עיצוב הזמנה</span>
          <SameSectionForAll />
        </div>
        <div>
          <span>תצוגת אורחים</span>
        </div>
      </div>
    </div>
  );
}

export default MainFormDisplay;
