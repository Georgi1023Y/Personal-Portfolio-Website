import React, { useState, useEffect } from "react";
// IMPORT REACT ICONS
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
// ICONIFY ICONS
import { Icon } from "@iconify-icon/react";
// IMPORTING FRAMER MOTION
import { motion } from "framer-motion";
import {
  ScrollAnimationFromLeft,
  ScrollAnimationFromTop,
  BouncingAnimation,
  AutoTypeText,
} from "./ScrollAnimation";
// IMPORT 3D COMPUTER MODEL
import { ComputerModel } from "../App";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleNavbarToggle = () => {
    setShowNavbar(!showNavbar);
  };

  // EVENT LISTENER IF USER CLICKS SOME OF 3 TOP LINKS
  // HOME
  const scrollToTop = () => {
    const homeElement = document.getElementById("home");
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // PROJECTS
  const scrollToProjects = () => {
    const projectsElement = document.getElementById("projects");
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // CONTACT
  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const textToType = "I AM GEORGI BESHIROV";
  const typingInterval = 100;

  return (
    <div id="home">
      {/* HOME COMPONENT FOR MOBILE AND TABLET DEVICES */}
      <div className="lg:hidden xl:hidden xxl:hidden">
        <div className="flex flex-row justify-between">
          {/* MY LOGO WILL BE HERE */}
          <div>
            <FontAwesomeIcon
              icon={faLaptopCode}
              style={{ cursor: "pointer", fontSize: 40 }}
            />
          </div>
          <div className="flex flex-col">
            {showNavbar ? (
              <div>
                <FontAwesomeIcon
                  icon={faTimes}
                  style={{
                    cursor: "pointer",
                    marginBottom: 20,
                    fontSize: 40,
                  }}
                  onClick={handleNavbarToggle}
                />
              </div>
            ) : (
              <div>
                <FontAwesomeIcon
                  icon={faBars}
                  style={{ cursor: "pointer", fontSize: 40 }}
                  onClick={handleNavbarToggle}
                />
              </div>
            )}
          </div>
        </div>
        {/* MOBILE + TABLET NAVBAR */}
        <div className="flex justify-end">
          <div
            className={
              showNavbar
                ? "flex flex-col h-full sm:px-6 sm:py-6 md:py-7 md:px-7 bg-white bg-opacity-25 rounded-3xl"
                : "hidden"
            }
          >
            <nav className="flex flex-col items-center justify-center gap-2">
              <a
                className="text-2xl hover:border-white hover:border-b-2 cursor-pointer"
                onClick={() => scrollToTop()}
                href="#"
              >
                Home
              </a>
              <a
                className="text-2xl hover:border-white hover:border-b-2 cursor-pointer"
                onClick={() => scrollToProjects()}
                href="#"
              >
                Projects
              </a>
              <a
                className="text-2xl hover:border-white hover:border-b-2 cursor-pointer"
                onClick={() => scrollToContact()}
                href="#"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
        {/* MAIN PART OF MOBILE + TABLET HOME SECTION */}
        <ScrollAnimationFromLeft>
          <div className="flex flex-col items-center justify-center">
            {/* CAREER + NAME */}
            <div className="flex flex-col items-center mt-16">
              <h1 className="text-white text-3xl font-medium">HELLO,</h1>
              <h1 className="sm:my-4 md:my-8 text-4xl logo-text text-center">
                <AutoTypeText text={textToType} interval={typingInterval} />
              </h1>
              {/* TEXT + WHITE LINE */}
              <div className="flex flex-row items-center sm:mb-3 md:mb-4">
                <p className="sm:text-base md:text-lg text-center">
                  I'm a front-end web developer who works remotely from
                  Bulgaria.
                </p>
              </div>
              {/* SOCIAL MEDIA ICONS */}
              <div className="flex flex-row sm:mt-3 md:mt-4 sm:gap-3 md:gap-4">
                {/* GITHUB */}
                <div className="flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                  <a href="https://github.com/Georgi1023Y">
                    <div className="md:hidden">
                      <Icon
                        style={{ fontSize: 45, color: "white" }}
                        icon="ri:github-fill"
                      />
                    </div>
                    <div className="sm:hidden">
                      <Icon
                        style={{ fontSize: 50, color: "white" }}
                        icon="ri:github-fill"
                      />
                    </div>
                  </a>
                </div>
                {/* DISCORD */}
                <div className="flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                  <a href="https://discord.com/invite/PY8tZabN">
                    <div className="md:hidden">
                      <Icon
                        style={{ fontSize: 45, color: "white" }}
                        icon="ic:baseline-discord"
                      />
                    </div>
                    <div className="sm:hidden">
                      <Icon
                        style={{ fontSize: 50, color: "white" }}
                        icon="ic:baseline-discord"
                      />
                    </div>
                  </a>
                </div>
                {/* TWITTER */}
                <div className="flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                  <a href="https://twitter.com/georgi56929">
                    <div className="md:hidden">
                      <Icon
                        style={{ fontSize: 40, color: "white" }}
                        icon="mdi:twitter"
                      />
                    </div>
                    <div className="sm:hidden">
                      <Icon
                        style={{ fontSize: 50, color: "white" }}
                        icon="mdi:twitter"
                      />
                    </div>
                  </a>
                </div>
                {/* TELEGRAM */}
                <div className="flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                  <a href="https://t.me/+fxUwDBQN5TZjZWVk">
                    <div className="md:hidden">
                      <Icon
                        style={{ fontSize: 45, color: "white" }}
                        icon="basil:telegram-solid"
                      />
                    </div>
                    <div className="sm:hidden">
                      <Icon
                        style={{ fontSize: 50, color: "white" }}
                        icon="basil:telegram-solid"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-16">
              <ComputerModel />
            </div>
          </div>
        </ScrollAnimationFromLeft>
      </div>

      {/* HOME COMPONENT FOR LG,XL AND 2XL SCREEN SIZES */}
      <div className="sm:hidden md:hidden">
        <ScrollAnimationFromTop>
          {/* NAVBAR */}
          <div className="flex flex-row items-center justify-center gap-32 lg:gap-8  w-full lg:h-20 xl:h-24 xxl:h-44 rounded-full">
            <nav className="flex lg:gap-12 xl:gap-14 xxl:gap-20">
              <a
                className="lg:text-2xl xl:text-3xl xxl:text-5xl hover:border-white hover:border-b-2 cursor-pointer"
                onClick={() => scrollToTop()}
                href="#"
              >
                Home
              </a>
              <a
                className="lg:text-2xl xl:text-3xl xxl:text-5xl hover:border-white hover:border-b-2 cursor-pointer"
                onClick={() => scrollToProjects()}
                href="#"
              >
                Projects
              </a>
              <a
                className="lg:text-2xl xl:text-3xl xxl:text-5xl hover:border-white hover:border-b-2 cursor-pointer"
                onClick={() => scrollToContact()}
                href="#"
              >
                Contact
              </a>
            </nav>
          </div>
        </ScrollAnimationFromTop>
        {/* UNDER NAVBAR */}
        <ScrollAnimationFromLeft>
          <div className="flex flex-row lg:gap-10 xl:gap-72 xxl:gap-10">
            {/* CAREER + NAME */}
            <div className="flex flex-col lg:mt-24 xl:mt-28 xxl:mt-20">
              <h1 className="text-white lg:text-3xl xl:text-3xl xxl:text-5xl font-light">
                HELLO,
              </h1>
              <h1 className="my-6 xxl:my-20 lg:text-3xl xl:text-4xl xxl:text-8xl logo-text">
                <AutoTypeText text={textToType} interval={typingInterval} />
              </h1>
              {/* TEXT + WHITE LINE */}
              <div className="flex flex-row items-center gap-5">
                <p className="text-lg xl:text-lg xxl:text-4xl font-light">
                  I am a front-end web developer <br />
                  who works remotely <br />
                  from Bulgaria.
                </p>
              </div>
              {/* SOCIAL MEDIA ICONS */}
              <div className="flex flex-row lg:mt-8 xl:mt-10 xxl:mt-16 gap-4 xxl:gap-6">
                <BouncingAnimation>
                  {/* GITHUB */}
                  <div className="flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                    <a href="https://github.com/Georgi1023Y">
                      <div className="xl:hidden xxl:hidden">
                        <Icon
                          style={{ fontSize: 45, color: "white" }}
                          icon="ri:github-fill"
                        />
                      </div>
                      <div className="lg:hidden xxl:hidden">
                        <Icon
                          style={{ fontSize: 50, color: "white" }}
                          icon="ri:github-fill"
                        />
                      </div>
                      <div className="lg:hidden xl:hidden">
                        <Icon
                          style={{ fontSize: 80, color: "white" }}
                          icon="ri:github-fill"
                        />
                      </div>
                    </a>
                  </div>
                </BouncingAnimation>
                {/* DISCORD */}
                <BouncingAnimation>
                  <div className="flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                    <a href="https://discord.com/invite/PY8tZabN">
                      <div className="xl:hidden xxl:hidden">
                        <Icon
                          style={{ fontSize: 45, color: "white" }}
                          icon="ic:baseline-discord"
                        />
                      </div>
                      <div className="lg:hidden xxl:hidden">
                        <Icon
                          style={{ fontSize: 50, color: "white" }}
                          icon="ic:baseline-discord"
                        />
                      </div>
                      <div className="lg:hidden xl:hidden">
                        <Icon
                          style={{ fontSize: 80, color: "white" }}
                          icon="ic:baseline-discord"
                        />
                      </div>
                    </a>
                  </div>
                </BouncingAnimation>
                {/* TWITTER */}
                <BouncingAnimation>
                  <div className="flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                    <a href="https://twitter.com/georgi56929">
                      <div className="xl:hidden xxl:hidden">
                        <Icon
                          style={{ fontSize: 45, color: "white" }}
                          icon="mdi:twitter"
                        />
                      </div>
                      <div className="lg:hidden xxl:hidden">
                        <Icon
                          style={{ fontSize: 50, color: "white" }}
                          icon="mdi:twitter"
                        />
                      </div>
                      <div className="lg:hidden xl:hidden">
                        <Icon
                          style={{ fontSize: 70, color: "white" }}
                          icon="mdi:twitter"
                        />
                      </div>
                    </a>
                  </div>
                </BouncingAnimation>
                {/* TELEGRAM */}
                <BouncingAnimation>
                  <div className="flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                    <a href="https://t.me/+fxUwDBQN5TZjZWVk">
                      <div className="xl:hidden xxl:hidden">
                        <Icon
                          style={{ fontSize: 45, color: "white" }}
                          icon="basil:telegram-solid"
                        />
                      </div>
                      <div className="lg:hidden xxl:hidden">
                        <Icon
                          style={{ fontSize: 50, color: "white" }}
                          icon="basil:telegram-solid"
                        />
                      </div>
                      <div className="lg:hidden xl:hidden">
                        <Icon
                          style={{ fontSize: 80, color: "white" }}
                          icon="basil:telegram-solid"
                        />
                      </div>
                    </a>
                  </div>
                </BouncingAnimation>
              </div>
            </div>
            <div className="lg:mt-24 xl:mt-28 xxl:mt-20">
              <ComputerModel />
            </div>
          </div>
        </ScrollAnimationFromLeft>
      </div>
    </div>
  );
};

export default Home;
