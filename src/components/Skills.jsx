import React, { useEffect, useRef } from "react";
import * as THREE from "three";
// ICONIFY ICONS
import { Icon } from "@iconify-icon/react";
import { BouncingAnimation } from "./ScrollAnimation";

const Skills = () => {
  return (
    <div>
      {/* SKILLS COMPONENT FOR SM AND MD SCREENS */}
      <div className="lg:hidden flex flex-col">
        <h2 className="text-lg md:text-xl  font-extrabold text-center">
          Skills
        </h2>
        <div className="flex flex-col items-center mt-5">
          <h3 className="text-base md:text-lg font-semibold text-center">
            Design tools I Use
          </h3>
          {/* DESIGN TOOLS */}
          <div className="flex flex-row gap-3 sm:gap-2">
            <div className="mt-10 flex flex-row items-center justify-center gap-3 py-2 px-4 bg-white rounded-full cursor-default">
              <div className="block md:hidden">
                <Icon icon="logos:figma" style={{ fontSize: 25 }} />
              </div>
              <div className="hidden md:block">
                <Icon icon="logos:figma" style={{ fontSize: 25 }} />
              </div>
              <h3 className="text-black text-sm md:text-base font-extralight">
                Figma
              </h3>
            </div>
            <div className="mt-10 flex flex-row items-center justify-center gap-3 py-2 px-4 bg-white rounded-full cursor-default">
              <div className="block md:hidden">
                <Icon icon="logos:adobe-xd" style={{ fontSize: 25 }} />
              </div>
              <div className="hidden md:block">
                <Icon icon="logos:adobe-xd" style={{ fontSize: 25 }} />
              </div>
              <h3 className="text-black text-sm md:text-base font-extralight">
                Adobe
              </h3>
            </div>
          </div>
          {/* TECHNOLOGIES */}
          <h3 className="mt-10 text-base md:text-lg font-semibold text-center">
            Technologies I Use
          </h3>
          {/* TECHNOLOGIES I USE */}
          {/* HTML5 */}
          <div className="flex flex-col gap-3">
            <div className="mt-10 flex flex-row items-center justify-center gap-3 py-2 px-4 bg-white rounded-full cursor-default">
              <div className="block md:hidden">
                <Icon icon="devicon:html5" style={{ fontSize: 25 }} />
              </div>
              <div className="hidden md:block">
                <Icon icon="devicon:html5" style={{ fontSize: 25 }} />
              </div>
              <h3 className="text-black text-sm md:text-base font-extralight">
                Html
              </h3>
            </div>
          </div>
          {/* CSS3 */}
          <div className="mt-4 flex flex-row items-center justify-center gap-3 py-2 px-4 bg-white rounded-full cursor-default">
            <div className="block md:hidden">
              <Icon icon="devicon:css3" style={{ fontSize: 25 }} />
            </div>
            <div className="hidden md:block">
              <Icon icon="devicon:css3" style={{ fontSize: 25 }} />
            </div>
            <h3 className="text-black text-sm md:text-base font-extralight">
              CSS
            </h3>
          </div>
          {/* JAVA SCRIPT */}
          <div className="mt-4 flex flex-row items-center justify-center gap-3 py-2 px-4 bg-white rounded-full cursor-default">
            <div className="block md:hidden">
              <Icon icon="skill-icons:javascript" style={{ fontSize: 25 }} />
            </div>
            <div className="hidden md:block">
              <Icon icon="skill-icons:javascript" style={{ fontSize: 25 }} />
            </div>
            <h3 className="text-black text-sm md:text-base font-extralight">
              JavaScript
            </h3>
          </div>
          {/* JQUERY */}
          <div className="mt-4 flex flex-row items-center justify-center gap-3 py-2 px-4 bg-white rounded-full cursor-default">
            <div className="block md:hidden">
              <Icon icon="devicon:jquery" style={{ fontSize: 25 }} />
            </div>
            <div className="hidden md:block">
              <Icon icon="devicon:jquery" style={{ fontSize: 25 }} />
            </div>
            <h3 className="text-black text-sm md:text-base font-extralight">
              JQuery
            </h3>
          </div>
          {/* REACT JS */}
          <div className="mt-4 flex flex-row items-center justify-center gap-3 py-2 px-4 bg-white rounded-full cursor-default">
            <div className="block md:hidden">
              <Icon icon="devicon:react" style={{ fontSize: 25 }} />
            </div>
            <div className="hidden md:block">
              <Icon icon="devicon:react" style={{ fontSize: 25 }} />
            </div>
            <h3 className="text-black text-sm md:text-base font-extralight">
              React.js
            </h3>
          </div>
          {/* REDUX */}
          <div className="mt-4 flex flex-row items-center justify-center gap-3 py-2 px-4 bg-white rounded-full cursor-default">
            <div className="block md:hidden">
              <Icon icon="devicon:redux" style={{ fontSize: 25 }} />
            </div>
            <div className="hidden md:block">
              <Icon icon="devicon:redux" style={{ fontSize: 25 }} />
            </div>
            <h3 className="text-black text-sm md:text-base font-extralight">
              Redux
            </h3>
          </div>
          {/* THREE JS */}
          <div className="mt-4 flex flex-row items-center justify-center gap-3 py-2 px-4 bg-white rounded-full cursor-default">
            <div className="block md:hidden">
              <Icon icon="logos:threejs" style={{ fontSize: 25 }} />
            </div>
            <div className="hidden md:block">
              <Icon icon="logos:threejs" style={{ fontSize: 25 }} />
            </div>
            <h3 className="text-black text-sm md:text-base font-extralight">
              Three.js
            </h3>
          </div>
          {/* TAILWIND CSS */}
          <div className="mt-4 flex flex-row items-center justify-center gap-3 py-2 px-4 bg-white rounded-full cursor-default">
            <div className="block md:hidden">
              <Icon icon="devicon:tailwindcss" style={{ fontSize: 25 }} />
            </div>
            <div className="hidden md:block">
              <Icon icon="devicon:tailwindcss" style={{ fontSize: 25 }} />
            </div>
            <h3 className="text-black text-sm md:text-base font-extralight">
              Tailwind CSS
            </h3>
          </div>
          {/* FRAMER MOTION */}
          <div className="mt-4 flex flex-row items-center justify-center gap-3 py-2 px-4 bg-white rounded-full cursor-default">
            <div className="block md:hidden">
              <Icon icon="devicon:framermotion" style={{ fontSize: 25 }} />
            </div>
            <div className="hidden md:block">
              <Icon icon="devicon:framermotion" style={{ fontSize: 25 }} />
            </div>
            <h3 className="text-black text-sm md:text-base font-extralight text-center">
              Framer
            </h3>
          </div>
        </div>
      </div>

      {/* SKILLS COMPONENT FOR LG,XL AND XXL SCREENS */}
      <div className="hidden  lg:flex flex-col">
        <h2 className="my-8 text-2xl xl:text-3xl font-extrabold text-center">
          Skills
        </h2>
        <div className="flex flex-col items-center">
          <h3 className="text-xl xl:text-2xl font-semibold text-center">
            Design Tools I Use
          </h3>
          {/* DESIGN TOOLS */}
          <div className="flex flex-row gap-5">
            <BouncingAnimation>
              <div className="mt-16 flex flex-row items-center justify-center xl:gap-5 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6 bg-white rounded-full cursor-default">
                <div className="2xl:hidden">
                  <Icon icon="logos:figma" style={{ fontSize: 25 }} />
                </div>
                <div className="lg:hidden xl:hidden 2xl:block ">
                  <Icon icon="logos:figma" style={{ fontSize: 25 }} />
                </div>
                <h3 className="text-black text-base xl:text-lg font-extralight">
                  Figma
                </h3>
              </div>
            </BouncingAnimation>
            <BouncingAnimation>
              <div className="mt-16 flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6 bg-white rounded-full cursor-default">
                <div className="2xl:hidden">
                  <Icon icon="logos:adobe-xd" style={{ fontSize: 25 }} />
                </div>
                <div className="lg:hidden xl:hidden 2xl:block">
                  <Icon icon="logos:adobe-xd" style={{ fontSize: 25 }} />
                </div>
                <h3 className="text-black text-base xl:text-lg font-extralight">
                  Adobe
                </h3>
              </div>
            </BouncingAnimation>
          </div>
          <h3 className="mt-16 text-xl xl:text-2xl font-semibold text-center">
            Technologies I Use
          </h3>
          {/* TECHNOLOGIES */}
          <div className="flex flex-col lg:gap-3 xl:gap-5">
            <div className="flex flex-row lg:gap-3 xl:gap-5">
              <BouncingAnimation>
                <div className="mt-16 flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6 bg-white rounded-full cursor-default">
                  <div className="2xl:hidden">
                    <Icon icon="devicon:html5" style={{ fontSize: 25 }} />
                  </div>
                  <div className="lg:hidden xl:hidden 2xl:block">
                    <Icon icon="devicon:html5" style={{ fontSize: 25 }} />
                  </div>
                  <h3 className="text-black text-base xl:text-lg font-extralight">
                    Html
                  </h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="mt-16 flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6 bg-white rounded-full cursor-default">
                  <div className="2xl:hidden">
                    <Icon icon="devicon:css3" style={{ fontSize: 25 }} />
                  </div>
                  <div className="lg:hidden xl:hidden 2xl:block">
                    <Icon icon="devicon:css3" style={{ fontSize: 25 }} />
                  </div>
                  <h3 className="text-black text-base xl:text-lg font-extralight">
                    CSS
                  </h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="mt-16 flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6  bg-white rounded-full cursor-default">
                  <div className="2xl:hidden">
                    <Icon
                      icon="skill-icons:javascript"
                      style={{ fontSize: 25 }}
                    />
                  </div>
                  <div className="lg:hidden xl:hidden 2xl:block">
                    <Icon
                      icon="skill-icons:javascript"
                      style={{ fontSize: 25 }}
                    />
                  </div>
                  <h3 className="text-black text-base xl:text-lg font-extralight">
                    JavaScript
                  </h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="mt-16 flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6  bg-white rounded-full cursor-default">
                  <div className="2xl:hidden">
                    <Icon icon="devicon:jquery" style={{ fontSize: 25 }} />
                  </div>
                  <div className="lg:hidden xl:hidden 2xl:block">
                    <Icon icon="devicon:jquery" style={{ fontSize: 25 }} />
                  </div>
                  <h3 className="text-black text-base xl:text-lg  font-extralight">
                    JQuery
                  </h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="mt-16 flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6   bg-white rounded-full cursor-default">
                  <div className="2xl:hidden">
                    <Icon
                      icon="vscode-icons:file-type-scss"
                      style={{ fontSize: 25 }}
                    />
                  </div>
                  <div className="lg:hidden xl:hidden 2xl:block">
                    <div className="2xl:hidden">
                      <Icon
                        icon="vscode-icons:file-type-scss"
                        style={{ fontSize: 25 }}
                      />
                    </div>
                    <div className="lg:hidden xl:hidden 2xl:block">
                      <Icon
                        icon="vscode-icons:file-type-scss"
                        style={{ fontSize: 25 }}
                      />
                    </div>
                  </div>
                  <h3 className="text-black text-base xl:text-lg  font-extralight">
                    SCSS
                  </h3>
                </div>
              </BouncingAnimation>
            </div>
            <div className="flex flex-row justify-center lg:gap-3 xl:gap-5 2xl:gap-4">
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6  bg-white rounded-full cursor-default">
                  <div className="2xl:hidden">
                    <Icon icon="devicon:react" style={{ fontSize: 25 }} />
                  </div>
                  <div className="lg:hidden xl:hidden 2xl:block">
                    <Icon icon="devicon:react" style={{ fontSize: 25 }} />
                  </div>
                  <h3 className="text-black text-base xl:text-lg  font-extralight">
                    React.js
                  </h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6  bg-white rounded-full cursor-default">
                  <div className="2xl:hidden">
                    <Icon icon="devicon:redux" style={{ fontSize: 25 }} />
                  </div>
                  <div className="lg:hidden xl:hidden 2xl:block">
                    <Icon icon="devicon:redux" style={{ fontSize: 25 }} />
                  </div>
                  <h3 className="text-black text-base xl:text-lg  font-extralight">
                    Redux
                  </h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6  bg-white rounded-full cursor-default">
                  <div className="2xl:hidden">
                    <Icon icon="logos:threejs" style={{ fontSize: 25 }} />
                  </div>
                  <div className="lg:hidden xl:hidden 2xl:block">
                    <Icon icon="logos:threejs" style={{ fontSize: 25 }} />
                  </div>
                  <h3 className="text-black text-base xl:text-lg  font-extralight">
                    Three.js
                  </h3>
                </div>
              </BouncingAnimation>
            </div>
            <div className="flex flex-row justify-center lg:gap-3 xl:gap-5 2xl:gap-3">
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6  bg-white rounded-full cursor-default">
                  <div className="2xl:hidden">
                    <Icon icon="devicon:tailwindcss" style={{ fontSize: 25 }} />
                  </div>
                  <div className="lg:hidden xl:hidden 2xl:block">
                    <Icon icon="devicon:tailwindcss" style={{ fontSize: 25 }} />
                  </div>
                  <h3 className="text-black text-base xl:text-lg font-extralight">
                    Tailwind CSS
                  </h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6  bg-white rounded-full cursor-default">
                  <div className="2xl:hidden">
                    <Icon
                      icon="devicon:framermotion"
                      style={{ fontSize: 25 }}
                    />
                  </div>
                  <div className="lg:hidden xl:hidden 2xl:block">
                    <Icon
                      icon="devicon:framermotion"
                      style={{ fontSize: 25 }}
                    />
                  </div>
                  <h3 className="text-black text-base xl:text-lg  font-extralight">
                    Framer Motion
                  </h3>
                </div>
              </BouncingAnimation>
            </div>
            <div className="flex flex-row justify-center lg:gap-3 xl:gap-5">
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6  bg-white rounded-full cursor-default">
                  <div className="2xl:hidden">
                    <Icon icon="devicon:git" style={{ fontSize: 25 }} />
                  </div>
                  <div className="lg:hidden xl:hidden 2xl:block">
                    <Icon icon="devicon:git" style={{ fontSize: 25 }} />
                  </div>
                  <h3 className="text-black text-base xl:text-lg  font-extralight">
                    Git
                  </h3>
                </div>
              </BouncingAnimation>
            </div>
          </div>
          {/* DEVELOPMENT & PRODUCTIVITY TOOLS */}
          <div className="flex flex-col">
            <h2 className="mt-16 text-xl xl:text-2xl font-extrabold text-center">
              DEVELOPMENT & PRODUCTIVITY <br />
              <h2 className="mt-4">TOOLS I USE</h2>
            </h2>
            {/* DEVELOPMENT TOOLS */}
            <div className="mt-16 flex flex-row gap-5">
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6  bg-white rounded-full cursor-default">
                  <div className="2xl:hidden">
                    <Icon
                      icon="logos:visual-studio-code"
                      style={{ fontSize: 25 }}
                    />
                  </div>
                  <div className="lg:hidden xl:hidden 2xl:block">
                    <Icon
                      icon="logos:visual-studio-code"
                      style={{ fontSize: 25 }}
                    />
                  </div>
                  <h3 className="text-black text-base xl:text-lg  font-extralight text-center">
                    Visual Studio Code
                  </h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6  bg-white rounded-full cursor-default">
                  <div className="2xl:hidden">
                    <Icon icon="devicon:gitlab" style={{ fontSize: 25 }} />
                  </div>
                  <div className="lg:hidden xl:hidden 2xl:block">
                    <Icon icon="devicon:gitlab" style={{ fontSize: 25 }} />
                  </div>
                  <h3 className="text-black text-base xl:text-lg  font-extralight">
                    Gitlab
                  </h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6  bg-white rounded-full cursor-default">
                  <div className="2xl:hidden">
                    <Icon icon="icon-park:github" style={{ fontSize: 25 }} />
                  </div>
                  <div className="lg:hidden xl:hidden 2xl:block">
                    <Icon icon="icon-park:github" style={{ fontSize: 25 }} />
                  </div>
                  <h3 className="text-black text-base xl:text-lg  font-extralight">
                    Github
                  </h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6  bg-white rounded-full cursor-default">
                  <div className="2xl:hidden">
                    <Icon
                      icon="vscode-icons:file-type-postman"
                      style={{ fontSize: 25 }}
                    />
                  </div>
                  <div className="lg:hidden xl:hidden 2xl:block">
                    <Icon
                      icon="vscode-icons:file-type-postman"
                      style={{ fontSize: 25 }}
                    />
                  </div>
                  <h3 className="text-black text-base xl:text-lg  font-extralight">
                    Postman
                  </h3>
                </div>
              </BouncingAnimation>
            </div>
          </div>
          {/* RESUME DOWNLOAD */}
          <div className="mt-16">
            <button className="flex flex-row items-center justify-center bg-yellow-500 hover:bg-yellow-600 rounded-full gap-3 text-black px-10 py-2">
              <div className="hidden lg:block 2xl:hidden">
                <Icon
                  icon="line-md:downloading-loop"
                  style={{ fontSize: 35, fontWeight: "bold" }}
                  className="text-white"
                />
              </div>
              <div className="hidden lg:hidden xl:hidden 2xl:block">
                <Icon
                  icon="line-md:downloading-loop"
                  style={{ fontSize: 40, fontWeight: "bold" }}
                  className="text-white"
                />
              </div>
              <h3 className="text-base xl:text-lg font-light text-white">
                Resume
              </h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
