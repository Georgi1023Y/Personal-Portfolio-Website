import React, { useState, useEffect } from "react";
// ICONIFY ICONS
import { Icon } from "@iconify-icon/react";
import { supabase } from "./Contact";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase.from("projects").select("*");
      if (error) {
        console.error("Error fetching projects: ", error);
      } else {
        setProjects(data);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div id="projects">
      <div>
        {/* HEADING */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
            Projects
          </h2>
          <p className="text-sm sm:text-center md:text-base md:text-center md:my-6 sm:my-10 my-5 font-mdedium">
            Things I’ve built so far ...
          </p>
        </div>
        {/* PROJECTS */}
        <div className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-4 md:gap-10 lg:gap-20 xl:gap-36 justify-items-center">
            {/* SHOWING ALL OF MY PROJECTS THAT I FETCHED FROM SUPABASE */}
            {projects.map((project) => (
              <div className="mt-10 mb-4 flex flex-col w-full items-center justify-center text-center bg-white bg-opacity-25 rounded-3xl cursor-pointer">
                <img
                  alt={project.name}
                  src={project.image_url}
                  className="mb-5 w-full h-full rounded-3xl"
                />
                <h3 className="text-sm md:text-base lg:text-lg text-white font-semibold">
                  {project.name}
                </h3>
                <div className="px-2 md:mx-8 mt-1 flex flex-col gap-5 lg:mx-4 xl:mx-8 ">
                  <p className="px-1 text-xs md:my-4 md:text-sm lg:my-3 xl:my-6 lg:text-base font-light">
                    {project.description}
                  </p>
                  <p className="mt-0  text-xs md:mt-4 md:text-sm lg:text-base">
                    <span className="font-semibold text-xs md:text-sm lg:text-base">
                      Tech stack
                    </span>{" "}
                    : {project.tech_stack}
                  </p>
                  <div className="my-4 md:my-5 lg:my-2 flex flex-row justify-center items-center gap-10">
                    <div className="flex flex-row items-center gap-3 md:gap-3">
                      <div className="hidden lg:block">
                        <Icon
                          icon="vaadin:link"
                          style={{ color: "white", fontSize: 30 }}
                        />
                      </div>
                      <div className="block md:hidden">
                        <Icon
                          icon="vaadin:link"
                          style={{ color: "white", fontSize: 25 }}
                        />
                      </div>
                      <div className="hidden md:block lg:hidden">
                        <Icon
                          icon="vaadin:link"
                          style={{ color: "white", fontSize: 35 }}
                        />
                      </div>
                      <a
                        className="text-xs md:text-base hover:underline cursor-pointer"
                        href={project.preview_link}
                      >
                        Preview
                      </a>
                    </div>
                    <div className="flex flex-row items-center gap-3 md:gap-3">
                      <div className="hidden lg:block">
                        <Icon
                          icon="mdi:github"
                          style={{ color: "white", fontSize: 40 }}
                        />
                      </div>
                      <div className="block md:hidden">
                        <Icon
                          icon="mdi:github"
                          style={{ color: "white", fontSize: 30 }}
                        />
                      </div>
                      <div className="hidden md:block lg:hidden">
                        <Icon
                          icon="mdi:github"
                          style={{ color: "white", fontSize: 40 }}
                        />
                      </div>
                      <a
                        className="text-xs md:text-base hover:underline cursor-pointer"
                        href={project.github_link}
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center px-8 mt-5 md:mt-8 lg:mt-8">
            <button className="flex justify-center items-center gap-2 w-full md:w-1/3 lg:w-1/4 h-12 md:h-14 py-4  bg-white hover:bg-gray-200 rounded-full">
              <div className="hidden lg:block xl:hidden">
                <Icon
                  icon="mdi:github"
                  style={{ color: "black", fontSize: 30 }}
                />
              </div>
              <div className="hidden xl:block 2xl:hidden">
                <Icon
                  icon="mdi:github"
                  style={{ color: "black", fontSize: 35 }}
                />
              </div>
              <div className="hidden 2xl:block">
                <Icon
                  icon="mdi:github"
                  style={{ color: "black", fontSize: 40 }}
                />
              </div>
              <div className="block md:hidden">
                <Icon
                  icon="mdi:github"
                  style={{ color: "black", fontSize: 30 }}
                />
              </div>
              <div className="hidden md:block lg:hidden">
                <Icon
                  icon="mdi:github"
                  style={{ color: "black", fontSize: 35 }}
                />
              </div>
              <a
                href="https://github.com/Georgi1023Y"
                className="ml-2 text-sm md:text-base lg:text-lg  text-black font-medium"
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
