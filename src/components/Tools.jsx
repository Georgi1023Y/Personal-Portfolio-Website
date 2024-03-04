import React from "react";
import { Icon } from "@iconify-icon/react";
import { BouncingAnimation } from "./ScrollAnimation";

const Tools = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="sm:text-2xl md:text-3xl sm:text-center md:text-center lg:text-5xl xl:text-6xl xxl:text-6xl font-semibold">
        Portfolio Made With
      </h2>
      {/* PROGRAMMING LANGUAGES USED IN THE WEBSITE */}
      <div className="mt-20 sm:mt-10 md:mt-12 sm:flex sm:flex-col sm:gap-4 md:flex md:flex-col md:gap-6 flex flex-row lg:gap-3 xl:gap-3 xxl:gap-8">
        <BouncingAnimation>
          <div className="flex flex-row items-center justify-center sm:gap-4 sm:w-60 sm:h-16 md:gap-4 md:px-7 md:py-3 lg:gap-4 lg:px-8 lg:py-3 xl:gap-4 xl:py-3 xl:px-7 xxl:gap-10 xxl:px-12 xxl:py-8 bg-white rounded-full">
            <div className="lg:hidden xl:hidden xxl:hidden">
              <Icon icon="logos:figma" style={{ fontSize: 35 }} />
            </div>
            <div className="sm:hidden md:hidden xxl:hidden">
              <Icon icon="logos:figma" style={{ fontSize: 45 }} />
            </div>
            <div className="sm:hidden md:hidden lg:hidden xl:hidden">
              <Icon icon="logos:figma" style={{ fontSize: 60 }} />
            </div>
            <h3 className="text-black sm:text-lg md:text-xl lg:text-xl xl:text-2xl xxl:text-4xl font-medium">
              Figma
            </h3>
          </div>
        </BouncingAnimation>
        <BouncingAnimation>
          <div className="flex flex-row items-center justify-center sm:gap-4 sm:w-60 sm:h-16 md:gap-4 md:px-7 md:py-3 lg:gap-4 lg:px-8 lg:py-3 xl:gap-4 xl:py-3 xl:px-7 xxl:gap-10 xxl:px-12 xxl:py-8 bg-white rounded-full">
            <div className="lg:hidden xl:hidden xxl:hidden">
              <Icon icon="devicon:react" style={{ fontSize: 40 }} />
            </div>
            <div className="sm:hidden md:hidden xxl:hidden">
              <Icon icon="devicon:react" style={{ fontSize: 45 }} />
            </div>
            <div className="sm:hidden md:hidden lg:hidden xl:hidden">
              <Icon icon="devicon:react" style={{ fontSize: 60 }} />
            </div>
            <h3 className="text-black sm:text-lg md:text-xl lg:text-xl xl:text-2xl xxl:text-4xl font-medium">
              React.js
            </h3>
          </div>
        </BouncingAnimation>
        <BouncingAnimation>
          <div className="flex flex-row items-center justify-center sm:gap-4 sm:w-60 sm:h-16 md:gap-4 md:px-7 md:py-3 lg:gap-4 lg:px-8 lg:py-3 xl:gap-4 xl:py-3 xl:px-7 xxl:gap-10 xxl:px-12 xxl:py-8 bg-white rounded-full">
            <div className="lg:hidden xl:hidden xxl:hidden">
              <Icon icon="devicon:tailwindcss" style={{ fontSize: 40 }} />
            </div>
            <div className="sm:hidden md:hidden xxl:hidden">
              <Icon icon="devicon:tailwindcss" style={{ fontSize: 45 }} />
            </div>
            <div className="sm:hidden md:hidden lg:hidden xl:hidden">
              <Icon icon="devicon:tailwindcss" style={{ fontSize: 60 }} />
            </div>
            <h3 className="text-black sm:text-lg md:text-xl lg:text-xl xl:text-2xl xxl:text-4xl font-medium">
              Tailwind CSS
            </h3>
          </div>
        </BouncingAnimation>
        <BouncingAnimation>
          <div className="flex flex-row items-center justify-center sm:gap-4 sm:w-60 sm:h-16 md:gap-4 md:px-7 md:py-3 lg:gap-4 lg:px-8 lg:py-3 xl:gap-4 xl:py-3 xl:px-7 xxl:gap-10 xxl:px-12 xxl:py-8 bg-white rounded-full">
            <div className="lg:hidden xl:hidden xxl:hidden">
              <Icon icon="logos:threejs" style={{ fontSize: 40 }} />
            </div>
            <div className="sm:hidden md:hidden xxl:hidden">
              <Icon icon="logos:threejs" style={{ fontSize: 45 }} />
            </div>
            <div className="sm:hidden md:hidden lg:hidden xl:hidden">
              <Icon icon="logos:threejs" style={{ fontSize: 60 }} />
            </div>
            <h3 className="text-black sm:text-lg md:text-xl lg:text-xl xl:text-2xl xxl:text-4xl font-medium">
              Three.js
            </h3>
          </div>
        </BouncingAnimation>
      </div>
      {/* ANIMATION FRAMEWORKS */}
      <div className="mt-5 xxl:mt-8 sm:mt-4 sm:flex sm:flex-col sm:gap-4 md:mt-6 md:flex md:flex-col md:gap-6 flex flex-row lg:gap-3 xl:gap-3 xxl:gap-8">
        <BouncingAnimation>
          <div className="flex flex-row items-center justify-center sm:gap-4 sm:w-60 sm:h-16 md:w-60 md:gap-4 md:px-7 md:py-3 lg:gap-4 lg:px-8 lg:py-3 xl:gap-4 xl:py-3 xl:px-7 xxl:gap-10 xxl:px-12 xxl:py-8 bg-white rounded-full">
            <div className="lg:hidden xl:hidden xxl:hidden">
              <Icon icon="devicon:framermotion" style={{ fontSize: 40 }} />
            </div>
            <div className="sm:hidden md:hidden xxl:hidden">
              <Icon icon="devicon:framermotion" style={{ fontSize: 45 }} />
            </div>
            <div className="sm:hidden md:hidden lg:hidden xl:hidden">
              <Icon icon="devicon:framermotion" style={{ fontSize: 60 }} />
            </div>
            <h3 className="text-black sm:text-lg md:text-xl lg:text-xl xl:text-2xl xxl:text-4xl font-medium">
              Framer
            </h3>
          </div>
        </BouncingAnimation>
      </div>
    </div>
  );
};

export default Tools;
