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
    <div>
      {/* HOME COMPONENT FOR MOBILE AND TABLET DEVICES */}
      <div className="block lg:hidden">
        <div className="flex flex-row justify-between">
          {/* MY LOGO WILL BE HERE */}
          <div className="block md:hidden">
            <FontAwesomeIcon
              icon={faLaptopCode}
              style={{ cursor: "pointer", fontSize: 30 }}
            />
          </div>
          <div className="hidden md:block">
            <FontAwesomeIcon
              icon={faLaptopCode}
              style={{ cursor: "pointer", fontSize: 35 }}
            />
          </div>
          <div className="flex flex-col">
            {showNavbar ? (
              <div>
                <div className="block md:hidden">
                  <FontAwesomeIcon
                    icon={faTimes}
                    style={{
                      cursor: "pointer",
                      marginBottom: 20,
                      fontSize: 30,
                    }}
                    onClick={handleNavbarToggle}
                  />
                </div>
                <div className="hidden md:block">
                  <FontAwesomeIcon
                    icon={faTimes}
                    style={{
                      cursor: "pointer",
                      marginBottom: 20,
                      fontSize: 35,
                    }}
                    onClick={handleNavbarToggle}
                  />
                </div>
              </div>
            ) : (
              <div>
                <div className="block md:hidden">
                  <FontAwesomeIcon
                    icon={faBars}
                    style={{ cursor: "pointer", fontSize: 30 }}
                    onClick={handleNavbarToggle}
                  />
                </div>
                <div className="hidden md:block">
                  <FontAwesomeIcon
                    icon={faBars}
                    style={{ cursor: "pointer", fontSize: 35 }}
                    onClick={handleNavbarToggle}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        {/* MOBILE + TABLET NAVBAR */}
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
                className="text-lg md:text-xl hover:border-white hover:border-b-2 cursor-pointer"
                onClick={() => scrollToTop()}
                href="#"
              >
                Home
              </a>
              <a
                className="text-lg md:text-xl hover:border-white hover:border-b-2 cursor-pointer"
                onClick={() => scrollToProjects()}
                href="#"
              >
                Projects
              </a>
              <a
                className="text-lg md:text-xl hover:border-white hover:border-b-2 cursor-pointer"
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
            <div className="flex flex-col gap-3 items-center mt-10">
              <h2 className="text-white text-lg md:text-xl font-medium">
                HELLO,
              </h2>
              <h1 className="md:my-8 text-2xl md:text-3xl logo-text text-center">
                <AutoTypeText text={textToType} interval={typingInterval} />
              </h1>
              {/* TEXT + WHITE LINE */}
              <div className="flex flex-row items-center mb-3">
                <p className="text-sm md:text-base text-center">
                  I'm a front-end web developer who works remotely from
                  Bulgaria.
                </p>
              </div>
              {/* SOCIAL MEDIA ICONS */}
              <div className="flex flex-row mt-3 md:mt-4 gap-3 md:gap-4">
                {/* GITHUB */}
                <div className="flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                  <a href="https://github.com/Georgi1023Y">
                    <div className="block md:hidden">
                      <Icon
                        style={{ fontSize: 30, color: "white" }}
                        icon="ri:github-fill"
                      />
                    </div>
                    <div className="hidden md:block">
                      <Icon
                        style={{ fontSize: 35, color: "white" }}
                        icon="ri:github-fill"
                      />
                    </div>
                  </a>
                </div>
                {/* DISCORD */}
                <div className="flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                  <a href="https://discord.com/invite/PY8tZabN">
                    <div className="block md:hidden">
                      <Icon
                        style={{ fontSize: 30, color: "white" }}
                        icon="ic:baseline-discord"
                      />
                    </div>
                    <div className="hidden md:block">
                      <Icon
                        style={{ fontSize: 35, color: "white" }}
                        icon="ic:baseline-discord"
                      />
                    </div>
                  </a>
                </div>
                {/* TWITTER */}
                <div className="flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                  <a href="https://twitter.com/georgi56929">
                    <div className="block md:hidden">
                      <Icon
                        style={{ fontSize: 30, color: "white" }}
                        icon="mdi:twitter"
                      />
                    </div>
                    <div className="hidden md:block">
                      <Icon
                        style={{ fontSize: 35, color: "white" }}
                        icon="mdi:twitter"
                      />
                    </div>
                  </a>
                </div>
                {/* TELEGRAM */}
                <div className="flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                  <a href="https://t.me/+fxUwDBQN5TZjZWVk">
                    <div className="block md:hidden">
                      <Icon
                        style={{ fontSize: 30, color: "white" }}
                        icon="basil:telegram-solid"
                      />
                    </div>
                    <div className="hidden md:block">
                      <Icon
                        style={{ fontSize: 35, color: "white" }}
                        icon="basil:telegram-solid"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-16">
              <ComputerModel className="w-full h-full" />
              <div className="text-sm text-white text-center cursor-pointer pb-4">
                <a href="https://sketchfab.com/3d-models/gaming-setup-low-poly-caffb0d42a594ac2b67970af07d10a5f">
                  Gaming Setup by low-poly
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimationFromLeft>
      </div>

      {/* HOME COMPONENT FOR LG,XL AND 2XL SCREEN SIZES */}
      <div className="hidden lg:block">
        <ScrollAnimationFromTop>
          {/* NAVBAR */}
          <div className="flex flex-row items-center justify-center gap-32 w-full rounded-full">
            <nav className="flex lg:gap-12 xl:gap-14 2xl:gap-20">
              <h2>
                <a
                  className="lg:text-xl xl:text-2xl hover:border-white hover:border-b-2 cursor-pointer"
                  onClick={() => scrollToTop()}
                  href="#"
                >
                  Home
                </a>
              </h2>
              <h2>
                <a
                  className="lg:text-xl xl:text-2xl hover:border-white hover:border-b-2 cursor-pointer"
                  onClick={() => scrollToProjects()}
                  href="#"
                >
                  Projects
                </a>
              </h2>
              <h2>
                <a
                  className="lg:text-xl xl:text-2xl hover:border-white hover:border-b-2 cursor-pointer"
                  onClick={() => scrollToContact()}
                  href="#"
                >
                  Contact
                </a>
              </h2>
            </nav>
          </div>
        </ScrollAnimationFromTop>
        {/* UNDER NAVBAR */}
        <ScrollAnimationFromLeft>
          <div className="flex flex-row items-center justify-between xl:gap-72">
            {/* CAREER + NAME */}
            <div className="flex flex-col lg:mt-24 xl:mt-28 ">
              <h2 className="text-white lg:text-2xl xl:text-3xl">HELLO,</h2>
              <h1 className="my-6 lg:text-3xl xl:text-4xl logo-text">
                <AutoTypeText text={textToType} interval={typingInterval} />
              </h1>
              {/* TEXT + WHITE LINE */}
              <div className="flex flex-row items-center gap-5">
                <p className="text-base xl:text-lg font-light">
                  I am a front-end web developer <br />
                  who works remotely <br />
                  from Bulgaria.
                </p>
              </div>
              {/* SOCIAL MEDIA ICONS */}
              <div className="flex flex-row lg:mt-8 xl:mt-10 gap-4">
                <BouncingAnimation>
                  {/* GITHUB */}
                  <div className="flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                    <a href="https://github.com/Georgi1023Y">
                      <div className="2xl:hidden">
                        <Icon
                          style={{ fontSize: 35, color: "white" }}
                          icon="ri:github-fill"
                        />
                      </div>
                      <div className="lg:hidden 2xl:block">
                        <Icon
                          style={{ fontSize: 40, color: "white" }}
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
                      <div className="2xl:hidden">
                        <Icon
                          style={{ fontSize: 35, color: "white" }}
                          icon="ic:baseline-discord"
                        />
                      </div>
                      <div className="lg:hidden 2xl:block">
                        <Icon
                          style={{ fontSize: 40, color: "white" }}
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
                      <div className="2xl:hidden">
                        <Icon
                          style={{ fontSize: 35, color: "white" }}
                          icon="mdi:twitter"
                        />
                      </div>
                      <div className="lg:hidden 2xl:block">
                        <Icon
                          style={{ fontSize: 40, color: "white" }}
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
                      <div className="2xl:hidden">
                        <Icon
                          style={{ fontSize: 35, color: "white" }}
                          icon="basil:telegram-solid"
                        />
                      </div>
                      <div className="lg:hidden 2xl:block">
                        <Icon
                          style={{ fontSize: 40, color: "white" }}
                          icon="basil:telegram-solid"
                        />
                      </div>
                    </a>
                  </div>
                </BouncingAnimation>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center lg:mt-24 xl:mt-28">
              <ComputerModel />
              <div className="text-white text-center text-base hover:underline cursor-pointer">
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
