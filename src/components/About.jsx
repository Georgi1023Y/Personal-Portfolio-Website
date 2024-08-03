import React from "react";
import { Icon } from "@iconify-icon/react";
import { BouncingAnimation } from "./ScrollAnimation";

const About = () => {
  return (
    <div>
      {/* ABOUT ME COMPONENT FOR SM AND MD SCREENS */}
      <div className="flex flex-col lg:hidden xl:hidden 2xl:hidden">
        <h2 className="text-lg md:text-xl font-semibold text-center sm:mb-6 md:mb-4">
          About Me
        </h2>
        {/* TEXT + PARAGRAPH */}
        <div className="flex flex-col text-start">
          <p className="text-sm md:text-base my-4 font-light text-center">
            I love to code. I have been coding for more than 3 years.
          </p>
        </div>
        {/* I LIKE + EXPERIENCE + PROJECTS */}
        <div className="flex flex-col items-center mt-6 md:mt-8">
          <h2 className="text-lg mb-4 md:mb-6 md:text-xl font-semibold text-center">
            I like:
          </h2>
          <div className="flex flex-col items-center gap-5">
            <div className="px-8 flex flex-row items-center justify-center gap-5 bg-white bg-opacity-25 w-full h-12 md:h-16 rounded-full">
              <div className="block md:hidden">
                <Icon
                  icon="mingcute:music-line"
                  style={{ color: "white", fontSize: 25 }}
                />
              </div>
              <div className="hidden md:block">
                <Icon
                  icon="mingcute:music-line"
                  style={{ color: "white", fontSize: 30 }}
                />
              </div>
              <p className="text-base md:text-lg font-medium">Music</p>
            </div>
            <div className="px-8 flex flex-row items-center justify-center gap-5 bg-white bg-opacity-25 w-full h-12 md:h-16 rounded-full">
              <div className="block md:hidden">
                <Icon
                  icon="healthicons:weights"
                  style={{ color: "white", fontSize: 30 }}
                />
              </div>
              <div className="hidden md:block">
                <Icon
                  icon="healthicons:weights"
                  style={{ color: "white", fontSize: 35 }}
                />
              </div>
              <p className="text-base md:text-lg font-medium">Working Out</p>
            </div>
            <div className="px-8 flex flex-row items-center justify-center gap-5 bg-white bg-opacity-25 w-full h-12 md:h-16 rounded-full">
              <div className="block md:hidden">
                <Icon
                  icon="material-symbols:travel"
                  style={{ color: "white", fontSize: 30 }}
                />
              </div>
              <div className="hidden md:block">
                <Icon
                  icon="material-symbols:travel"
                  style={{ color: "white", fontSize: 30 }}
                />
              </div>
              <p className="text-base md:text-lg font-medium">Travelling</p>
            </div>
            <div className="px-8 flex flex-row items-center justify-center gap-5 bg-white bg-opacity-25 w-full h-12 md:h-16 rounded-full">
              <div className="block md:hidden">
                <Icon
                  icon="cib:visual-studio-code"
                  style={{ color: "white", fontSize: 25 }}
                />
              </div>
              <div className="hidden md:block">
                <Icon
                  icon="cib:visual-studio-code"
                  style={{ color: "white", fontSize: 25 }}
                />
              </div>
              <p className="text-base md:text-lg font-medium">Coding</p>
            </div>
            {/* 3+ YEARS OF EXPERIENCE */}
            <div className="mt-6 md:mt-16 flex flex-col items-center gap-4">
              <h2 className="text-3xl md:text-5xl font-bold">3+</h2>
              <p className="text-base md:text-lg font-medium text-center">
                Years <br />
                experience
              </p>
            </div>
            {/* 20+ PROJECTS COMPLETED */}
            <div className="mt-10 md:my-12 flex flex-col gap-4 text-center">
              <h2 className="text-3xl md:text-5xl font-bold">20+</h2>
              <p className="text-base md:text-lg font-medium">
                Completed <br />
                projects
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT ME COMPONENT FOR LG,XL AND XXL SCREENS */}
      <div className="flex-col hidden lg:flex">
        <h2 className="mt-5 text-white text-2xl xl:text-3xl font-bold text-center mb-16">
          About Me
        </h2>
        {/* TEXT + PARAGRAPH */}
        <div className="flex flex-col gap-8">
          <h2 className="text-xl xl:text-2xl font-semibold">
            Coding is my passion
          </h2>
          <p className="text-base xl:text-lg font-light">
            I am self-taught developer who excel in problem-solving, <br />
            innovation, and tackling complex challenges with <br />a relentless
            passion for continuous learning.
          </p>
        </div>
        {/* I LIKE + EXPERIENCE + PROJECTS */}
        <div className="flex flex-col my-10">
          <h2 className="text-xl xl:text-2xl font-semibold mb-6">I like:</h2>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col gap-3.5">
              <div className="flex flex-row gap-4 xl:gap-4">
                <div className="px-8 flex flex-row items-center justify-start gap-4 bg-white bg-opacity-25 w-64 h-16 xl:w-80 xl:h-20 rounded-full">
                  <div>
                    <Icon
                      icon="mingcute:music-line"
                      style={{ color: "white", fontSize: 35 }}
                    />
                  </div>
                  <p className="text-lg xl:text-xl font-bold">
                    Music
                  </p>
                </div>
                <div className="px-8 flex flex-row items-center justify-start gap-3 bg-white bg-opacity-25 w-64 h-16 xl:w-80 xl:h-20 rounded-full">
                  <div className="2xl:hidden">
                    <Icon
                      icon="healthicons:weights"
                      style={{ color: "white", fontSize: 35 }}
                    />
                  </div>
                  <div className="lg:hidden xl:hidden 2xl:block">
                    <Icon
                      icon="healthicons:weights"
                      style={{ color: "white", fontSize: 40 }}
                    />
                  </div>
                  <p className="text-lg xl:text-xl font-bold">
                    Working Out
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="px-8 flex flex-row items-center justify-start gap-3 bg-white bg-opacity-25 w-64 h-16 xl:w-80 xl:h-20 rounded-full">
                  <div>
                    <Icon
                      icon="material-symbols:travel"
                      style={{ color: "white", fontSize: 35 }}
                    />
                  </div>
                  <p className="text-lg xl:text-xl font-bold">
                    Travelling
                  </p>
                </div>
                <div className="px-8 flex flex-row items-center justify-start gap-6 bg-white bg-opacity-25 w-64 h-16 xl:w-80 xl:h-20 rounded-full">
                  <div className="2xl:hidden">
                    <Icon
                      icon="cib:visual-studio-code"
                      style={{ color: "white", fontSize: 25 }}
                    />
                  </div>
                  <div className="lg:hidden xl:hidden 2xl:block">
                    <Icon
                      icon="cib:visual-studio-code"
                      style={{ color: "white", fontSize: 30 }}
                    />
                  </div>
                  <p className="text-lg xl:text-xl font-bold">
                    Coding
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center">
              {/* 3+ YEARS OF EXPERIENCE */}
              <div className="flex flex-col gap-5 text-center">
                <BouncingAnimation>
                  <h2 className="text-4xl xl:text-5xl font-bold">
                    3+
                  </h2>
                </BouncingAnimation>
                <p className="text-lg xl:text-xl font-medium">
                  Years <br />
                  experience
                </p>
              </div>
              <div className="bg-white w-0.5 h-44 mx-8 xl:mx-14 rounded-full"></div>
              {/* 20+ PROJECTS COMPLETED */}
              <div className="flex flex-col gap-5 text-center">
                <BouncingAnimation>
                  <h2 className="text-4xl xl:text-5xl font-bold">
                    20+
                  </h2>
                </BouncingAnimation>
                <p className="text-base xl:text-xl font-medium">
                  Completed <br />
                  projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
