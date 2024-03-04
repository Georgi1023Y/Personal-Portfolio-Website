import React, { useEffect, useRef } from "react";
import * as THREE from "three";
// ICONIFY ICONS
import { Icon } from "@iconify-icon/react";
import { BouncingAnimation } from "./ScrollAnimation";

const Skills = () => {
  return (
    <div>
      {/* SKILLS COMPONENT FOR SM AND MD SCREENS */}
      <div className="lg:hidden xl:hidden xxl:hidden flex flex-col">
        <h2 className="sm:text-3xl md:text-5xl  font-extrabold text-center">
          Skills
        </h2>
        <div className="flex flex-col items-center mt-10">
          <h2 className="sm:text-xl md:text-3xl font-semibold text-center">
            Design tools I Use
          </h2>
          {/* DESIGN TOOLS */}
          <div className="flex flex-row gap-3 sm:gap-2">
            <div className="mt-10 flex flex-row items-center justify-center sm:gap-3 sm:py-2.5 sm:px-5 md:gap-4 md:py-3 md:px-7 bg-white rounded-full">
              <div className="md:hidden">
                <Icon icon="logos:figma" style={{ fontSize: 35 }} />
              </div>
              <div className="sm:hidden">
                <Icon icon="logos:figma" style={{ fontSize: 50 }} />
              </div>
              <h3 className="text-black sm:text-xl md:text-2xl font-extralight">
                Figma
              </h3>
            </div>
            <div className="mt-10 flex flex-row items-center justify-center sm:gap-3 sm:py-2 sm:px-5 md:gap-4 md:py-3 md:px-7 bg-white rounded-full">
              <div className="md:hidden">
                <Icon icon="logos:adobe-xd" style={{ fontSize: 35 }} />
              </div>
              <div className="sm:hidden">
                <Icon icon="logos:adobe-xd" style={{ fontSize: 50 }} />
              </div>
              <h3 className="text-black sm:text-xl md:text-2xl font-extralight">
                Adobe
              </h3>
            </div>
          </div>
          {/* TECHNOLOGIES */}
          <h2 className="mt-10 sm:text-xl md:text-3xl font-semibold text-center">
            Technologies I Use
          </h2>
          {/* TECHNOLOGIES I USE */}
          {/* HTML5 */}
          <div className="flex flex-col gap-3">
            <div className="mt-10 flex flex-row items-center justify-center sm:gap-2 sm:py-2.5 sm:px-5  md:gap-4 md:py-3 md:px-8 bg-white rounded-full">
              <div className="md:hidden">
                <Icon icon="devicon:html5" style={{ fontSize: 35 }} />
              </div>
              <div className="sm:hidden">
                <Icon icon="devicon:html5" style={{ fontSize: 50 }} />
              </div>
              <h3 className="text-black sm:text-xl md:text-2xl font-extralight">
                Html5
              </h3>
            </div>
          </div>
          {/* CSS3 */}
          <div className="mt-4 flex flex-row items-center justify-center sm:gap-2 sm:py-2.5 sm:px-5  md:gap-4 md:py-3 md:px-8 bg-white rounded-full">
            <div className="md:hidden">
              <Icon icon="devicon:css3" style={{ fontSize: 35 }} />
            </div>
            <div className="sm:hidden">
              <Icon icon="devicon:css3" style={{ fontSize: 50 }} />
            </div>
            <h3 className="text-black sm:text-xl md:text-2xl font-extralight">
              CSS3
            </h3>
          </div>
          {/* JAVA SCRIPT */}
          <div className="mt-4 flex flex-row items-center justify-center sm:gap-2.5 sm:py-2.5 sm:px-5 md:gap-4 md:py-3 md:px-8 bg-white rounded-full">
            <div className="md:hidden">
              <Icon icon="skill-icons:javascript" style={{ fontSize: 35 }} />
            </div>
            <div className="sm:hidden">
              <Icon icon="skill-icons:javascript" style={{ fontSize: 50 }} />
            </div>
            <h3 className="text-black sm:text-xl md:text-2xl font-extralight">
              JavaScript
            </h3>
          </div>
          {/* JQUERY */}
          <div className="mt-4 flex flex-row items-center justify-center sm:gap-2.5 sm:py-2.5 sm:px-5 md:gap-4 md:py-3 md:px-8 bg-white rounded-full">
            <div className="md:hidden">
              <Icon icon="devicon:jquery" style={{ fontSize: 35 }} />
            </div>
            <div className="sm:hidden">
              <Icon icon="devicon:jquery" style={{ fontSize: 50 }} />
            </div>
            <h3 className="text-black sm:text-xl md:text-2xl font-extralight">
              JQuery
            </h3>
          </div>
          {/* SCSS */}
          <div className="mt-4 flex flex-row items-center justify-center sm:gap-2.5 sm:py-2.5 sm:px-5 md:gap-4 md:py-3 md:px-8  bg-white rounded-full">
            <div className="md:hidden">
              <Icon
                icon="vscode-icons:file-type-scss"
                style={{ fontSize: 35 }}
              />
            </div>
            <div className="sm:hidden">
              <div className="md:hidden">
                <Icon
                  icon="vscode-icons:file-type-scss"
                  style={{ fontSize: 35 }}
                />
              </div>
              <div className="sm:hidden">
                <Icon
                  icon="vscode-icons:file-type-scss"
                  style={{ fontSize: 50 }}
                />
              </div>
            </div>
            <h3 className="text-black sm:text-xl  md:text-2xl font-extralight">
              SCSS
            </h3>
          </div>
          {/* REACT JS */}
          <div className="mt-4 flex flex-row items-center justify-center sm:gap-2.5 sm:py-2.5 sm:px-5 md:gap-4 md:py-3 md:px-8 bg-white rounded-full">
            <div className="md:hidden">
              <Icon icon="devicon:react" style={{ fontSize: 35 }} />
            </div>
            <div className="sm:hidden">
              <Icon icon="devicon:react" style={{ fontSize: 50 }} />
            </div>
            <h3 className="text-black sm:text-xl md:text-2xl font-extralight">
              ReactJS
            </h3>
          </div>
          {/* REDUX */}
          <div className="mt-4 flex flex-row items-center justify-center sm:gap-2.5 sm:py-2.5 sm:px-5 md:gap-4 md:py-3 md:px-8 bg-white rounded-full">
            <div className="md:hidden">
              <Icon icon="devicon:redux" style={{ fontSize: 35 }} />
            </div>
            <div className="sm:hidden">
              <Icon icon="devicon:redux" style={{ fontSize: 50 }} />
            </div>
            <h3 className="text-black sm:text-xl md:text-2xl font-extralight">
              Redux
            </h3>
          </div>
          {/* THREE JS */}
          <div className="mt-4 flex flex-row items-center justify-center sm:gap-2.5 sm:py-2.5 sm:px-5 md:gap-4 md:py-3 md:px-8 bg-white rounded-full">
            <div className="md:hidden">
              <Icon icon="logos:threejs" style={{ fontSize: 35 }} />
            </div>
            <div className="sm:hidden">
              <Icon icon="logos:threejs" style={{ fontSize: 50 }} />
            </div>
            <h3 className="text-black sm:text-xl md:text-2xl font-extralight">
              Three JS
            </h3>
          </div>
          {/* TAILWIND CSS */}
          <div className="mt-4 flex flex-row items-center justify-center sm:gap-2.5 sm:py-2.5 sm:px-5 md:gap-4 md:py-3 md:px-8 bg-white rounded-full">
            <div className="md:hidden">
              <Icon icon="devicon:tailwindcss" style={{ fontSize: 35 }} />
            </div>
            <div className="sm:hidden">
              <Icon icon="devicon:tailwindcss" style={{ fontSize: 50 }} />
            </div>
            <h3 className="text-black sm:text-xl md:text-2xl font-extralight">
              Tailwind CSS
            </h3>
          </div>
          {/* FRAMER MOTION */}
          <div className="mt-4 flex flex-row items-center justify-center sm:gap-2.5 sm:py-2.5 sm:px-5 md:gap-4 md:py-3 md:px-8 bg-white rounded-full">
            <div className="md:hidden">
              <Icon icon="devicon:framermotion" style={{ fontSize: 35 }} />
            </div>
            <div className="sm:hidden">
              <Icon icon="devicon:framermotion" style={{ fontSize: 50 }} />
            </div>
            <h3 className="text-black sm:text-xl md:text-2xl font-extralight text-center">
              Framer
            </h3>
          </div>
        </div>
      </div>

      {/* SKILLS COMPONENT FOR LG,XL AND XXL SCREENS */}
      <div className="sm:hidden md:hidden flex flex-col">
        <h2 className="my-16 lg:text-4xl xl:text-5xl xxl:text-6xl font-extrabold text-center">
          Skills
        </h2>
        <div className="flex flex-col items-center">
          <h2 className="mt-7 lg:text-3xl xl:text-3xl xxl:text-5xl font-semibold text-center">
            Design Tools I Use
          </h2>
          {/* DESIGN TOOLS */}
          <div className="flex flex-row gap-5">
            <BouncingAnimation>
              <div className="mt-16 flex flex-row items-center justify-center xl:gap-5 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6 xxl:gap-5 xxl:px-8 xxl:py-6 bg-white rounded-full">
                <div className="xxl:hidden">
                  <Icon icon="logos:figma" style={{ fontSize: 35 }} />
                </div>
                <div className="lg:hidden xl:hidden">
                  <Icon icon="logos:figma" style={{ fontSize: 50 }} />
                </div>
                <h3 className="text-black text-xl xxl:text-3xl font-extralight">
                  Figma
                </h3>
              </div>
            </BouncingAnimation>
            <BouncingAnimation>
              <div className="mt-16 flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6 xxl:gap-5 xxl:px-8 xxl:py-6 bg-white rounded-full">
                <div className="xxl:hidden">
                  <Icon icon="logos:adobe-xd" style={{ fontSize: 35 }} />
                </div>
                <div className="lg:hidden xl:hidden">
                  <Icon icon="logos:adobe-xd" style={{ fontSize: 50 }} />
                </div>
                <h3 className="text-black text-xl xxl:text-3xl font-extralight">
                  Adobe
                </h3>
              </div>
            </BouncingAnimation>
          </div>
          <h2 className="mt-16 lg:text-3xl xl:text-3xl xxl:text-5xl font-semibold text-center">
            Technologies I Use
          </h2>
          {/* TECHNOLOGIES */}
          <div className="flex flex-col lg:gap-3 xl:gap-5 xxl:gap-6">
            <div className="flex flex-row lg:gap-3 xl:gap-5 xxl:gap-6">
              <BouncingAnimation>
                <div className="mt-16 flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6 xxl:gap-5 xxl:px-8 xxl:py-6 bg-white rounded-full">
                  <div className="xxl:hidden">
                    <Icon icon="devicon:html5" style={{ fontSize: 35 }} />
                  </div>
                  <div className="lg:hidden xl:hidden">
                    <Icon icon="devicon:html5" style={{ fontSize: 50 }} />
                  </div>
                  <h3 className="text-black text-xl xxl:text-3xl font-extralight">
                    Html5
                  </h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="mt-16 flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6 xxl:gap-5 xxl:px-8 xxl:py-6 bg-white rounded-full">
                  <div className="xxl:hidden">
                    <Icon icon="devicon:css3" style={{ fontSize: 35 }} />
                  </div>
                  <div className="lg:hidden xl:hidden">
                    <Icon icon="devicon:css3" style={{ fontSize: 50 }} />
                  </div>
                  <h3 className="text-black text-xl xxl:text-3xl font-extralight">
                    CSS3
                  </h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="mt-16 flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6 xxl:gap-5 xxl:px-8 xxl:py-6 bg-white rounded-full">
                  <div className="xxl:hidden">
                    <Icon
                      icon="skill-icons:javascript"
                      style={{ fontSize: 35 }}
                    />
                  </div>
                  <div className="lg:hidden xl:hidden">
                    <Icon
                      icon="skill-icons:javascript"
                      style={{ fontSize: 50 }}
                    />
                  </div>
                  <h3 className="text-black text-xl xxl:text-3xl font-extralight">
                    JavaScript
                  </h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="mt-16 flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6 xxl:gap-5 xxl:px-8 xxl:py-6 bg-white rounded-full">
                  <div className="xxl:hidden">
                    <Icon icon="devicon:jquery" style={{ fontSize: 35 }} />
                  </div>
                  <div className="lg:hidden xl:hidden">
                    <Icon icon="devicon:jquery" style={{ fontSize: 50 }} />
                  </div>
                  <h3 className="text-black text-xl xxl:text-3xl font-extralight">
                    JQuery
                  </h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="mt-16 flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6 xxl:gap-5 xxl:px-8 xxl:py-6  bg-white rounded-full">
                  <div className="xxl:hidden">
                    <Icon
                      icon="vscode-icons:file-type-scss"
                      style={{ fontSize: 35 }}
                    />
                  </div>
                  <div className="lg:hidden xl:hidden">
                    <div className="xxl:hidden">
                      <Icon
                        icon="vscode-icons:file-type-scss"
                        style={{ fontSize: 35 }}
                      />
                    </div>
                    <div className="lg:hidden xl:hidden">
                      <Icon
                        icon="vscode-icons:file-type-scss"
                        style={{ fontSize: 50 }}
                      />
                    </div>
                  </div>
                  <h3 className="text-black text-xl xxl:text-3xl font-extralight">
                    SCSS
                  </h3>
                </div>
              </BouncingAnimation>
            </div>
            <div className="flex flex-row justify-center lg:gap-3 xl:gap-5 xxl:gap-4">
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6 xxl:gap-5 xxl:px-8 xxl:py-6 bg-white rounded-full">
                  <div className="xxl:hidden">
                    <Icon icon="devicon:react" style={{ fontSize: 35 }} />
                  </div>
                  <div className="lg:hidden xl:hidden">
                    <Icon icon="devicon:react" style={{ fontSize: 50 }} />
                  </div>
                  <h3 className="text-black text-xl xxl:text-3xl font-extralight">
                    ReactJS
                  </h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6 xxl:gap-5 xxl:px-8 xxl:py-6 bg-white rounded-full">
                  <div className="xxl:hidden">
                    <Icon icon="devicon:redux" style={{ fontSize: 35 }} />
                  </div>
                  <div className="lg:hidden xl:hidden">
                    <Icon icon="devicon:redux" style={{ fontSize: 50 }} />
                  </div>
                  <h3 className="text-black text-xl xxl:text-3xl font-extralight">
                    Redux
                  </h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6 xxl:gap-5 xxl:px-8 xxl:py-6 bg-white rounded-full">
                  <div className="xxl:hidden">
                    <Icon icon="logos:threejs" style={{ fontSize: 35 }} />
                  </div>
                  <div className="lg:hidden xl:hidden">
                    <Icon icon="logos:threejs" style={{ fontSize: 50 }} />
                  </div>
                  <h3 className="text-black text-xl xxl:text-3xl font-extralight">
                    Three JS
                  </h3>
                </div>
              </BouncingAnimation>
            </div>
            <div className="flex flex-row justify-center lg:gap-3 xl:gap-5 xxl:gap-3">
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6 xxl:gap-5 xxl:px-8 xxl:py-6 bg-white rounded-full">
                  <div className="xxl:hidden">
                    <Icon icon="devicon:tailwindcss" style={{ fontSize: 35 }} />
                  </div>
                  <div className="lg:hidden xl:hidden">
                    <Icon icon="devicon:tailwindcss" style={{ fontSize: 50 }} />
                  </div>
                  <h3 className="text-black text-xl xxl:text-3xl font-extralight">
                    Tailwind CSS
                  </h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6 xxl:gap-5 xxl:px-8 xxl:py-6 bg-white rounded-full">
                  <div className="xxl:hidden">
                    <Icon
                      icon="devicon:framermotion"
                      style={{ fontSize: 35 }}
                    />
                  </div>
                  <div className="lg:hidden xl:hidden">
                    <Icon
                      icon="devicon:framermotion"
                      style={{ fontSize: 50 }}
                    />
                  </div>
                  <h3 className="text-black text-xl xxl:text-3xl font-extralight">
                    Framer Motion
                  </h3>
                </div>
              </BouncingAnimation>
            </div>
            <div className="flex flex-row justify-center lg:gap-3 xl:gap-5 xxl:gap-6">
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6 xxl:gap-5 xxl:px-8 xxl:py-6 bg-white rounded-full">
                  <div className="xxl:hidden">
                    <Icon icon="devicon:git" style={{ fontSize: 35 }} />
                  </div>
                  <div className="lg:hidden xl:hidden">
                    <Icon icon="devicon:git" style={{ fontSize: 50 }} />
                  </div>
                  <h3 className="text-black text-xl xxl:text-3xl font-extralight">
                    Git
                  </h3>
                </div>
              </BouncingAnimation>
            </div>
          </div>
          {/* DEVELOPMENT & PRODUCTIVITY TOOLS */}
          <div className="flex flex-col">
            <h2 className="mt-16 lg:text-3xl xl:text-3xl xxl:text-5xl font-semibold text-center">
              DEVELOPMENT & PRODUCTIVITY <br />
              <h2 className="mt-4">TOOLS I USE</h2>
            </h2>
            {/* DEVELOPMENT TOOLS */}
            <div className="mt-16 flex flex-row gap-5">
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6 xxl:gap-5 xxl:px-8 xxl:py-6 bg-white rounded-full">
                  <div className="xxl:hidden">
                    <Icon
                      icon="logos:visual-studio-code"
                      style={{ fontSize: 35 }}
                    />
                  </div>
                  <div className="lg:hidden xl:hidden">
                    <Icon
                      icon="logos:visual-studio-code"
                      style={{ fontSize: 50 }}
                    />
                  </div>
                  <h3 className="text-black text-xl xxl:text-3xl font-extralight text-center">
                    Visual Studio Code
                  </h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6 xxl:gap-5 xxl:px-8 xxl:py-6 bg-white rounded-full">
                  <div className="xxl:hidden">
                    <Icon icon="devicon:gitlab" style={{ fontSize: 35 }} />
                  </div>
                  <div className="lg:hidden xl:hidden">
                    <Icon icon="devicon:gitlab" style={{ fontSize: 50 }} />
                  </div>
                  <h3 className="text-black text-xl xxl:text-3xl font-extralight">
                    Gitlab
                  </h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6 xxl:gap-5 xxl:px-8 xxl:py-6 bg-white rounded-full">
                  <div className="xxl:hidden">
                    <Icon icon="icon-park:github" style={{ fontSize: 35 }} />
                  </div>
                  <div className="lg:hidden xl:hidden">
                    <Icon icon="icon-park:github" style={{ fontSize: 50 }} />
                  </div>
                  <h3 className="text-black text-xl xxl:text-3xl font-extralight">
                    Github
                  </h3>
                </div>
              </BouncingAnimation>
              <BouncingAnimation>
                <div className="flex flex-row items-center justify-center gap-3 xl:py-4 xl:px-8 lg:gap-4 lg:py-3 lg:px-6 xxl:gap-5 xxl:px-8 xxl:py-6 bg-white rounded-full">
                  <div className="xxl:hidden">
                    <Icon
                      icon="vscode-icons:file-type-postman"
                      style={{ fontSize: 35 }}
                    />
                  </div>
                  <div className="lg:hidden xl:hidden">
                    <Icon
                      icon="vscode-icons:file-type-postman"
                      style={{ fontSize: 50 }}
                    />
                  </div>
                  <h3 className="text-black text-xl xxl:text-3xl font-extralight">
                    Postman
                  </h3>
                </div>
              </BouncingAnimation>
            </div>
          </div>
          {/* RESUME DOWNLOAD */}
          <BouncingAnimation>
            <div className="mt-16 flex justify-center">
              <button className="flex flex-row items-center justify-center bg-yellow-500 rounded-full gap-2 text-black py-4 px-10 xxl:py-6 xxl:px-8">
                <div className="hidden lg:flex xl:flex xxl:hidden">
                  <Icon
                    icon="material-symbols-light:download"
                    style={{ fontSize: 35, fontWeight: "bold" }}
                  />
                </div>
                <div className="hidden lg:hidden xl:hidden xxl:flex animate-bounce">
                  <Icon
                    icon="material-symbols-light:download"
                    style={{ fontSize: 60, fontWeight: "bold" }}
                  />
                </div>
                <h3 className="text-lg xl:text-xl xxl:text-3xl font-light">
                  RESUME
                </h3>
              </button>
            </div>
          </BouncingAnimation>
        </div>
      </div>
    </div>
  );
};

export default Skills;
