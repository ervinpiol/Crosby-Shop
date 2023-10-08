import React from "react";
import Details from "../components/ChosenPlant/Details";
import YMAL from "../components/ChosenPlant/YMAL";
import { useParams } from "react-router-dom";

const ChosenPlant = () => {
  return (
    <div className="w-full pt-40 xl:pt-60 bg-DarkGray">
      <div className="px-4 mx-auto xl:w-2/3 md:px-12 xl:px-0">
        <Details />
        <YMAL />
      </div>
    </div>
  );
};

export default ChosenPlant;
