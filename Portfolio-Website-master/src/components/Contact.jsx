import React, { useState, useEffect } from "react";
import axios from "axios";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_API_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

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
      const { data, error } = await supabase
        .from("contacts")
        .insert([formData]);

      if (error) {
        console.error("Failed to submit form:", error);
      } else {
        alert("Your message was sent successfully");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      alert("Error submitting form");
    }
  };

  return (
    <div id="contact" className="contact-form">
      <div className="flex flex-col p-5 xl:py-20 bg-white bg-opacity-25 w-full h-full rounded-3xl">
        <h3 className="my-2 text-lg font-extrabold text-center">
          Contact Me
        </h3>
        <div className="mt-6 md:mt-8 xl:mt-12 flex flex-row justify-center gap-10">
          <form onSubmit={handleSubmit} className="md:w-1/2">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-col items-center justify-center w-full gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-1/2 h-12 lg:w-full lg:h-12 md:w-full md:h-14 pl-6 text-black text-xs md:text-sm bg-white  form-style-xl rounded-3xl"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-1/2 md:w-full lg:h-12 h-12 mb-2 pl-6 text-black text-xs md:text-sm bg-white form-style-xl rounded-3xl"
                />
              </div>
              <div className="flex flex-col items-center justify-center md:text-xl md:mt-0 md:flex md:flex-col md:items-center mt-2 gap-4">
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className="w-1/2 h-12 pl-6 md:w-full lg:h-12 text-black text-xs md:text-sm bg-white form-style-xl rounded-3xl"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-1/2 h-12 pl-6 md:w-full lg:h-12 text-black text-xs md:text-sm bg-white e form-style-xl rounded-3xl"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="mt-2 pl-6 sm:mb-1 text-xs md:text-sm md:mb-2 bg-white lg:text-base text-black px-8 py-5 w-full h-20 md:h-36 rounded-3xl"
              ></textarea>
              <div className="flex justify-center cursor-pointer mt-2">
                <button
                  type="submit"
                  className="flex items-center gap-3 bg-black rounded-3xl py-3 px-5 sm:py-3 sm:px-5 md:py-4 md:px-6 lg:py-6 lg:px-8 xl:py-5 xl:px-7"
                >
                  <h4 className="text-white text-xs md:text-sm lg:text-base font-semibold">
                    Send
                  </h4>
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