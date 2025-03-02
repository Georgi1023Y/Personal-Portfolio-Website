import { Suspense, useEffect, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Tools from "./components/Tools";
import { Icon } from '@iconify/react';
import {
  ScrollAnimationFromLeft,
  ScrollAnimationFromRight,
  ScrollAnimationFromTop,
  ScrollAnimationFromBottom,
} from "./components/ScrollAnimation";
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
  const [showMessage, setShowMessage] = useState(false);

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
            <p className="text-xs text-center">
              It seems our website isn't fully optimized for your screen size.
              For a better experience, please try using a larger screen or
              adjusting your browser window. Thank you for your understanding.
            </p>
            <Icon icon="line-md:iconify1" className="text-yellow-300 text-2xl"/>
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
              <div className="pt-6 flex flex-row justify-center gap-5 mb-5 md:mb-8">
                <div className="block lg:hidden">
                  <button onClick={toggleGradient}>
                    <Icon
                      icon={
                        light
                          ? "line-md:moon-filled-alt-to-sunny-filled-loop-transition"
                          : "line-md:moon-alt-to-sunny-outline-loop-transition"
                      }
                      className="text-white w-[24px] h-[24px]"
                    />
                  </button>
                </div>
                <div className="hidden lg:block">
                  <button onClick={toggleGradient}>
                    <Icon
                      icon={
                        light
                          ? "line-md:moon-filled-alt-to-sunny-filled-loop-transition"
                          : "line-md:moon-alt-to-sunny-outline-loop-transition"
                      }
                      className="text-white w-[30px] h-[30px]"
                    />
                  </button>
                </div>
                <div className="block lg:hidden">
                  <button onClick={toggleGradient}>
                    <Icon
                      icon={
                        light
                          ? "line-md:sunny-outline-to-moon-alt-loop-transition"
                          : "line-md:sunny-filled-loop-to-moon-filled-loop-transition"
                      }
                      className="text-white w-[24px] h-[24px]"
                    />
                  </button>
                </div>
                <div className="hidden lg:block">
                  <button onClick={toggleGradient}>
                    <Icon
                      icon={
                        light
                          ? "line-md:sunny-outline-to-moon-alt-loop-transition"
                          : "line-md:sunny-filled-loop-to-moon-filled-loop-transition"
                      }
                      className="text-white w-[30px] h-[30px]"
                    />
                  </button>
                </div>
              </div>
            </ScrollAnimationFromTop>
            <div className="px-10 lg:px-20">
              <div className="mb-5  lg:mb-12">
                <Home />
              </div>
              <ScrollAnimationFromRight>
                <div className="mb-16 lg:mb-20">
                  <About />
                </div>
              </ScrollAnimationFromRight>
              <ScrollAnimationFromTop>
                <div className="md:hidden flex justify-center my-10">
                  <Icon icon="guidance:down-arrow" style={{ fontSize: 60 }} />
                </div>
                <div className="hidden md:flex justify-center my-10">
                  <Icon icon="guidance:down-arrow" style={{ fontSize: 100 }} />
                </div>
              </ScrollAnimationFromTop>
              <ScrollAnimationFromLeft>
                <div className="sm:mb-16 lg:mb-20">
                  <Skills />
                </div>
              </ScrollAnimationFromLeft>
              <ScrollAnimationFromTop>
                <div className="md:hidden flex justify-center my-10">
                  <Icon icon="guidance:down-arrow" style={{ fontSize: 60 }} />
                </div>
                <div className="hidden md:flex justify-center my-10">
                  <Icon icon="guidance:down-arrow" style={{ fontSize: 100 }} />
                </div>
              </ScrollAnimationFromTop>
              <ScrollAnimationFromRight>
                <div className="sm:mb-16 lg:mb-20">
                  <Projects />
                </div>
              </ScrollAnimationFromRight>
              <ScrollAnimationFromTop>
                <div className="md:hidden flex justify-center my-10">
                  <Icon icon="guidance:down-arrow" style={{ fontSize: 60 }} />
                </div>
                <div className="hidden md:flex justify-center my-10">
                  <Icon icon="guidance:down-arrow" style={{ fontSize: 100 }} />
                </div>
              </ScrollAnimationFromTop>
              <ScrollAnimationFromBottom>
                <div className="flex items-center justify-center sm:mb-16 md:mb-10 lg:mb-20">
                  <Contact />
                </div>
              </ScrollAnimationFromBottom>
              <ScrollAnimationFromTop>
                <div className="md:hidden flex justify-center my-10">
                  <Icon icon="guidance:down-arrow" style={{ fontSize: 60 }} />
                </div>
                <div className="hidden md:flex justify-center my-10">
                  <Icon icon="guidance:down-arrow" style={{ fontSize: 100 }} />
                </div>
              </ScrollAnimationFromTop>
              <ScrollAnimationFromLeft>
                <div className="sm:mb-16 lg:mb-20">
                  <Tools />
                </div>
              </ScrollAnimationFromLeft>
              <ScrollAnimationFromRight>
                <div className="sm:mb-16 md:mb-10 lg:mb-20">
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
