import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { Icon } from '@iconify/react';
import { motion } from "framer-motion";
import {
  ScrollAnimationFromLeft,
  ScrollAnimationFromTop,
  BouncingAnimation,
  AutoTypeText,
} from "./ScrollAnimation";
import { ComputerModel } from "../App";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleNavbarToggle = () => {
    setShowNavbar(!showNavbar);
  };

  const scrollToTop = () => {
    const homeElement = document.getElementById("home");
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const projectsElement = document.getElementById("projects");
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const textToType = "I AM GEORGI BESHIROV";
  const typingInterval = 100;

  return (
    <div>
      <div className="block lg:hidden">
        <div className="flex flex-row justify-between">
          <div>
            <FontAwesomeIcon
              icon={faLaptopCode}
              className="w-[24px] h-[24px]"
            />
          </div>
          <div className="flex flex-col">
            {showNavbar ? (
              <div>
                <div>
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="w-[20px] h-[20px] mb-[20px]"
                    onClick={handleNavbarToggle}
                  />
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <FontAwesomeIcon
                    icon={faBars}
                    className="w-[20px] h-[20px]"
                    onClick={handleNavbarToggle}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end">
          <div
            className={
              showNavbar
                ? "flex flex-col h-full px-6 py-6 bg-white bg-opacity-25 rounded-3xl"
                : "hidden"
            }
          >
            <nav className="flex flex-col items-center justify-center gap-2">
              <a
                className="text-sm hover:border-white hover:border-b-2 cursor-pointer"
                onClick={() => scrollToTop()}
                href="#"
              >
                Home
              </a>
              <a
                className="text-sm hover:border-white hover:border-b-2 cursor-pointer"
                onClick={() => scrollToProjects()}
                href="#"
              >
                Projects
              </a>
              <a
                className="text-sm hover:border-white hover:border-b-2 cursor-pointer"
                onClick={() => scrollToContact()}
                href="#"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
        <ScrollAnimationFromLeft>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col gap-3 items-center mt-10">
              <h2 className="text-white text-sm font-medium">
                HELLO,
              </h2>
              <h1 className="text-xl logo-text text-center">
                <AutoTypeText text={textToType} interval={typingInterval} />
              </h1>
              <div className="flex flex-row items-center mb-3">
                <p className="text-xs text-center">
                  I'm a React developer who works remotely from
                  Bulgaria.
                </p>
              </div>
              <div className="flex flex-row mt-3 gap-3">
                <div className="flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                  <a href="https://github.com/Georgi1023Y">
                    <div>
                      <Icon
                        className="text-white w-[24px] h-[24px]"
                        icon="ri:github-fill"
                      />
                    </div>
                  </a>
                </div>
                <div className="flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                  <a href="https://discord.com/invite/PY8tZabN">
                    <div>
                      <Icon
                        className="text-white w-[24px] h-[24px]"
                        icon="ic:baseline-discord"
                      />
                    </div>
                  </a>
                </div>
                <div className="flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                  <a href="https://twitter.com/georgi56929">
                    <div>
                      <Icon
                        className="text-white w-[24px] h-[24px]"
                        icon="mdi:twitter"
                      />
                    </div>
                  </a>
                </div>
                <div className="flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                  <a href="https://t.me/+fxUwDBQN5TZjZWVk">
                    <div>
                      <Icon
                        className="text-white w-[24px] h-[24px]"
                        icon="basil:telegram-solid"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-16">
              <ComputerModel className="w-full h-full" />
              <div className="text-xs text-white text-center cursor-pointer pb-4">
                <a href="https://sketchfab.com/3d-models/gaming-setup-low-poly-caffb0d42a594ac2b67970af07d10a5f">
                  Gaming Setup by low-poly
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimationFromLeft>
      </div>

      <div className="hidden lg:block">
        <ScrollAnimationFromTop>
          <div className="flex flex-row items-center justify-center gap-32 w-full rounded-full">
            <nav className="flex lg:gap-12">
              <h2>
                <a
                  className="lg:text-base hover:border-white hover:border-b-2 cursor-pointer"
                  onClick={() => scrollToTop()}
                  href="#"
                >
                  Home
                </a>
              </h2>
              <h2>
                <a
                  className="lg:text-base hover:border-white hover:border-b-2 cursor-pointer"
                  onClick={() => scrollToProjects()}
                  href="#"
                >
                  Projects
                </a>
              </h2>
              <h2>
                <a
                  className="lg:text-base hover:border-white hover:border-b-2 cursor-pointer"
                  onClick={() => scrollToContact()}
                  href="#"
                >
                  Contact
                </a>
              </h2>
            </nav>
          </div>
        </ScrollAnimationFromTop>
        <ScrollAnimationFromLeft>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col lg:mt-24">
              <h2 className="text-white lg:text-lg">HELLO,</h2>
              <h1 className="my-6 lg:text-lg">
                <AutoTypeText text={textToType} interval={typingInterval} />
              </h1>
              <div className="flex flex-row items-center gap-5">
                <p className="text-base lg:text-sm font-light">
                  I'm a React developer who works <br/>
                  remotely from Bulgaria.
                </p>
              </div>
              <div className="flex flex-row lg:mt-8 gap-4">
                <BouncingAnimation>
                  <div className="flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                    <a href="https://github.com/Georgi1023Y">
                      <div>
                        <Icon
                          className="text-white w-[30px] h-[30px]"
                          icon="ri:github-fill"
                        />
                      </div>
                    </a>
                  </div>
                </BouncingAnimation>
                <BouncingAnimation>
                  <div className="flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                    <a href="https://discord.com/invite/PY8tZabN">
                      <div>
                        <Icon
                          className="text-white w-[30px] h-[30px]"
                          icon="ic:baseline-discord"
                        />
                      </div>
                    </a>
                  </div>
                </BouncingAnimation>
                <BouncingAnimation>
                  <div className="flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                    <a href="https://twitter.com/georgi56929">
                      <div>
                        <Icon
                          className="text-white w-[30px] h-[30px]"
                          icon="mdi:twitter"
                        />
                      </div>
                    </a>
                  </div>
                </BouncingAnimation>
                <BouncingAnimation>
                  <div className="flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                    <a href="https://t.me/+fxUwDBQN5TZjZWVk">
                      <div>
                        <Icon
                          className="text-white w-[30px] h-[30px]"
                          icon="basil:telegram-solid"
                        />
                      </div>
                    </a>
                  </div>
                </BouncingAnimation>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center lg:mt-24">
              <ComputerModel className="w-full h-full" />
              <div className="text-white text-center text-sm hover:underline cursor-pointer">
                <a href="https://sketchfab.com/3d-models/gaming-setup-low-poly-caffb0d42a594ac2b67970af07d10a5f">
                  Gaming Setup by low-poly from Sketchfab
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimationFromLeft>
      </div>
    </div>
  );
};

export default Home;
