"use client";

import { dataCounter } from "@/data";
import CountUp from "react-countup";

export const ConterServices = () => {
  return (
    <div className="grid justify-between max-w-3xl grid-cols-2 gap-4 mx-auto my-8 sm:gap-6 md:grid-cols-4 md:gap-6">
      {dataCounter.map(
        ({ id, endCounter, text, lineRight, lineRightMobile }) => (
          <div key={id} className={`${lineRight && "ltr"}`}>
            <div
              className={`${lineRight && "px-2 border-2 border-transparent sm:px-4 md:border-e-gray-100"} ${lineRightMobile && "border-e-gray-100"}`}
            >
              <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-(--bg-secondary)">
                + <CountUp end={endCounter} start={0} duration={5} />
              </p>
              <p className="max-w-25 text-xs uppercase break-words">{text}</p>
            </div>
          </div>
        ),
      )}
    </div>
  );
};
