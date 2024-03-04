import React from "react";
// IMPORTING ICONS FROM ICONIFY
import { Icon } from "@iconify-icon/react";

const Services = () => {
  return (
    <div>
      {/* SERVICES COMPONENT FOR SM AND MD SCREEN SIZES */}
      <div className="flex flex-col gap-10 md:gap-16 lg:hidden xl:hidden xxl:hidden">
        <h2 className="text-3xl md:text-4xl mb-4 font-bold text-center">
          Services
        </h2>
        {/* WEB DEVELOPMENT */}
        <div className="flex flex-col items-center p-4 gap-4 md:p-6 md:gap-5 border-2 border-white w-full h-full rounded-3xl">
          {/* WEB DEVELOPMENT ICON FROM ICONIFY */}
          <div className="md:hidden flex items-center justify-center my-2 border-2 border-white w-16 h-16 rounded-full">
            <Icon icon="material-symbols:code" style={{ fontSize: 35 }} />
          </div>
          <div className="sm:hidden flex items-center justify-center my-2 border-2 border-white w-20 h-20 rounded-full">
            <Icon icon="material-symbols:code" style={{ fontSize: 45 }} />
          </div>
          {/* HEADING + TEXT */}
          <h3 className="text-xl md:text-2xl font-bold text-center">
            WEB DEVELOPMENT
          </h3>
          <p className="text-base md:text-xl font-light text-center mb-2">
            Responsive web apps using React, Django, Flask, and Node.js.
          </p>
        </div>
        {/* MOBILE APP DEVELOPMENT */}
        <div className="flex flex-col items-center p-4 gap-4 md:p-6 md:gap-5 border-2 border-white w-full h-full rounded-3xl">
          {/* MOBILE APP DEVELOPMENT ICON FROM ICONIFY */}
          <div className="md:hidden flex items-center justify-center my-2 border-2 border-white w-16 h-16 rounded-full">
            <Icon icon="carbon:application-mobile" style={{ fontSize: 35 }} />
          </div>
          <div className="sm:hidden flex items-center justify-center my-2 border-2 border-white w-20 h-20 rounded-full">
            <Icon icon="carbon:application-mobile" style={{ fontSize: 45 }} />
          </div>
          {/* HEADING + TEXT */}
          <h3 className="text-xl md:text-2xl font-bold text-center">
            MOBILE APP DEVELOPMENT
          </h3>
          <p className="text-base md:text-xl font-light text-center mb-2">
            Dynamic, cross-platform apps with React Native.
          </p>
        </div>
        {/* API DEVELOPMENT */}
        <div className="flex flex-col items-center p-4 gap-4 md:p-6 md:gap-5 border-2 border-white w-full h-full rounded-3xl">
          {/* API ICON FROM ICONIFY */}
          <div className="md:hidden flex items-center justify-center my-2 border-2 border-white w-16 h-16 rounded-full">
            <Icon icon="mdi:api" style={{ fontSize: 35 }} />
          </div>
          <div className="sm:hidden flex items-center justify-center my-2 border-2 border-white w-20 h-20 rounded-full">
            <Icon icon="mdi:api" style={{ fontSize: 45 }} />
          </div>
          {/* HEADING + TEXT */}
          <h3 className="text-xl md:text-2xl font-bold text-center">
            API DEVELOPMENT
          </h3>
          <p className="text-base md:text-xl font-light text-center mb-2">
            Building dynamic APIs for seamless integration.
          </p>
        </div>
        {/* E-COMMERCE SOLUTIONS */}
        <div className="flex flex-col items-center p-4 gap-4 md:p-6 md:gap-5 border-2 border-white w-full h-full rounded-3xl">
          {/* STORE ICON FROM ICONIFY */}
          <div className="md:hidden flex items-center justify-center my-2 border-2 border-white w-16 h-16 rounded-full">
            <Icon icon="entypo:shop" style={{ fontSize: 35 }} />
          </div>
          <div className="sm:hidden flex items-center justify-center my-2 border-2 border-white w-20 h-20 rounded-full">
            <Icon icon="entypo:shop" style={{ fontSize: 45 }} />
          </div>
          {/* HEADING + TEXT */}
          <h3 className="text-xl md:text-2xl font-bold text-center">
            E-COMMERCE SOLUTIONS
          </h3>
          <p className="text-base md:text-xl font-light text-center mb-2">
            Custom e-commerce platforms for online presence.
          </p>
        </div>
        {/* CONSULTATION AND TRAINING */}
        <div className="flex flex-col items-center p-4 gap-4 md:p-6 md:gap-5 border-2 border-white w-full h-full rounded-3xl">
          {/* CONSULTATION AND TRAINING ICON FROM ICONIFY */}
          <div className="md:hidden flex items-center justify-center my-2 border-2 border-white w-16 h-16 rounded-full">
            <Icon icon="oui:training" style={{ fontSize: 35 }} />
          </div>
          <div className="sm:hidden flex items-center justify-center my-2 border-2 border-white w-20 h-20 rounded-full">
            <Icon icon="oui:training" style={{ fontSize: 45 }} />
          </div>
          {/* HEADING + TEXT */}
          <h3 className="text-xl md:text-2xl font-bold text-center">
            CONSULTATION AND TRAINING
          </h3>
          <p className="text-base md:text-xl font-light text-center mb-2">
            Expert consultation and training for tech empowerment.
          </p>
        </div>
        {/* MAINTANANCE AND SUPPORT */}
        <div className="flex flex-col items-center p-4 gap-4 md:p-6 md:gap-5 border-2 border-white w-full h-full rounded-3xl">
          {/* MAINTANANCE AND SUPPORT ICON FROM ICONIFY */}
          <div className="md:hidden flex items-center justify-center my-2 border-2 border-white w-16 h-16 rounded-full">
            <Icon icon="icons8:support" style={{ fontSize: 35 }} />
          </div>
          <div className="sm:hidden flex items-center justify-center my-2 border-2 border-white w-20 h-20 rounded-full">
            <Icon icon="icons8:support" style={{ fontSize: 45 }} />
          </div>
          {/* HEADING + TEXT */}
          <h3 className="text-xl md:text-2xl font-bold text-center">
            MAINTANANCE AND SUPPORT
          </h3>
          <p className="text-base md:text-xl font-light text-center mb-2">
            Ongoing maintenance and support for application health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
