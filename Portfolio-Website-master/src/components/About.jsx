import React from "react";
import { Icon } from '@iconify/react';
import { BouncingAnimation } from "./ScrollAnimation";

const About = () => {
  return (
    <div>
      <div className="flex flex-col lg:hidden">
        <h2 className="text-base font-semibold text-center sm:mb-6">
          About Me
        </h2>
        <div className="flex flex-col text-start">
          <p className="text-xs my-4 font-light text-center">
            I love to code. I have been coding for more than 3 years.
          </p>
        </div>
        <div className="flex flex-col items-center mt-6">
          <h2 className="text-base mb-4 font-semibold text-center">
            I like:
          </h2>
          <div className="flex flex-col items-center gap-5">
            <div className="px-8 flex flex-row items-center justify-center gap-5 bg-white bg-opacity-25 w-full h-12 rounded-full">
              <div>
                <Icon
                  icon="mingcute:music-line"
                  className="text-white w-[20px] h-[20px]"
                />
              </div>
              <p className="text-sm font-medium">Music</p>
            </div>
            <div className="px-8 flex flex-row items-center justify-center gap-5 bg-white bg-opacity-25 w-full h-12 rounded-full">
              <div>
                <Icon
                  icon="healthicons:weights"
                  className="text-white w-[24px] h-[24px]"
                />
              </div>
              <p className="text-sm font-medium">Working Out</p>
            </div>
            <div className="px-8 flex flex-row items-center justify-center gap-5 bg-white bg-opacity-25 w-full h-12 rounded-full">
              <div>
                <Icon
                  icon="material-symbols:travel"
                  className="text-white w-[24px] h-[24px]"
                />
              </div>
              <p className="text-sm font-medium">Travelling</p>
            </div>
            <div className="px-8 flex flex-row items-center justify-center gap-5 bg-white bg-opacity-25 w-full h-12 rounded-full">
              <div className="block :hidden">
                <Icon
                  icon="cib:visual-studio-code"
                  className="text-white w-[20px] h-[20px]"
                />
              </div>
              <p className="text-sm font-medium">Coding</p>
            </div>
            <div className="mt-6 flex flex-col items-center gap-4">
              <h2 className="text-2xl font-bold">3+</h2>
              <p className="text-sm font-medium text-center">
                Years <br />
                experience
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 text-center">
              <h2 className="text-2xl font-bold">20+</h2>
              <p className="text-sm font-medium">
                Completed <br />
                projects
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col hidden lg:flex">
        <h2 className="mt-5 text-white text-xl font-bold text-center mb-16">
          About Me
        </h2>
        <div className="flex flex-col gap-8">
          <h2 className="text-lg font-semibold">
            Coding is my passion
          </h2>
          <p className="text-sm font-light">
            I am self-taught developer who excel in problem-solving, <br />
            innovation, and tackling complex challenges with <br />a relentless
            passion for continuous learning.
          </p>
        </div>
        <div className="flex flex-col my-10">
          <h2 className="text-base font-semibold mb-6">I like:</h2>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col gap-3.5">
              <div className="flex flex-row gap-4">
                <div className="px-8 flex flex-row items-center justify-center gap-4 bg-white bg-opacity-25 w-56 h-14 rounded-full">
                  <div>
                    <Icon
                      icon="mingcute:music-line"
                      className="text-white w-[24px] h-[24px]"
                    />
                  </div>
                  <p className="text-base font-bold">
                    Music
                  </p>
                </div>
                <div className="px-8 flex flex-row items-center justify-center gap-3 bg-white bg-opacity-25 w-56 h-14 rounded-full">
                  <div>
                    <Icon
                      icon="healthicons:weights"
                      className="text-white w-[24px] h-[24px]"
                    />
                  </div>
                  <p className="text-base font-bold">
                    Working Out
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="px-8 flex flex-row items-center justify-center gap-3 bg-white bg-opacity-25 w-56 h-14 rounded-full">
                  <div>
                    <Icon
                      icon="material-symbols:travel"
                      className="text-white w-[24px] h-[24px]"
                    />
                  </div>
                  <p className="text-base font-bold">
                    Travelling
                  </p>
                </div>
                <div className="px-8 flex flex-row items-center justify-center gap-6 bg-white bg-opacity-25 w-56 h-14 rounded-full">
                  <div>
                    <Icon
                      icon="cib:visual-studio-code"
                      className="text-white w-[20px] h-[20px]"
                    />
                  </div>
                  <p className="text-base font-bold">
                    Coding
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex flex-col gap-5 text-center">
                <BouncingAnimation>
                  <h2 className="text-3xl font-bold">
                    3+
                  </h2>
                </BouncingAnimation>
                <p className="text-sm font-medium">
                  Years <br />
                  experience
                </p>
              </div>
              <div className="bg-white w-0.5 h-36 mx-8 rounded-full"></div>
              <div className="flex flex-col gap-5 text-center">
                <BouncingAnimation>
                  <h2 className="text-3xl font-bold">
                    20+
                  </h2>
                </BouncingAnimation>
                <p className="text-sm font-medium">
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
