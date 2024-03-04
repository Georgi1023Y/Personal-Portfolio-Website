import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Form submitted successfully");
        // Reset the form after successful submission
        setFormData({
          name: "",
          email: "",
          mobile: "",
          subject: "",
          message: "",
        });
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div id="contact">
      <div className="flex flex-col px-10 py-10 xl:py-20 xxl:py-28 xxl:px-16 bg-white bg-opacity-25 contact-form h-full">
        <h3 className="sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl xxl:text-7xl font-extrabold text-center">
          Contact Me
        </h3>
        <div className="sm:mt-6 md:mt-8 mt-10 xl:mt-12 flex flex-row justify-center gap-10">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 xxl:gap-10">
              <div className="sm:flex sm:flex-col sm:items-center md:flex md:flex-col md:items-center flex flex-row gap-4 xxl:gap-10">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="sm:pl-6 pl-8 text-base text-black lg:text-xl xl:text-xl xxl:text-3xl bg-white md:w md:h-12 w-96 h-12 form-style-xl rounded-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="sm:pl-6 sm:text-sm pl-8 text-base text-black bg-white lg:text-xl xl:text-xl xxl:text-3xl w-96 h-12 form-style-xl rounded-full"
                  />
                </div>
              </div>
              <div className="sm:mt-0 sm:flex sm:flex-col sm:items-center md:mt-0 md:flex md:flex-col md:items-center mt-2 flex flex-row gap-4 xxl:gap-10">
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className="sm:pl-6 sm:text-sm pl-8 text-base text-black lg:text-xl xl:text-xl xxl:text-3xl bg-white w-96 h-12 form-style-xl rounded-full"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="sm:pl-6 sm:text-sm pl-8 text-base text-black bg-white lg:text-xl xl:text-xl xxl:text-3xl  w-96 h-12 form-style-xl rounded-full"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="mt-2 sm:pl-6 md:pl-8 sm:mb-1 md:mb-2 sm:text-sm text-base bg-white lg:text-xl xl:text-xl xxl:text-3xl text-black px-8 py-5 w-full sm:h-36 md:h-44 lg:h-52 xl:h-64 xxl:h-80 rounded-3xl"
              ></textarea>
              <div className="flex justify-center cursor-pointer mt-2">
                <button
                  type="submit"
                  className="flex items-center gap-3 bg-black rounded-full py-3 px-5 sm:py-3 sm:px-5 md:py-4 md:px-6 lg:py-6 lg:px-8 xl:py-5 xl:px-7 xxl:py-8 xxl:px-12"
                >
                  <h2 className="text-base text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl xxl:text-4xl font-semibold">
                    Send
                  </h2>
                  <div className="flex justify-center items-center md:hidden lg:hidden xl:hidden xxl:hidden">
                    <Icon
                      icon="fluent:send-16-regular"
                      style={{ color: "white", fontSize: 22 }}
                    />
                  </div>
                  <div className="flex justify-center items-center sm:hidden xxl:hidden">
                    <Icon
                      icon="fluent:send-16-regular"
                      style={{ color: "white", fontSize: 30 }}
                    />
                  </div>
                  <div className="flex justify-center items-center sm:hidden md:hidden lg:hidden xl:hidden">
                    <Icon
                      icon="fluent:send-16-regular"
                      style={{ color: "white", fontSize: 50 }}
                    />
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
