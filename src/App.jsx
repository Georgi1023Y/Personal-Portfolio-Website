import { Suspense, useEffect, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
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
        <Canvas pixelRatio={window.devicePixelRatio} antialias={true}>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <OrbitControls
            enableZoom={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 3}
          />
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
  // SHOWS MESSAGE IF SCREEN SIZE IS NOT RESPONSIVE - UNDER 319PX
  const [showMessage, setShowMessage] = useState(false);

  // CHECKS WHAT IS SCREEN SIZE
  useEffect(() => {
    function checkScreenSize() {
      const screenWidth = window.innerWidth;
      if (screenWidth < 320 || screenWidth > 2560) {
        setShowMessage(true);
        console.log(screenWidth);
      } else {
        setShowMessage(false);
      }
    }
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    console.log(showMessage);
  }, [showMessage]);

  const toggleGradient = () => {
    setLight(!light);
  };

  return (
    <>
      <div>
        {showMessage ? (
          <div className="flex flex-col items-center justify-center gap-4 text-black p-5">
            <p className="text-xs 2xl:text-4xl text-center">
              It seems our website isn't fully optimized for your screen size.
              For a better experience, please try using a larger screen or
              adjusting your browser window. Thank you for your understanding.
            </p>
            <Icon icon="line-md:iconify1" className="text-yellow-300 text-2xl 2xl:text-6xl"/>
          </div>
        ) : (
          <div
            className={
              light
                ? "flex flex-col text-white light-mode"
                : "flex flex-col text-white dark-mode"
            }
          >
            <ScrollAnimationFromTop>
              <div className="pt-6 flex flex-row justify-center gap-5">
                {/* SUN MODE */}
                {/* FOR SM SCREENS */}
                <div className="block md:hidden">
                  <button onClick={toggleGradient}>
                    <Icon
                      icon={
                        light
                          ? "line-md:moon-filled-alt-to-sunny-filled-loop-transition"
                          : "line-md:moon-alt-to-sunny-outline-loop-transition"
                      }
                      style={{ color: "white", fontSize: 35 }}
                    />
                  </button>
                </div>
                {/* FOR MD SCREENS */}
                <div className="hidden md:block lg:hidden">
                  <button onClick={toggleGradient}>
                    <Icon
                      icon={
                        light
                          ? "line-md:moon-filled-alt-to-sunny-filled-loop-transition"
                          : "line-md:moon-alt-to-sunny-outline-loop-transition"
                      }
                      style={{ color: "white", fontSize: 45 }}
                    />
                  </button>
                </div>
                {/* FOR LG + XL SCREENS */}
                <div className="hidden lg:block">
                  <button onClick={toggleGradient}>
                    <Icon
                      icon={
                        light
                          ? "line-md:moon-filled-alt-to-sunny-filled-loop-transition"
                          : "line-md:moon-alt-to-sunny-outline-loop-transition"
                      }
                      style={{ color: "white", fontSize: 45 }}
                    />
                  </button>
                </div>
                {/* MOON MODE */}
                {/* FOR SM SCREENS */}
                <div className="block md:hidden">
                  <button onClick={toggleGradient}>
                    <Icon
                      icon={
                        light
                          ? "line-md:sunny-outline-to-moon-alt-loop-transition"
                          : "line-md:sunny-filled-loop-to-moon-filled-loop-transition"
                      }
                      style={{ color: "white", fontSize: 35 }}
                    />
                  </button>
                </div>
                {/* FOR MD SCREENS */}
                <div className="hidden md:block lg:hidden">
                  <button onClick={toggleGradient}>
                    <Icon
                      icon={
                        light
                          ? "line-md:sunny-outline-to-moon-alt-loop-transition"
                          : "line-md:sunny-filled-loop-to-moon-filled-loop-transition"
                      }
                      style={{ color: "white", fontSize: 45 }}
                    />
                  </button>
                </div>
                {/* FOR LG + XL SCREENS */}
                <div className="hidden lg:block">
                  <button onClick={toggleGradient}>
                    <Icon
                      icon={
                        light
                          ? "line-md:sunny-outline-to-moon-alt-loop-transition"
                          : "line-md:sunny-filled-loop-to-moon-filled-loop-transition"
                      }
                      style={{ color: "white", fontSize: 45 }}
                    />
                  </button>
                </div>
              </div>
            </ScrollAnimationFromTop>
            <div className="px-10  md:px-12 md:py-8 lg:px-20 xl:px-20">
              {/* HOME COMPONENT */}
              <div className="mb-5 md:mb-20 lg:mb-12 xl:mb-30">
                <Home />
              </div>
              {/* ABOUT COMPONENT */}
              <ScrollAnimationFromRight>
                <div className="mb-16 md:mb-10 lg:mb-20 xl:mb-30">
                  <About />
                </div>
              </ScrollAnimationFromRight>
              {/* DOWN ARROW ICON */}
              <ScrollAnimationFromTop>
                <div className="md:hidden lg:hidden xl:hidden 2xl:hidden flex justify-center my-10 md:mb-10 lg:mb-20 xl:mb-30">
                  <Icon icon="guidance:down-arrow" style={{ fontSize: 60 }} />
                </div>
                <div className="hidden md:flex lg:hidden justify-center sm:mb-16 md:mb-10 lg:mb-20  xl:mb-30">
                  <Icon icon="guidance:down-arrow" style={{ fontSize: 120 }} />
                </div>
                <div className="hidden lg:flex xl:hidden justify-center sm:mb-16 md:mb-10 lg:mb-20 xl:mb-30">
                  <Icon icon="guidance:down-arrow" style={{ fontSize: 125 }} />
                </div>
                <div className="hidden xl:flex 2xl:hidden justify-center sm:mb-10 md:mb-20 lg:mb-20  xl:mb-30">
                  <Icon icon="guidance:down-arrow" style={{ fontSize: 150 }} />
                </div>
                <div className="hidden 2xl:flex justify-center sm:mb-16 md:mb-10 lg:mb-20 xl:mb-30">
                  <Icon icon="guidance:down-arrow" style={{ fontSize: 175 }} />
                </div>
              </ScrollAnimationFromTop>
              {/* MY SKILLS COMPONENT */}
              <ScrollAnimationFromLeft>
                <div className="sm:mb-16 md:mb-10 lg:mb-20 2xl:mb-30">
                  <Skills />
                </div>
              </ScrollAnimationFromLeft>
              {/* DOWN ARROW ICON */}
              <ScrollAnimationFromTop>
                <div className="md:hidden lg:hidden xl:hidden 2xl:hidden flex justify-center my-10 md:mb-10 lg:mb-20 xl:mb-30">
                  <Icon icon="guidance:down-arrow" style={{ fontSize: 60 }} />
                </div>
                <div className="hidden md:flex lg:hidden justify-center sm:mb-16 md:mb-10 lg:mb-20 xl:mb-30">
                  <Icon icon="guidance:down-arrow" style={{ fontSize: 120 }} />
                </div>
                <div className="hidden lg:flex xl:hidden justify-center sm:mb-16 md:mb-10 lg:mb-20 xl:mb-30">
                  <Icon icon="guidance:down-arrow" style={{ fontSize: 125 }} />
                </div>
                <div className="hidden xl:flex 2xl:hidden justify-center sm:mb-10 md:mb-20 lg:mb-20 xl:mb-30">
                  <Icon icon="guidance:down-arrow" style={{ fontSize: 150 }} />
                </div>
                <div className="hidden 2xl:flex justify-center sm:mb-16 md:mb-10 lg:mb-20 xl:mb-30">
                  <Icon icon="guidance:down-arrow" style={{ fontSize: 175 }} />
                </div>
              </ScrollAnimationFromTop>
              {/* PROJECTS COMPONENT */}
              <ScrollAnimationFromRight>
                <div className="sm:mb-16 md:mb-10 lg:mb-20 xl:mb-30">
                  <Projects />
                </div>
              </ScrollAnimationFromRight>
              {/* DOWN ARROW ICON */}
              <ScrollAnimationFromTop>
                <div className="md:hidden lg:hidden xl:hidden 2xl:hidden flex justify-center my-10 md:mb-10 xl:mb-30">
                  <Icon icon="guidance:down-arrow" style={{ fontSize: 60 }} />
                </div>
                <div className="hidden md:flex lg:hidden justify-center sm:mb-16 md:mb-10 lg:mb-20  xl:mb-30">
                  <Icon icon="guidance:down-arrow" style={{ fontSize: 120 }} />
                </div>
                <div className="hidden lg:flex xl:hidden justify-center sm:mb-16 md:mb-10 lg:mb-20 xl:mb-30">
                  <Icon icon="guidance:down-arrow" style={{ fontSize: 125 }} />
                </div>
                <div className="hidden xl:flex 2xl:hidden justify-center sm:mb-10 md:mb-20 lg:mb-20 xl:mb-30">
                  <Icon icon="guidance:down-arrow" style={{ fontSize: 150 }} />
                </div>
                <div className="hidden 2xl:flex justify-center sm:mb-16 md:mb-10 lg:mb-20 xl:mb-30">
                  <Icon icon="guidance:down-arrow" style={{ fontSize: 175 }} />
                </div>
              </ScrollAnimationFromTop>
              {/* CONTACT COMPONENT */}
              <ScrollAnimationFromBottom>
                <div className="flex items-center justify-center sm:mb-16 md:mb-10 lg:mb-20 xl:mb-30">
                  <Contact />
                </div>
              </ScrollAnimationFromBottom>
              {/* DOWN ARROW ICON */}
              <ScrollAnimationFromTop>
                <div className="md:hidden lg:hidden xl:hidden 2xl:hidden flex justify-center my-10 md:mb-10 lg:mb-20 xl:mb-30">
                  <Icon icon="guidance:down-arrow" style={{ fontSize: 60 }} />
                </div>
                <div className="hidden md:flex lg:hidden justify-center sm:mb-16 md:mb-10 lg:mb-20 xl:mb-30">
                  <Icon icon="guidance:down-arrow" style={{ fontSize: 120 }} />
                </div>
                <div className="hidden lg:flex xl:hidden justify-center sm:mb-16 md:mb-10 lg:mb-20 xl:mb-30">
                  <Icon icon="guidance:down-arrow" style={{ fontSize: 125 }} />
                </div>
                <div className="hidden xl:flex 2xl:hidden justify-center sm:mb-10 md:mb-20 lg:mb-20 xl:mb-30">
                  <Icon icon="guidance:down-arrow" style={{ fontSize: 150 }} />
                </div>
                <div className="hidden 2xl:flex justify-center sm:mb-16 md:mb-10 lg:mb-20 xl:mb-30">
                  <Icon icon="guidance:down-arrow" style={{ fontSize: 175 }} />
                </div>
              </ScrollAnimationFromTop>
              {/* TOOLS USED IN PORTFOLIO COMPONENT */}
              <ScrollAnimationFromLeft>
                <div className="sm:mb-16 md:mb-10 lg:mb-20 xl:mb-30">
                  <Tools />
                </div>
              </ScrollAnimationFromLeft>
              {/* FOOTER COMPONENT */}
              <ScrollAnimationFromRight>
                <div className="sm:mb-16 md:mb-10 lg:mb-20 xl:mb-30">
                  <Footer />
                </div>
              </ScrollAnimationFromRight>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
