import React from "react";
// ICONIFY ICONS
import { Icon } from "@iconify-icon/react";

const Projects = () => {
  return (
    <div id="projects">
      <div className="flex flex-col">
        {/* HEADING */}
        <div className="flex flex-col items-center ">
          <h2 className="sm:text-3xl md:text-4xl text-4xl xxl:text-6xl font-semibold">
            Projects
          </h2>
          <p className="sm:text-xl sm:text-center md:text-2xl md:text-center md:my-6 sm:my-10 my-10 text-2xl xxl:text-3xl font-mdedium">
            Things I’ve built so far
          </p>
        </div>
        {/* PROJECTS */}
        <div className="flex flex-col xl:gap-20">
          <div className="sm:flex sm:flex-col sm:items-center sm:gap-4 md:flex md:flex-col md:items-center md:gap-6 flex flex-row justify-center lg:gap-4 xl:gap-8 xxl:gap-14">
            {/* PROJECT 1*/}
            <div className="lg:pb-6 flex flex-col sm:w-72 md:w-96 bg-white bg-opacity-25 rounded-3xl">
              <img
                alt="project-image"
                src="https://img.freepik.com/free-vector/background-dark-wavy_23-2148387365.jpg?size=626&ext=jpg&uid=R121152609&ga=GA1.1.785168996.1698608856&semt=ais"
                className="mb-5 xxl:mb-10 w-full rounded-top"
              />
              <div className="sm:mx-6 md:mx-8 mt-1 flex flex-col lg:mx-4 xl:mx-8 xxl:mx-10">
                <h3 className="sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl xxl:text-4xl font-semibold">
                  Project Tile goes here
                </h3>
                <p className="sm:my-6 sm:text-lg md:my-4 md:text-xl lg:my-3 xl:my-6 xxl:my-10 lg:text-lg xl:text-lg xxl:text-2xl font-light">
                  This is sample project description random things are here in
                  description This is sample project lorem ipsum generator for
                  dummy content
                </p>
                <p className="sm:mt-0 sm:text-base sm:mb-2 md:mt-4 md:text-xl mt-8 mb-4 lg:text-lg xl:text-lg xxl:text-2xl">
                  <span className="font-semibold sm:text-lg md:text-2xl lg:text-xl xl:text-xl xxl:text-3xl">
                    Tech stack
                  </span>{" "}
                  : HTML , JavaScript, SASS, React
                </p>
                <div className="sm:my-4 md:my-5 lg:my-2 xl:my-6 xxl:my-8 flex flex-row gap-10">
                  <div className="flex flex-row items-center sm:gap-3 gap-4">
                    <div className="sm:hidden md:hidden xl:hidden xxl:hidden">
                      <Icon
                        icon="vaadin:link"
                        style={{ color: "white", fontSize: 40 }}
                      />
                    </div>
                    <div className="sm:hidden md:hidden lg:hidden xxl:hidden">
                      <Icon
                        icon="vaadin:link"
                        style={{ color: "white", fontSize: 40 }}
                      />
                    </div>
                    <div className="sm:hidden md:hidden lg:hidden xl:hidden">
                      <Icon
                        icon="vaadin:link"
                        style={{ color: "white", fontSize: 50 }}
                      />
                    </div>
                    <div className="md:hidden lg:hidden xl:hidden xxl:hidden">
                      <Icon
                        icon="vaadin:link"
                        style={{ color: "white", fontSize: 30 }}
                      />
                    </div>
                    <div className="sm:hidden lg:hidden xl:hidden xxl:hidden">
                      <Icon
                        icon="vaadin:link"
                        style={{ color: "white", fontSize: 40 }}
                      />
                    </div>
                    <p className="sm:text-base md:text-2xl lg:text-xl xl:text-xl xxl:text-2xl underline cursor-pointer">
                      Preview
                    </p>
                  </div>
                  <div className="flex flex-row items-center sm:gap-3 gap-4">
                    <div className="sm:hidden md:hidden xl:hidden xxl:hidden">
                      <Icon
                        icon="mdi:github"
                        style={{ color: "white", fontSize: 40 }}
                      />
                    </div>
                    <div className="sm:hidden md:hidden lg:hidden xxl:hidden">
                      <Icon
                        icon="mdi:github"
                        style={{ color: "white", fontSize: 50 }}
                      />
                    </div>
                    <div className="sm:hidden md:hidden lg:hidden xl:hidden">
                      <Icon
                        icon="mdi:github"
                        style={{ color: "white", fontSize: 60 }}
                      />
                    </div>
                    <div className="md:hidden lg:hidden xxl:hidden xl:hidden">
                      <Icon
                        icon="mdi:github"
                        style={{ color: "white", fontSize: 40 }}
                      />
                    </div>
                    <div className="sm:hidden lg:hidden xxl:hidden xl:hidden">
                      <Icon
                        icon="mdi:github"
                        style={{ color: "white", fontSize: 50 }}
                      />
                    </div>
                    <p className="sm:text-base md:text-2xl lg:text-xl xl:text-xl xxl:text-2xl underline cursor-pointer">
                      Code
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* PROJECT 2 */}
            <div className="lg:pb-6 flex flex-col sm:w-72 md:w-96 bg-white bg-opacity-25 rounded-3xl">
              <img
                alt="project-image"
                src="https://img.freepik.com/free-vector/background-dark-wavy_23-2148387365.jpg?size=626&ext=jpg&uid=R121152609&ga=GA1.1.785168996.1698608856&semt=ais"
                className="mb-5 xxl:mb-10 w-full rounded-top"
              />
              <div className="sm:mx-6 md:mx-8 mt-1 flex flex-col lg:mx-4 xl:mx-8 xxl:mx-10">
                <h3 className="sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl xxl:text-4xl font-semibold">
                  Project Tile goes here
                </h3>
                <p className="sm:my-6 sm:text-lg md:my-4 md:text-xl lg:my-3 xl:my-6 xxl:my-10 lg:text-lg xl:text-lg xxl:text-2xl font-light">
                  This is sample project description random things are here in
                  description This is sample project lorem ipsum generator for
                  dummy content
                </p>
                <p className="sm:mt-0 sm:text-base sm:mb-2 md:mt-4 md:text-xl mt-8 mb-4 lg:text-lg xl:text-lg xxl:text-2xl">
                  <span className="font-semibold sm:text-lg md:text-2xl lg:text-xl xl:text-xl xxl:text-3xl">
                    Tech stack
                  </span>{" "}
                  : HTML , JavaScript, SASS, React
                </p>
                <div className="sm:my-4 md:my-5 lg:my-2 xl:my-6 xxl:my-8 flex flex-row gap-10">
                  <div className="flex flex-row items-center sm:gap-3 gap-4">
                    <div className="sm:hidden md:hidden xl:hidden xxl:hidden">
                      <Icon
                        icon="vaadin:link"
                        style={{ color: "white", fontSize: 40 }}
                      />
                    </div>
                    <div className="sm:hidden md:hidden lg:hidden xxl:hidden">
                      <Icon
                        icon="vaadin:link"
                        style={{ color: "white", fontSize: 40 }}
                      />
                    </div>
                    <div className="sm:hidden md:hidden lg:hidden xl:hidden">
                      <Icon
                        icon="vaadin:link"
                        style={{ color: "white", fontSize: 50 }}
                      />
                    </div>
                    <div className="md:hidden lg:hidden xl:hidden xxl:hidden">
                      <Icon
                        icon="vaadin:link"
                        style={{ color: "white", fontSize: 30 }}
                      />
                    </div>
                    <div className="sm:hidden lg:hidden xl:hidden xxl:hidden">
                      <Icon
                        icon="vaadin:link"
                        style={{ color: "white", fontSize: 40 }}
                      />
                    </div>
                    <p className="sm:text-base md:text-2xl lg:text-xl xl:text-xl xxl:text-2xl underline cursor-pointer">
                      Preview
                    </p>
                  </div>
                  <div className="flex flex-row items-center sm:gap-3 gap-4">
                    <div className="sm:hidden md:hidden xl:hidden xxl:hidden">
                      <Icon
                        icon="mdi:github"
                        style={{ color: "white", fontSize: 40 }}
                      />
                    </div>
                    <div className="sm:hidden md:hidden lg:hidden xxl:hidden">
                      <Icon
                        icon="mdi:github"
                        style={{ color: "white", fontSize: 50 }}
                      />
                    </div>
                    <div className="sm:hidden md:hidden lg:hidden xl:hidden">
                      <Icon
                        icon="mdi:github"
                        style={{ color: "white", fontSize: 60 }}
                      />
                    </div>
                    <div className="md:hidden lg:hidden xxl:hidden xl:hidden">
                      <Icon
                        icon="mdi:github"
                        style={{ color: "white", fontSize: 40 }}
                      />
                    </div>
                    <div className="sm:hidden lg:hidden xxl:hidden xl:hidden">
                      <Icon
                        icon="mdi:github"
                        style={{ color: "white", fontSize: 50 }}
                      />
                    </div>
                    <p className="sm:text-base md:text-2xl lg:text-xl xl:text-xl xxl:text-2xl underline cursor-pointer">
                      Code
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* PROJECT 3 */}
            <div className="lg:pb-6 flex flex-col sm:w-72 md:w-96 bg-white bg-opacity-25 rounded-3xl">
              <img
                alt="project-image"
                src="https://img.freepik.com/free-vector/background-dark-wavy_23-2148387365.jpg?size=626&ext=jpg&uid=R121152609&ga=GA1.1.785168996.1698608856&semt=ais"
                className="mb-5 xxl:mb-10 w-full rounded-top"
              />
              <div className="sm:mx-6 md:mx-8 mt-1 flex flex-col lg:mx-4 xl:mx-8 xxl:mx-10">
                <h3 className="sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl xxl:text-4xl font-semibold">
                  Project Tile goes here
                </h3>
                <p className="sm:my-6 sm:text-lg md:my-4 md:text-xl lg:my-3 xl:my-6 xxl:my-10 lg:text-lg xl:text-lg xxl:text-2xl font-light">
                  This is sample project description random things are here in
                  description This is sample project lorem ipsum generator for
                  dummy content
                </p>
                <p className="sm:mt-0 sm:text-base sm:mb-2 md:mt-4 md:text-xl mt-8 mb-4 lg:text-lg xl:text-lg xxl:text-2xl">
                  <span className="font-semibold sm:text-lg md:text-2xl lg:text-xl xl:text-xl xxl:text-3xl">
                    Tech stack
                  </span>{" "}
                  : HTML , JavaScript, SASS, React
                </p>
                <div className="sm:my-4 md:my-5 lg:my-2 xl:my-6 xxl:my-8 flex flex-row gap-10">
                  <div className="flex flex-row items-center sm:gap-3 gap-4">
                    <div className="sm:hidden md:hidden xl:hidden xxl:hidden">
                      <Icon
                        icon="vaadin:link"
                        style={{ color: "white", fontSize: 40 }}
                      />
                    </div>
                    <div className="sm:hidden md:hidden lg:hidden xxl:hidden">
                      <Icon
                        icon="vaadin:link"
                        style={{ color: "white", fontSize: 40 }}
                      />
                    </div>
                    <div className="sm:hidden md:hidden lg:hidden xl:hidden">
                      <Icon
                        icon="vaadin:link"
                        style={{ color: "white", fontSize: 50 }}
                      />
                    </div>
                    <div className="md:hidden lg:hidden xl:hidden xxl:hidden">
                      <Icon
                        icon="vaadin:link"
                        style={{ color: "white", fontSize: 30 }}
                      />
                    </div>
                    <div className="sm:hidden lg:hidden xl:hidden xxl:hidden">
                      <Icon
                        icon="vaadin:link"
                        style={{ color: "white", fontSize: 40 }}
                      />
                    </div>
                    <p className="sm:text-base md:text-2xl lg:text-xl xl:text-xl xxl:text-2xl underline cursor-pointer">
                      Preview
                    </p>
                  </div>
                  <div className="flex flex-row items-center sm:gap-3 gap-4">
                    <div className="sm:hidden md:hidden xl:hidden xxl:hidden">
                      <Icon
                        icon="mdi:github"
                        style={{ color: "white", fontSize: 40 }}
                      />
                    </div>
                    <div className="sm:hidden md:hidden lg:hidden xxl:hidden">
                      <Icon
                        icon="mdi:github"
                        style={{ color: "white", fontSize: 50 }}
                      />
                    </div>
                    <div className="sm:hidden md:hidden lg:hidden xl:hidden">
                      <Icon
                        icon="mdi:github"
                        style={{ color: "white", fontSize: 60 }}
                      />
                    </div>
                    <div className="md:hidden lg:hidden xxl:hidden xl:hidden">
                      <Icon
                        icon="mdi:github"
                        style={{ color: "white", fontSize: 40 }}
                      />
                    </div>
                    <div className="sm:hidden lg:hidden xxl:hidden xl:hidden">
                      <Icon
                        icon="mdi:github"
                        style={{ color: "white", fontSize: 50 }}
                      />
                    </div>
                    <p className="sm:text-base md:text-2xl lg:text-xl xl:text-xl xxl:text-2xl underline cursor-pointer">
                      Code
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:mt-6 md:mt-8 lg:mt-8 xxl:mt-12 flex justify-center">
            <button className="flex justify-center items-center gap-1 sm:py-2 sm:px-6 md:py-4 md:px-8 py-2 px-6 xxl:py-8 xxl:px-12 bg-white rounded-full">
              <div className="sm:hidden md:hidden xl:hidden xxl:hidden">
                <Icon
                  icon="mdi:github"
                  style={{ color: "black", fontSize: 40 }}
                />
              </div>
              <div className="sm:hidden md:hidden lg:hidden xxl:hidden">
                <Icon
                  icon="mdi:github"
                  style={{ color: "black", fontSize: 50 }}
                />
              </div>
              <div className="sm:hidden md:hidden lg:hidden xl:hidden xxl:hidden">
                <Icon
                  icon="mdi:github"
                  style={{ color: "black", fontSize: 60 }}
                />
              </div>
              <div className="sm:hidden md:hidden lg:hidden xl:hidden">
                <Icon
                  icon="mdi:github"
                  style={{ color: "black", fontSize: 80 }}
                />
              </div>
              <div className="md:hidden xxl:hidden lg:hidden xl:hidden">
                <Icon
                  icon="mdi:github"
                  style={{ color: "black", fontSize: 40 }}
                />
              </div>
              <div className="sm:hidden xxl:hidden lg:hidden xl:hidden">
                <Icon
                  icon="mdi:github"
                  style={{ color: "black", fontSize: 50 }}
                />
              </div>
              <a
                href="https://github.com/Georgi1023Y"
                className="ml-2 xxl:ml-3 sm:text-lg md:text-2xl text-xl xxl:text-4xl text-black font-medium"
              >
                View Github
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
