"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import {
  IoCallOutline,
  IoGlobeOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoTimeOutline
} from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Replace this URL with your own Google Apps Script URL
      const GOOGLE_APPS_SCRIPT_URL =
        "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";

      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("phoneNumber", formData.phoneNumber);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("timestamp", new Date().toISOString());

      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors",
      });

      console.log("Form data sent:", formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const contactDetails = [
    {
      icon: <CiLocationOn className="text-3xl" />,
      title: "Corporate Office",
      details: "D-4, House 78, Road No. 11,Banani, Dhaka",
      color: "bg-rose-50 text-rose-500",
    },
    {
      icon: <MdMailOutline className="text-3xl" />,
      title: "Email Address",
      details: "lets@a-linebrands.com",
      link: "mailto:lets@a-linebrands.com",
      color: "bg-blue-50 text-blue-500",
    },
    {
      icon: <IoCallOutline className="text-3xl" />,
      title: "Phone Number",
      details: "+880 1719-951661",
      link: "tel:+880 1719-951661",
      color: "bg-green-50 text-green-500",
    },
    {
      icon: <IoTimeOutline className="text-3xl" />,
      title: "Working Hours",
      details: "Sun - Thurs, 09:00 AM - 6:00 PM",
      color: "bg-purple-50 text-purple-500",
    },
    // {
    //   icon: <IoGlobeOutline className="text-3xl" />,
    //   title: "Website",
    //   details: "https://www.a-linebrands.com/",
    //   link: "https://www.a-linebrands.com/",
    //   color: "bg-amber-50 text-amber-500",
    // },
  ];

  const socialLinks = [
    {
      icon: <IoLogoFacebook className="text-2xl" />,
      url: "https://www.facebook.com/ALineLimited/",
      label: "Facebook",
    },
    {
      icon: <IoLogoLinkedin className="text-2xl" />,
      url: "https://www.linkedin.com/company/a-linebrands",
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram className="text-2xl" />,
      url: "https://www.instagram.com/a_linebrands",
      label: "Instagram",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden pt-16 md:pt-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Left Section */}
        <div className="lg:col-span-2  p-8 text-black flex flex-col ">
          <div>
            <h4 className="text-black text-4xl font-bold mb-4">Connect With Us</h4>
            <p className="text-gray-700 mb-4">
              Reach out to learn more about our products and services.
            </p>

            <div className="space-y-4 mb-4">
              {contactDetails.map((detail, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`rounded-full p-3 ${detail.color} text-lg`}>
                    {detail.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold">{detail.title}</h4>
                    {detail.link ? (
                      <a
                        href={detail.link}
                        className="text-black hover:text-white transition-colors text-sm"
                      >
                        {detail.details}
                      </a>
                    ) : (
                      <p className="text-black text-sm">{detail.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3 p-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-8">
                <p className="text-gray-600">Please fill out the form below</p>
              </div>

              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-black"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-black"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-black"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none text-black"
                  placeholder="Enter your message"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full  text-black py-2 px-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium cursor-pointer"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          ) : (
            <div className="text-center">
              <h4 className="text-4xl font-semibold text-green-600">
                Thank you for contacting us
              </h4>
              <p className="text-gray-600 mt-2">
                Your information has been received successfully.
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}