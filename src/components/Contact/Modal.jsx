import React, { useState } from "react";
import CrossIcon from "../../assets/icons/black-cross-icon.svg";
import WarningIcon from "../../assets/icons/warning-icon.svg";

const Modal = ({ setOpenContactModal }) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const isValidEmail = data.email && /\S+@\S+\.\S+/.test(data.email);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      if (
        !data.firstName ||
        !data.lastName ||
        !data.email ||
        !isValidEmail ||
        !data.message
      ) {
        setSubmitted(true);
        setIsSubmitting(false);
      } else {
        setShowThankYouMessage(true);
        setIsSubmitting(false);
      }
    }, 2500);
  };

  return (
    <div className="fixed top-0 z-10 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50">
      <form className="w-screen h-screen md:h-auto md:w-4/5 lg:w-3/5 xl:w-[680px] p-10 bg-white text-DarkGray">
        <div className="flex items-center justify-between">
          <h4 className="text-2xl">Contact Us</h4>
          <button onClick={() => setOpenContactModal(false)}>
            <img src={CrossIcon} alt="CrossIcon" />
          </button>
        </div>
        {!showThankYouMessage ? (
          <>
            <div className="flex flex-col gap-4 pt-14">
              <div className="flex flex-col items-center w-full gap-2 md:items-end md:flex-row">
                <div className="flex flex-col items-start w-full md:w-1/2">
                  <p className="pb-2 text-sm">
                    Name<span className="text-xs opacity-60">(required)</span>
                  </p>
                  <label className="text-sm">First Name</label>
                  {submitted && !data.firstName && (
                    <div className="flex items-center gap-2 p-2 mb-1 text-xs text-white bg-red-600">
                      <img src={WarningIcon} alt="WarningIcon" />
                      <span>First Name is required</span>
                    </div>
                  )}
                  <input
                    type="text"
                    name="firstName"
                    id=""
                    className="w-full h-12 border border-Gray"
                    onChange={handleChange}
                    value={data.firstName}
                  />
                </div>
                <div className="flex flex-col items-start w-full md:w-1/2">
                  <label className="text-sm">Last Name</label>
                  {submitted && !data.lastName && (
                    <p className="flex items-center gap-2 p-2 mb-1 text-xs text-white bg-red-600">
                      <img src={WarningIcon} alt="WarningIcon" />
                      Last Name is required
                    </p>
                  )}
                  <input
                    type="text"
                    name="lastName"
                    id=""
                    className="w-full h-12 border border-Gray"
                    onChange={handleChange}
                    value={data.lastName}
                  />
                </div>
              </div>
              <div className="flex flex-col items-start">
                <label className="text-sm">
                  Email <span className="text-xs opacity-60">(required)</span>
                </label>
                {submitted && !data.email && (
                  <p className="flex items-center gap-2 p-2 mb-1 text-xs text-white bg-red-600">
                    <img src={WarningIcon} alt="WarningIcon" />
                    Email is required
                  </p>
                )}
                {submitted && data.email && !isValidEmail && (
                  <p className="flex items-center gap-2 p-2 mb-1 text-xs text-white bg-red-600">
                    <img src={WarningIcon} alt="WarningIcon" />
                    Email is not valid. Email addresses should follow the format
                    user@domain.com.
                  </p>
                )}
                <input
                  type="email"
                  name="email"
                  id=""
                  className="w-full h-12 border border-Gray"
                  onChange={handleChange}
                  value={data.email}
                />
              </div>
              <div className="flex flex-col items-start">
                <label className="text-sm">
                  Message <span className="text-xs opacity-60">(required)</span>
                </label>
                {submitted && !data.message && (
                  <p className="flex items-center gap-2 p-2 mb-1 text-xs text-white bg-red-600">
                    <img src={WarningIcon} alt="WarningIcon" />
                    Message is required
                  </p>
                )}
                <textarea
                  name="message"
                  cols="30"
                  rows="4"
                  className="w-full border resize-none border-Gray"
                  onChange={handleChange}
                  value={data.message}
                ></textarea>
              </div>
            </div>
            <button
              className="bg-[#333333] text-white py-4 px-10 mx-auto block mt-6 text-center"
              onClick={handleSubmit}
            >
              {isSubmitting ? "Submitting..." : "Send"}
            </button>
          </>
        ) : (
          <p className="pt-8">Thank you!</p>
        )}
      </form>
    </div>
  );
};

export default Modal;
