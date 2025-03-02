import React, { useState, useEffect } from "react";
// ICONIFY ICONS
import { Icon } from '@iconify/react';
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
        <div className="flex flex-col items-center">
          <h2 className="text-base font-semibold">
            Projects
          </h2>
          <p className="text-xs text-center sm:my-10 my-5 font-mdedium">
            Things I’ve built so far ...
          </p>
        </div>
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-4 md:gap-10 lg:gap-20 justify-items-center">
            {projects.map((project) => (
              <div key={project.id} className="mt-10 mb-4 pb-4 flex flex-col w-full items-center justify-center text-center bg-white bg-opacity-25 rounded-3xl cursor-pointer">
                <img
                  alt={project.name}
                  src={project.image_url}
                  className="mb-5 w-full h-full rounded-3xl"
                />
                <h3 className="text-sm lg:text-base text-white font-semibold">
                  {project.name}
                </h3>
                <div className="px-2 mt-1 flex flex-col gap-5 lg:mx-4">
                  <p className="px-1 text-xs lg:my-3 font-light">
                    {project.description}
                  </p>
                  <p className="mt-0  text-xs">
                    <span className="font-semibold text-xs">
                      Tech stack
                    </span>{" "}
                    : {project.tech_stack}
                  </p>
                  <div className="my-4 lg:my-2 flex flex-row justify-center items-center gap-10">
                    <div className="flex flex-row items-center gap-3">
                      <div className="hidden md:block">
                        <Icon
                          icon="vaadin:link"
                          className="text-white w-[24px] h-[24px]"
                        />
                      </div>
                      <div className="block md:hidden">
                        <Icon
                          icon="vaadin:link"
                          className="text-white w-[20px] h-[20px]"
                        />
                      </div>
                      <a
                        className="text-xs md:text-sm hover:underline cursor-pointer"
                        href={project.preview_link}
                      >
                        Preview
                      </a>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                      <div className="hidden md:block">
                        <Icon
                          icon="mdi:github"
                          className="text-white w-[30px] h-[30px]"
                        />
                      </div>
                      <div className="block md:hidden">
                        <Icon
                          icon="mdi:github"
                          className="text-white w-[24px] h-[24px]"
                        />
                      </div>
                      <a
                        className="text-xs hover:underline cursor-pointer"
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
          <div className="flex items-center justify-center px-8 mt-5  lg:mt-8">
            <button className="flex justify-center items-center gap-2 w-full  lg:w-1/4 h-12 py-4  bg-white hover:bg-gray-200 rounded-full">
              <div>
                <Icon
                  icon="mdi:github"
                  className="hidden md:block text-black w-[30px] h-[30px]"
                />
              </div>
              <div className="block md:hidden">
                <Icon
                  icon="mdi:github"
                  className="text-black w-[24px] h-[24px]"
                />
              </div>
              <a
                href="https://github.com/Georgi1023Y"
                className="ml-2 text-xs text-black font-medium"
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
