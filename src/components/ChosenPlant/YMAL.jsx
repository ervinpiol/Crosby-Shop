import React from "react";
import Plants from "../../common/Plants";

const YMAL = () => {
  return (
    <div className="pt-40">
      <h3 className="text-3xl lg:text-[40px] pb-10">You Might Also Like </h3>
      <Plants isChosen />
    </div>
  );
};

export default YMAL;
