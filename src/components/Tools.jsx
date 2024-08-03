import React from "react";
import { Icon } from "@iconify-icon/react";
import { BouncingAnimation } from "./ScrollAnimation";

const Tools = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg md:text-xl sm:text-center md:text-center lg:text-xl xl:text-2xl font-semibold">
        Portfolio Made With
      </h2>
      {/* PROGRAMMING LANGUAGES USED IN THE WEBSITE */}
      <div className="mt-5 flex flex-col items-center justify-center gap-4 md:mt-12 md:flex md:flex-col md:gap-6 lg:gap-4 xl:gap-5 bg-white p-5 lg:py-8 lg:px-10 bg-opacity-25 rounded-3xl">
        <div className="flex flex-row items-center gap-5 md:gap-8 lg:gap-10">
          <BouncingAnimation>
            <a href="https://www.figma.com">
              <div className="block lg:hidden">
                <Icon icon="skill-icons:figma-light" style={{ fontSize: 28 }} />
              </div>
              <div className="hidden lg:block 2xl:hidden">
                <Icon icon="skill-icons:figma-light" style={{ fontSize: 35 }} />
              </div>
              <div className="hidden 2xl:block">
                <Icon icon="skill-icons:figma-light" style={{ fontSize: 40 }} />
              </div>
            </a>
          </BouncingAnimation>
          <BouncingAnimation>
            <a href="https://react.dev">
              <div className="block lg:hidden">
                <Icon icon="skill-icons:react-light" style={{ fontSize: 28 }} />
              </div>
              <div className="hidden lg:block 2xl:hidden">
                <Icon icon="skill-icons:react-light" style={{ fontSize: 35 }} />
              </div>
              <div className="hidden 2xl:block">
                <Icon icon="skill-icons:react-light" style={{ fontSize: 40 }} />
              </div>
            </a>
          </BouncingAnimation>
        </div>
        <div className="flex flex-row items-center gap-5 md:gap-8 lg:gap-10">
          <BouncingAnimation>
            <a href="https://tailwindcss.com">
              <div className="block lg:hidden">
                <Icon
                  icon="skill-icons:tailwindcss-light"
                  style={{ fontSize: 28 }}
                />
              </div>
              <div className="hidden lg:block 2xl:hidden">
                <Icon
                  icon="skill-icons:tailwindcss-light"
                  style={{ fontSize: 35 }}
                />
              </div>
              <div className="hidden 2xl:block">
                <Icon
                  icon="skill-icons:tailwindcss-light"
                  style={{ fontSize: 40 }}
                />
              </div>
            </a>
          </BouncingAnimation>
          <BouncingAnimation>
            <a href="https://threejs.org">
              <div className="block lg:hidden">
                <Icon
                  icon="skill-icons:threejs-light"
                  style={{ fontSize: 28 }}
                />
              </div>
              <div className="hidden lg:block 2xl:hidden">
                <Icon
                  icon="skill-icons:threejs-light"
                  style={{ fontSize: 35 }}
                />
              </div>
              <div className="hidden 2xl:block">
                <Icon
                  icon="skill-icons:threejs-light"
                  style={{ fontSize: 40 }}
                />
              </div>
            </a>
          </BouncingAnimation>
        </div>
        <div className="flex flex-row items-center gap-5 md:gap-8 lg:gap-10">
          {/* VERCEL */}
          <BouncingAnimation>
            <a href="https://vercel.com">
              <div className="block lg:hidden">
                <Icon
                  icon="skill-icons:vercel-light"
                  style={{ fontSize: 28 }}
                />
              </div>
              <div className="hidden lg:block 2xl:hidden">
                <Icon
                  icon="skill-icons:vercel-light"
                  style={{ fontSize: 35 }}
                />
              </div>
              <div className="hidden 2xl:block">
                <Icon
                  icon="skill-icons:vercel-light"
                  style={{ fontSize: 40 }}
                />
              </div>
            </a>
          </BouncingAnimation>
          {/* SUPABASE */}
          <BouncingAnimation>
            <a href="https://supabase.com">
              <div className="block lg:hidden">
                <Icon
                  icon="skill-icons:supabase-light"
                  style={{ fontSize: 28 }}
                />
              </div>
              <div className="hidden lg:block 2xl:hidden">
                <Icon
                  icon="skill-icons:supabase-light"
                  style={{ fontSize: 35 }}
                />
              </div>
              <div className="hidden 2xl:block">
                <Icon
                  icon="skill-icons:supabase-light"
                  style={{ fontSize: 40 }}
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
