import React from "react";
import { Icon } from "@iconify-icon/react";
import { AutoTypeText } from "./ScrollAnimation";

const Follow = () => {
  const textToType = "© 2024, Georgi Beshirov. All Rights Reserved.";
  const typingInterval = 100;

  return (
    <div className="flex flex-col justify-center items-center sm:gap-4 md:gap-6 gap-8 xxl:gap-12">
      <div className="border border-white w-full h-0"></div>
      <p className="sm:text-base md:text-xl text-xl xxl:text-3xl text-center">
        <AutoTypeText text={textToType} interval={typingInterval} />
      </p>
    </div>
  );
};

export default Follow;
