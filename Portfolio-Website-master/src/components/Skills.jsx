import React, { useEffect, useRef } from "react";
import * as THREE from "three";
// ICONIFY ICONS
import { Icon } from "@iconify/react";
import { BouncingAnimation } from "./ScrollAnimation";

const Skills = () => {
  return (
    <div>
      <div className="lg:hidden flex flex-col">
        <h2 className="text-base font-extrabold text-center">Skills</h2>
        <div className="flex flex-col items-center mt-5">
          <h3 className="text-sm font-semibold text-center">
            Design tools I Use
          </h3>
          <div className="flex flex-row gap-3 sm:gap-2">
            <div className="mt-10 flex flex-row items-center justify-center gap-3 py-2 px-4 bg-white rounded-full cursor-default">
              <div>
                <Icon icon="logos:figma" className="w-[20px] h-[20px]" />
              </div>
              <h3 className="text-black text-xs font-extralight">Figma</h3>
            </div>
            <div className="mt-10 flex flex-row items-center justify-center gap-3 py-2 px-4 bg-white rounded-full cursor-default">
              <div>
                <Icon icon="logos:adobe-xd" className="w-[20px] h-[20px]" />
              </div>
              <h3 className="text-black text-xs font-extralight">Adobe</h3>
            </div>
          </div>
          <h3 className="mt-10 text-sm font-semibold text-center">
            Technologies I Use
          </h3>
          <div className="flex flex-col gap-3">
            <div className="mt-10 flex flex-row items-center justify-center gap-3 py-2 px-4 bg-white rounded-full cursor-default">
              <div>
                <Icon icon="devicon:html5" className="w-[20px] h-[20px]" />
              </div>
              <h3 className="text-black text-xs font-extralight">Html</h3>
            </div>
          </div>
          <div className="mt-4 flex flex-row items-center justify-center gap-3 py-2 px-4 bg-white rounded-full cursor-default">
            <div>
              <Icon icon="devicon:css3" className="w-[20px] h-[20px]" />
            </div>
            <h3 className="text-black text-xs font-extralight">CSS</h3>
          </div>
          <div className="mt-4 flex flex-row items-center justify-center gap-3 py-2 px-4 bg-white rounded-full cursor-default">
            <div>
              <Icon
                icon="skill-icons:javascript"
                className="w-[20px] h-[20px]"
              />
            </div>
            <h3 className="text-black text-xs font-extralight">JavaScript</h3>
          </div>
          <div className="mt-4 flex flex-row items-center justify-center gap-3 py-2 px-4 bg-white rounded-full cursor-default">
            <div>
              <Icon icon="devicon:jquery" className="w-[20px] h-[20px]" />
            </div>
            <h3 className="text-black text-xs font-extralight">JQuery</h3>
          </div>
          <div className="mt-4 flex flex-row items-center justify-center gap-3 py-2 px-4 bg-white rounded-full cursor-default">
            <div>
              <Icon icon="devicon:react" className="w-[20px] h-[20px]" />
            </div>
            <h3 className="text-black text-xs font-extralight">React.js</h3>
          </div>
          <div className="mt-4 flex flex-row items-center justify-center gap-3 py-2 px-4 bg-white rounded-full cursor-default">
            <div>
              <Icon icon="devicon:redux" className="w-[20px] h-[20px]" />
            </div>
            <h3 className="text-black text-xs font-extralight">Redux</h3>
          </div>
          <div className="mt-4 flex flex-row items-center justify-center gap-3 py-2 px-4 bg-white rounded-full cursor-default">
            <div>
              <Icon icon="logos:threejs" className="w-[20px] h-[20px]" />
            </div>
            <h3 className="text-black text-xs font-extralight">Three.js</h3>
          </div>
          <div className="mt-4 flex flex-row items-center justify-center gap-3 py-2 px-4 bg-white rounded-full cursor-default">
            <div>
              <Icon icon="devicon:tailwindcss" className="w-[20px] h-[20px]" />
            </div>
            <h3 className="text-black text-xs font-extralight">Tailwind CSS</h3>
          </div>
          <div className="mt-4 flex flex-row items-center justify-center gap-3 py-2 px-4 bg-white rounded-full cursor-default">
            <div>
              <Icon icon="devicon:framermotion" className="w-[20px] h-[20px]" />
            </div>
            <h3 className="text-black text-xs font-extralight text-center">
              Framer
            </h3>
          </div>
        </div>
      </div>

      <div className="hidden  lg:flex flex-col">
        <h2 className="my-8 text-xl font-extrabold text-center">Skills</h2>
        <div className="flex flex-col items-center">
          <h3 className="text-base font-semibold text-center">
            Design Tools I Use
          </h3>
          <div className="flex flex-row gap-5">
            <BouncingAnimation>
              <div className="mt-16 flex flex-row items-center justify-center lg:gap-4 lg:py-3 lg:px-6 bg-white rounded-full cursor-default">
                <div>
                  <Icon icon="logos:figma" className="w-[24px] h-[24px]" />
                </div>
                <h3 className="text-black text-sm font-extralight">Figma</h3>
              </div>
            </BouncingAnimation>
            <BouncingAnimation>
              <div className="mt-16 flex flex-row items-center justify-center gap-3 lg:gap-4 lg:py-3 lg:px-6 bg-white rounded-full cursor-default">
                <div>
                  <Icon icon="logos:adobe-xd" className="w-[24px] h-[24px]" />
                </div>
                <h3 className="text-black text-sm font-extralight">Adobe</h3>
              </div>
            </BouncingAnimation>
          </div>
          <h3 className="mt-16 text-base font-semibold text-center">
            Technologies I Use
          </h3>
          <div className="flex flex-col lg:gap-3">
            <div className="flex flex-row lg:gap-3">
              <BouncingAnimation>
                <div className="mt-16 flex flex-row items-center justify-center gap-3 lg:gap-4 lg:py-3 lg:px-6 bg-white rounded-full cursor-default">
                  <div>
                    <Icon icon="devicon:html5" className="w-[24px] h-[24px]" />
                  </div>
                  <h3 className="text-black text-sm font-extralight">Html</h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="mt-16 flex flex-row items-center justify-center gap-3 lg:gap-4 lg:py-3 lg:px-6 bg-white rounded-full cursor-default">
                  <div>
                    <Icon icon="devicon:css3" className="w-[24px] h-[24px]" />
                  </div>
                  <h3 className="text-black text-sm font-extralight">CSS</h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="mt-16 flex flex-row items-center justify-center gap-3 lg:gap-4 lg:py-3 lg:px-6  bg-white rounded-full cursor-default">
                  <Icon
                    icon="skill-icons:javascript"
                    className="w-[24px] h-[24px]"
                  />
                  <h3 className="text-black text-sm font-extralight">
                    JavaScript
                  </h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="mt-16 flex flex-row items-center justify-center gap-3 lg:gap-4 lg:py-3 lg:px-6  bg-white rounded-full cursor-default">
                  <Icon icon="devicon:jquery" className="w-[24px] h-[24px]" />
                  <h3 className="text-black text-sm  font-extralight">
                    JQuery
                  </h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="mt-16 flex flex-row items-center justify-center gap-3 lg:gap-4 lg:py-3 lg:px-6   bg-white rounded-full cursor-default">
                  <div>
                    <Icon
                      icon="vscode-icons:file-type-scss"
                      className="w-[24px] h-[24px]"
                    />
                  </div>
                  <h3 className="text-black text-sm font-extralight">SCSS</h3>
                </div>
              </BouncingAnimation>
            </div>
            <div className="flex flex-row justify-center lg:gap-3">
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3 lg:gap-4 lg:py-3 lg:px-6  bg-white rounded-full cursor-default">
                  <div>
                    <Icon icon="devicon:react" className="w-[24px] h-[24px]" />
                  </div>
                  <h3 className="text-black text-sm  font-extralight">
                    React.js
                  </h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3 lg:gap-4 lg:py-3 lg:px-6  bg-white rounded-full cursor-default">
                  <div>
                    <Icon icon="devicon:redux" className="w-[24px] h-[24px]" />
                  </div>
                  <h3 className="text-black text-sm  font-extralight">Redux</h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3 lg:gap-4 lg:py-3 lg:px-6  bg-white rounded-full cursor-default">
                  <div>
                    <Icon icon="logos:threejs" className="w-[24px] h-[24px]" />
                  </div>
                  <h3 className="text-black text-sm font-extralight">
                    Three.js
                  </h3>
                </div>
              </BouncingAnimation>
            </div>
            <div className="flex flex-row justify-center lg:gap-3">
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3lg:gap-4 lg:py-3 lg:px-6  bg-white rounded-full cursor-default">
                  <div>
                    <Icon
                      icon="devicon:tailwindcss"
                      className="w-[24px] h-[24px]"
                    />
                  </div>
                  <h3 className="text-black text-sm font-extralight">
                    Tailwind CSS
                  </h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3 lg:gap-4 lg:py-3 lg:px-6  bg-white rounded-full cursor-default">
                  <div>
                    <Icon
                      icon="devicon:framermotion"
                      className="w-[24px] h-[24px]"
                    />
                  </div>
                  <h3 className="text-black text-sm  font-extralight">
                    Framer Motion
                  </h3>
                </div>
              </BouncingAnimation>
            </div>
            <div className="flex flex-row justify-center lg:gap-3">
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3lg:gap-4 lg:py-3 lg:px-6  bg-white rounded-full cursor-default">
                  <div>
                    <Icon icon="devicon:git" className="w-[24px] h-[24px]" />
                  </div>
                  <h3 className="text-black text-sm font-extralight">Git</h3>
                </div>
              </BouncingAnimation>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="mt-16 text-base font-extrabold text-center">
              DEVELOPMENT & PRODUCTIVITY <br />
              <h2 className="mt-4">TOOLS I USE</h2>
            </h2>
            <div className="mt-16 flex flex-row gap-5">
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3 lg:gap-4 lg:py-3 lg:px-6  bg-white rounded-full cursor-default">
                  <div>
                    <Icon
                      icon="logos:visual-studio-code"
                      className="w-[24px] h-[24px]"
                    />
                  </div>
                  <h3 className="text-black text-sm font-extralight text-center">
                    Visual Studio Code
                  </h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3 lg:gap-4 lg:py-3 lg:px-6  bg-white rounded-full cursor-default">
                  <div>
                    <Icon icon="devicon:gitlab" className="w-[24px] h-[24px]" />
                  </div>
                  <h3 className="text-black text-sm font-extralight">Gitlab</h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3 lg:gap-4 lg:py-3 lg:px-6  bg-white rounded-full cursor-default">
                  <div>
                    <Icon
                      icon="icon-park:github"
                      className="w-[24px] h-[24px]"
                    />
                  </div>
                  <h3 className="text-black text-sm font-extralight">Github</h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3 lg:gap-4 lg:py-3 lg:px-6  bg-white rounded-full cursor-default">
                  <div>
                    <Icon
                      icon="vscode-icons:file-type-postman"
                      className="w-[24px] h-[24px]"
                    />
                  </div>
                  <h3 className="text-black text-sm font-extralight">
                    Postman
                  </h3>
                </div>
              </BouncingAnimation>
            </div>
          </div>
          <div className="mt-16">
            <button className="flex flex-row items-center justify-center gap-3 lg:gap-4 lg:py-3 lg:px-6  bg-yellow-500 rounded-full cursor-pointer">
              <div>
                <Icon
                  icon="line-md:downloading-loop"
                  className="text-white w-[24px] h-[24px]"
                />
              </div>
              <h3 className="text-sm font-light text-white">Resume</h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
