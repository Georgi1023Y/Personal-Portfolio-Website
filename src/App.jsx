import { Suspense, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Tools from "./components/Tools";
// IMPORT LIGHT OR DARK MODE FUNCTION FROM HOME COMPONENT
import { Icon } from "@iconify-icon/react";
// IMPORT SCROLL ANIMATION FROM ScrollAnimation.jsx component
import {
  ScrollAnimationFromLeft,
  ScrollAnimationFromRight,
  ScrollAnimationFromTop,
  ScrollAnimationFromBottom,
} from "./components/ScrollAnimation";

// THIS IS NEEDED TO LOAD 3D MODEL
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Computer } from "../public/Computer";

export const ComputerModel = () => {
  return (
    <>
      <div>
        <Canvas>
          <ambientLight intensity={2} />
          <OrbitControls enableZoom={false} />
          <Suspense fallback={null}>
            <Computer />
          </Suspense>
          <Environment preset="sunset" />
        </Canvas>
      </div>
    </>
  );
};

function App() {
  const [light, setLight] = useState(true);

  const toggleGradient = () => {
    setLight(!light);
  };

  return (
    <>
      <div
        className={
          light
            ? "flex flex-col text-white light-mode"
            : "flex flex-col text-white dark-mode"
        }
      >
        <ScrollAnimationFromTop>
          <div className="pt-10 flex flex-row justify-center gap-5">
            {/* SUN MODE */}
            {/* FOR LG SCREENS */}
            <div className="sm:hidden md:hidden xxl:hidden xl:hidden">
              <button onClick={toggleGradient}>
                <Icon
                  icon={
                    light
                      ? "line-md:moon-filled-alt-to-sunny-filled-loop-transition"
                      : "line-md:moon-alt-to-sunny-outline-loop-transition"
                  }
                  style={{ color: "white", fontSize: 55 }}
                />
              </button>
            </div>
            {/* FOR XL SCREENS */}
            <div className="sm:hidden md:hidden lg:hidden xxl:hidden">
              <button onClick={toggleGradient}>
                <Icon
                  icon={
                    light
                      ? "line-md:moon-filled-alt-to-sunny-filled-loop-transition"
                      : "line-md:moon-alt-to-sunny-outline-loop-transition"
                  }
                  style={{ color: "white", fontSize: 55 }}
                />
              </button>
            </div>
            {/* FOR XXL SCREENS */}
            <div className="sm:hidden md:hidden lg:hidden xl:hidden">
              <button onClick={toggleGradient}>
                <Icon
                  icon={
                    light
                      ? "line-md:moon-filled-alt-to-sunny-filled-loop-transition"
                      : "line-md:moon-alt-to-sunny-outline-loop-transition"
                  }
                  style={{ color: "white", fontSize: 90 }}
                />
              </button>
            </div>
            {/* MOON MODE */}
            {/* FOR LG SCREENS */}
            <div className="sm:hidden md:hidden xxl:hidden xl:hidden">
              <button onClick={toggleGradient}>
                <Icon
                  icon={
                    light
                      ? "line-md:sunny-outline-to-moon-alt-loop-transition"
                      : "line-md:sunny-filled-loop-to-moon-filled-loop-transition"
                  }
                  style={{ color: "white", fontSize: 55 }}
                />
              </button>
            </div>
            {/* FOR XL SCREENS */}
            <div className="sm:hidden md:hidden lg:hidden xxl:hidden">
              <button onClick={toggleGradient}>
                <Icon
                  icon={
                    light
                      ? "line-md:sunny-outline-to-moon-alt-loop-transition"
                      : "line-md:sunny-filled-loop-to-moon-filled-loop-transition"
                  }
                  style={{ color: "white", fontSize: 55 }}
                />
              </button>
            </div>
            {/* FOR XXL SCREENS */}
            <div className="sm:hidden md:hidden lg:hidden xl:hidden">
              <button onClick={toggleGradient}>
                <Icon
                  icon={
                    light
                      ? "line-md:sunny-outline-to-moon-alt-loop-transition"
                      : "line-md:sunny-filled-loop-to-moon-filled-loop-transition"
                  }
                  style={{ color: "white", fontSize: 80 }}
                />
              </button>
            </div>
          </div>
        </ScrollAnimationFromTop>
        <div className="sm:px-10  md:px-12 md:py-8 lg:px-20 xl:px-20 xxl:px-40">
          {/* HOME COMPONENT */}
          <div className="sm:mb-10 md:mb-20 lg:mb-12 xl:mb-12 xxl:pb-40">
            <Home />
          </div>
          {/* ABOUT COMPONENT */}
          <ScrollAnimationFromRight>
            <div className="sm:mb-16 md:mb-10 lg:mb-20 xl:mb-20 xxl:pb-40">
              <About />
            </div>
          </ScrollAnimationFromRight>
          <div className="sm:mb-16 md:mb-10 lg:mb-20 xl:mb-20 xxl:pb-40">
            <Services />
          </div>
          {/* DOWN ARROW ICON */}
          <ScrollAnimationFromTop>
            <div className="md:hidden lg:hidden xl:hidden xxl:hidden flex justify-center sm:mb-16 md:mb-10 lg:mb-20 xl:mb-20 xxl:pb-40">
              <Icon icon="guidance:down-arrow" style={{ fontSize: 80 }} />
            </div>
            <div className="sm:hidden lg:hidden xl:hidden xxl:hidden flex justify-center sm:mb-16 md:mb-10 lg:mb-20 xl:mb-20 xxl:pb-40">
              <Icon icon="guidance:down-arrow" style={{ fontSize: 120 }} />
            </div>
            <div className="sm:hidden md:hidden xl:hidden xxl:hidden flex justify-center sm:mb-16 md:mb-10 lg:mb-20 xl:mb-20 xxl:pb-40">
              <Icon icon="guidance:down-arrow" style={{ fontSize: 125 }} />
            </div>
            <div className="sm:hidden md:hidden lg:hidden xxl:hidden flex justify-center sm:mb-10 md:mb-20 lg:mb-20 xl:mb-20 xxl:pb-40">
              <Icon icon="guidance:down-arrow" style={{ fontSize: 180 }} />
            </div>
            <div className="sm:hidden md:hidden lg:hidden xl:hidden flex justify-center sm:mb-16 md:mb-10 lg:mb-20 xl:mb-20 xxl:pb-40">
              <Icon icon="guidance:down-arrow" style={{ fontSize: 200 }} />
            </div>
          </ScrollAnimationFromTop>
          {/* MY SKILLS COMPONENT */}
          <ScrollAnimationFromLeft>
            <div className="sm:mb-16 md:mb-10 lg:mb-20 xl:mb-20 xxl:pb-40">
              <Skills />
            </div>
          </ScrollAnimationFromLeft>
          {/* DOWN ARROW ICON */}
          <ScrollAnimationFromTop>
            <div className="md:hidden lg:hidden xl:hidden xxl:hidden flex justify-center sm:mb-10 md:mb-20 lg:mb-20 xl:mb-20 xxl:pb-40">
              <Icon icon="guidance:down-arrow" style={{ fontSize: 80 }} />
            </div>
            <div className="sm:hidden lg:hidden xl:hidden xxl:hidden flex justify-center sm:mb-10 md:mb-20 lg:mb-20 xl:mb-20 xxl:pb-40">
              <Icon icon="guidance:down-arrow" style={{ fontSize: 120 }} />
            </div>
            <div className="sm:hidden md:hidden xl:hidden xxl:hidden flex justify-center sm:mb-10 md:mb-20 lg:mb-20 xl:mb-20 xxl:pb-40">
              <Icon icon="guidance:down-arrow" style={{ fontSize: 125 }} />
            </div>
            <div className="sm:hidden md:hidden lg:hidden xxl:hidden flex justify-center sm:mb-10 md:mb-20 lg:mb-20 xl:mb-20 xxl:pb-40">
              <Icon icon="guidance:down-arrow" style={{ fontSize: 180 }} />
            </div>
            <div className="sm:hidden md:hidden lg:hidden xl:hidden flex justify-center sm:mb-10 md:mb-20 lg:mb-20 xl:mb-20 xxl:pb-40">
              <Icon icon="guidance:down-arrow" style={{ fontSize: 200 }} />
            </div>
          </ScrollAnimationFromTop>
          {/* PROJECTS COMPONENT */}
          <ScrollAnimationFromRight>
            <div className="sm:mb-16 md:mb-10 lg:mb-20 xl:mb-20 xxl:pb-40">
              <Projects />
            </div>
          </ScrollAnimationFromRight>
          {/* DOWN ARROW ICON */}
          <ScrollAnimationFromTop>
            <div className="md:hidden lg:hidden xl:hidden xxl:hidden flex justify-center sm:mb-10 md:mb-20 lg:mb-20 xl:mb-20 xxl:pb-40">
              <Icon icon="guidance:down-arrow" style={{ fontSize: 80 }} />
            </div>
            <div className="sm:hidden lg:hidden xl:hidden xxl:hidden flex justify-center sm:mb-10 md:mb-20 lg:mb-20 xl:mb-20 xxl:pb-40">
              <Icon icon="guidance:down-arrow" style={{ fontSize: 120 }} />
            </div>
            <div className="sm:hidden md:hidden xl:hidden xxl:hidden flex justify-center sm:mb-10 md:mb-20 lg:mb-20 xl:mb-20 xxl:pb-40">
              <Icon icon="guidance:down-arrow" style={{ fontSize: 125 }} />
            </div>
            <div className="sm:hidden md:hidden lg:hidden xxl:hidden flex justify-center sm:mb-10 md:mb-20 lg:mb-20 xl:mb-20 xxl:pb-40">
              <Icon icon="guidance:down-arrow" style={{ fontSize: 180 }} />
            </div>
            <div className="sm:hidden md:hidden lg:hidden xl:hidden flex justify-center sm:mb-10 md:mb-20 lg:mb-20 xl:mb-20 xxl:pb-40">
              <Icon icon="guidance:down-arrow" style={{ fontSize: 200 }} />
            </div>
          </ScrollAnimationFromTop>
          {/* CONTACT COMPONENT */}
          <ScrollAnimationFromBottom>
            <div className="sm:mb-16 md:mb-10 lg:mb-20 xl:mb-20 xxl:pb-40">
              <Contact />
            </div>
          </ScrollAnimationFromBottom>
          {/* DOWN ARROW ICON */}
          <ScrollAnimationFromTop>
            <div className="md:hidden lg:hidden xl:hidden xxl:hidden flex justify-center sm:mb-10 md:mb-20 lg:mb-20 xl:mb-20 xxl:pb-40">
              <Icon icon="guidance:down-arrow" style={{ fontSize: 80 }} />
            </div>
            <div className="sm:hidden lg:hidden xl:hidden xxl:hidden flex justify-center sm:mb-10 md:mb-20 lg:mb-20 xl:mb-20 xxl:pb-40">
              <Icon icon="guidance:down-arrow" style={{ fontSize: 120 }} />
            </div>
            <div className="sm:hidden md:hidden xl:hidden xxl:hidden flex justify-center sm:mb-10 md:mb-20 lg:mb-20 xl:mb-20 xxl:pb-40">
              <Icon icon="guidance:down-arrow" style={{ fontSize: 125 }} />
            </div>
            <div className="sm:hidden md:hidden lg:hidden xxl:hidden flex justify-center sm:mb-10 md:mb-20 lg:mb-20 xl:mb-20 xxl:pb-40">
              <Icon icon="guidance:down-arrow" style={{ fontSize: 180 }} />
            </div>
            <div className="sm:hidden md:hidden lg:hidden xl:hidden flex justify-center sm:mb-10 md:mb-20 lg:mb-20 xl:mb-20 xxl:pb-40">
              <Icon icon="guidance:down-arrow" style={{ fontSize: 200 }} />
            </div>
          </ScrollAnimationFromTop>
          {/* TOOLS USED IN PORTFOLIO COMPONENT */}
          <ScrollAnimationFromLeft>
            <div className="sm:mb-16 md:mb-10 lg:mb-20 xl:mb-20 xxl:pb-40">
              <Tools />
            </div>
          </ScrollAnimationFromLeft>
          {/* FOOTER COMPONENT */}
          <ScrollAnimationFromRight>
            <div className="sm:mb-16 md:mb-10 lg:mb-20 xl:mb-20 xxl:pb-40">
              <Footer />
            </div>
          </ScrollAnimationFromRight>
        </div>
      </div>
    </>
  );
}

export default App;
