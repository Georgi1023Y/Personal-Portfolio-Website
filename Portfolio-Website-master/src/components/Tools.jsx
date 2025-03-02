import React from "react";
import { Icon } from "@iconify/react";
import { BouncingAnimation } from "./ScrollAnimation";

const Tools = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-base sm:text-center font-semibold">
        Portfolio Made With
      </h2>
      <div className="mt-5 flex flex-col items-center justify-center gap-4 lg:gap-4 bg-white p-5 lg:py-8 lg:px-10 bg-opacity-25 rounded-3xl">
        <div className="flex flex-row items-center gap-5 md:gap-8 lg:gap-10">
          <BouncingAnimation>
            <a href="https://www.figma.com">
              <div className="block md:hidden">
                <Icon
                  icon="skill-icons:figma-light"
                  className="w-[24px] h-[24px]"
                />
              </div>
              <div className="hidden md:block">
                <Icon
                  icon="skill-icons:figma-light"
                  className="w-[30px] h-[30px]"
                />
              </div>
            </a>
          </BouncingAnimation>
          <BouncingAnimation>
            <a href="https://react.dev">
              <div className="block md:hidden">
                <Icon
                  icon="skill-icons:react-light"
                  className="w-[24px] h-[24px]"
                />
              </div>
              <div className="hidden md:block">
                <Icon
                  icon="skill-icons:react-light"
                  className="w-[30px] h-[30px]"
                />
              </div>
            </a>
          </BouncingAnimation>
        </div>
        <div className="flex flex-row items-center gap-5 lg:gap-10">
          <BouncingAnimation>
            <a href="https://tailwindcss.com">
              <div className="block md:hidden">
                <Icon
                  icon="skill-icons:tailwindcss-light"
                  className="w-[24px] h-[24px]"
                />
              </div>
              <div className="hidden md:block">
                <Icon
                  icon="skill-icons:tailwindcss-light"
                  className="w-[30px] h-[30px]"
                />
              </div>
            </a>
          </BouncingAnimation>
          <BouncingAnimation>
            <a href="https://threejs.org">
              <div className="block md:hidden">
                <Icon
                  icon="skill-icons:threejs-light"
                  className="w-[24px] h-[24px]"
                />
              </div>
              <div className="hidden md:block">
                <Icon
                  icon="skill-icons:threejs-light"
                  className="w-[30px] h-[30px]"
                />
              </div>
            </a>
          </BouncingAnimation>
        </div>
        <div className="flex flex-row items-center gap-5 lg:gap-10">
          <BouncingAnimation>
            <a href="https://vercel.com">
              <div className="block md:hidden">
                <Icon
                  icon="skill-icons:vercel-light"
                  className="w-[24px] h-[24px]"
                />
              </div>
              <div className="hidden md:block">
                <Icon
                  icon="skill-icons:vercel-light"
                  className="w-[30px] h-[30px]"
                />
              </div>
            </a>
          </BouncingAnimation>
          <BouncingAnimation>
            <a href="https://supabase.com">
              <div className="block md:hidden">
                <Icon
                  icon="skill-icons:supabase-light"
                  className="w-[24px] h-[24px]"
                />
              </div>
              <div className="hidden md:block">
                <Icon
                  icon="skill-icons:supabase-light"
                  className="w-[30px] h-[30px]"
                />
              </div>
            </a>
          </BouncingAnimation>
        </div>
      </div>
    </div>
  );
};

export default Tools;
