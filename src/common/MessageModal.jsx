import React from "react";

const MessageModal = ({ setCheckout }) => {
  return (
    <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50">
      <div className="w-11/12 md:h-auto md:w-4/5 lg:w-3/5 xl:w-[680px] p-10 bg-white text-DarkGray flex flex-col justify-center items-center">
        <h4 className="text-2xl">Order completed.</h4>
        <h1 className="pt-10 text-5xl leading-6">Thank you!</h1>
        <button
          className="bg-[#333333] text-white py-4 px-10 block text-center mt-12"
          onClick={() => setCheckout(false)}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default MessageModal;
