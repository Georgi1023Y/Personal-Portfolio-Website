import React from "react";
import { Icon } from "@iconify-icon/react";
import { AutoTypeText } from "./ScrollAnimation";

const Follow = () => {
  const textToType = "© 2024, Georgi Beshirov. All Rights Reserved.";
  const typingInterval = 100;

  return (
    <div className="flex flex-col justify-center items-center gap-4 my-4 md:gap-6">
      <div className="border border-white bg-white w-full h-0.5 my-4 rounded-full"></div>
      <h3 className="text-xs md:text-base lg:text-lg text-center">
        <AutoTypeText text={textToType} interval={typingInterval} />
      </h3>
    </div>
  );
};

export default Follow;
