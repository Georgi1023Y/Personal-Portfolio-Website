import React from "react";
import { Icon } from "@iconify-icon/react";
import { BouncingAnimation } from "./ScrollAnimation";

const About = () => {
  return (
    <div>
      {/* ABOUT ME COMPONENT FOR SM AND MD SCREENS */}
      <div className="flex flex-col lg:hidden xl:hidden xxl:hidden">
        <h2 className="sm:text-3xl md:text-4xl font-semibold text-center sm:mb-6 md:mb-4">
          About Me
        </h2>
        {/* TEXT + PARAGRAPH */}
        <div className="flex flex-col text-start">
          <p className="sm:text-lg md:text-2xl my-4 font-light text-center">
            I love to code. I have been coding for more than 3 years.
          </p>
        </div>
        {/* I LIKE + EXPERIENCE + PROJECTS */}
        <div className="flex flex-col items-center mt-6 md:mt-8">
          <h2 className="sm:text-2xl md:text-4xl font-semibold text-center">
            I like:
          </h2>
          <div className="flex flex-col items-center gap-5">
            <div className="mt-8 md:mt-14 px-8 flex flex-row items-center justify-start gap-5 bg-white bg-opacity-25 w-56 h-16 md:w-96 md:h-20 rounded-full">
              <div className="md:hidden">
                <Icon
                  icon="mingcute:music-line"
                  style={{ color: "white", fontSize: 35 }}
                />
              </div>
              <div className="sm:hidden">
                <Icon
                  icon="mingcute:music-line"
                  style={{ color: "white", fontSize: 55 }}
                />
              </div>
              <p className="sm:text-lg md:text-3xl font-medium">Music</p>
            </div>
            <div className="px-8 flex flex-row items-center justify-start gap-4 bg-white bg-opacity-25 w-56  h-16 md:w-96 md:h-20 rounded-full">
              <div className="md:hidden">
                <Icon
                  icon="healthicons:weights"
                  style={{ color: "white", fontSize: 40 }}
                />
              </div>
              <div className="sm:hidden">
                <Icon
                  icon="healthicons:weights"
                  style={{ color: "white", fontSize: 55 }}
                />
              </div>
              <p className="sm:text-lg md:text-3xl font-medium">Training</p>
            </div>
            <div className="px-8 flex flex-row items-center justify-start gap-4 bg-white bg-opacity-25 w-56 h-16 md:w-96 md:h-20 rounded-full">
              <div className="md:hidden">
                <Icon
                  icon="material-symbols:travel"
                  style={{ color: "white", fontSize: 40 }}
                />
              </div>
              <div className="sm:hidden">
                <Icon
                  icon="material-symbols:travel"
                  style={{ color: "white", fontSize: 55 }}
                />
              </div>
              <p className="sm:text-lg md:text-3xl font-medium">Travelling</p>
            </div>
            <div className="px-8 flex flex-row items-center justify-start gap-6 bg-white bg-opacity-25 w-56 h-16 md:w-96 md:h-20 rounded-full">
              <div className="md:hidden">
                <Icon
                  icon="cib:visual-studio-code"
                  style={{ color: "white", fontSize: 30 }}
                />
              </div>
              <div className="sm:hidden">
                <Icon
                  icon="cib:visual-studio-code"
                  style={{ color: "white", fontSize: 45 }}
                />
              </div>
              <p className="sm:text-lg md:text-3xl font-medium">Coding</p>
            </div>
            {/* 3+ YEARS OF EXPERIENCE */}
            <div className="sm:mt-6 md:mt-16 flex flex-col items-center gap-6">
              <h2 className="sm:text-6xl md:text-8xl font-bold">3+</h2>
              <p className="sm:text-xl md:text-4xl font-medium text-center">
                Years <br />
                experience
              </p>
            </div>
            {/* 20+ PROJECTS COMPLETED */}
            <div className="sm:mt-10 md:my-12 flex flex-col gap-6 text-center">
              <h2 className="sm:text-6xl md:text-8xl font-bold">20+</h2>
              <p className="sm:text-xl md:text-4xl font-medium">
                Completed <br />
                projects
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT ME COMPONENT FOR LG,XL AND XXL SCREENS */}
      <div className="flex flex-col sm:hidden md:hidden">
        <h2 className="text-white text-4xl xl:text-5xl xxl:text-6xl font-bold text-center mb-16">
          About Me
        </h2>
        {/* TEXT + PARAGRAPH */}
        <div className="flex flex-col gap-8 xl:gap-6 xxl:gap-16">
          <h2 className="text-3xl xl:text-3xl xxl:text-5xl font-semibold">
            Coding is my passion
          </h2>
          <p className="text-lg xxl:text-4xl font-light">
            I am self-taught developer who excel in problem-solving, <br />
            innovation, and tackling complex challenges with <br />a relentless
            passion for continuous learning.
          </p>
        </div>
        {/* I LIKE + EXPERIENCE + PROJECTS */}
        <div className="flex flex-col mt-10 xxl:mt-16">
          <h2 className="text-3xl xxl:text-3xl font-semibold">I like:</h2>
          <div className="flex flex-row items-center lg:mt-5 xl:mt-10 xxl:mt-20 lg:gap-12 xl:gap-48 xxl:gap-72">
            <div className="flex flex-col gap-3.5 xxl:gap-4">
              <div className="flex flex-row gap-4 xl:gap-4">
                <div className="px-8 flex flex-row items-center justify-start gap-4 xxl:gap-8 bg-white bg-opacity-25 w-64 h-16 xl:w-80 xl:h-20 xxl:w-96 xxl:h-28 rounded-full">
                  <div className="xxl:hidden">
                    <Icon
                      icon="mingcute:music-line"
                      style={{ color: "white", fontSize: 45 }}
                    />
                  </div>
                  <div className="lg:hidden xl:hidden">
                    <Icon
                      icon="mingcute:music-line"
                      style={{ color: "white", fontSize: 80 }}
                    />
                  </div>
                  <p className="lg:text-2xl xl:text-2xl xxl:text-4xl font-bold">
                    Music
                  </p>
                </div>
                <div className="px-8 flex flex-row items-center justify-start gap-3 xxl:gap-8 bg-white bg-opacity-25 w-64 h-16 xl:w-80 xl:h-20 xxl:w-96 xxl:h-28 rounded-full">
                  <div className="xxl:hidden">
                    <Icon
                      icon="healthicons:weights"
                      style={{ color: "white", fontSize: 50 }}
                    />
                  </div>
                  <div className="lg:hidden xl:hidden">
                    <Icon
                      icon="healthicons:weights"
                      style={{ color: "white", fontSize: 80 }}
                    />
                  </div>
                  <p className="lg:text-2xl xl:text-2xl xxl:text-4xl font-bold">
                    Training
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="px-8 flex flex-row items-center justify-start gap-3 xxl:gap-8 bg-white bg-opacity-25 w-64 h-16 xl:w-80 xl:h-20 xxl:w-96 xxl:h-28 rounded-full">
                  <div className="xxl:hidden">
                    <Icon
                      icon="material-symbols:travel"
                      style={{ color: "white", fontSize: 45 }}
                    />
                  </div>
                  <div className="lg:hidden xl:hidden">
                    <Icon
                      icon="material-symbols:travel"
                      style={{ color: "white", fontSize: 80 }}
                    />
                  </div>
                  <p className="lg:text-2xl xl:text-2xl xxl:text-4xl font-bold">
                    Travelling
                  </p>
                </div>
                <div className="px-8 flex flex-row items-center justify-start gap-6 xxl:gap-8 bg-white bg-opacity-25 w-64 h-16 xl:w-80 xl:h-20 xxl:w-96 xxl:h-28  rounded-full">
                  <div className="xxl:hidden">
                    <Icon
                      icon="cib:visual-studio-code"
                      style={{ color: "white", fontSize: 40 }}
                    />
                  </div>
                  <div className="lg:hidden xl:hidden">
                    <Icon
                      icon="cib:visual-studio-code"
                      style={{ color: "white", fontSize: 70 }}
                    />
                  </div>
                  <p className="lg:text-2xl xl:text-2xl xxl:text-4xl font-bold">
                    Coding
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              {/* 3+ YEARS OF EXPERIENCE */}
              <div className="flex flex-col gap-5 text-center">
                <BouncingAnimation>
                  <h2 className="text-6xl xl:text-7xl xxl:text-8xl font-bold">
                    3+
                  </h2>
                </BouncingAnimation>
                <p className="text-2xl xl:text-3xl xxl:text-4xl font-medium">
                  Years <br />
                  experience
                </p>
              </div>
              <div className="bg-white w-1 h-44 lg:mx-5 xl:mx-14 xxl:mx-16 xxl:h-64"></div>
              {/* 20+ PROJECTS COMPLETED */}
              <div className="flex flex-col gap-5 text-center">
                <BouncingAnimation>
                  <h2 className="text-6xl xl:text-7xl xxl:text-8xl font-bold">
                    20+
                  </h2>
                </BouncingAnimation>
                <p className="text-2xl xl:text-3xl xxl:text-4xl font-medium">
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
