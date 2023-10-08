import React from "react";
import { Link, useParams } from "react-router-dom";

import { journalData } from "../data/journalData";
import ArrowLeft from "../assets/icons/arrow-left.svg";
import ArrowRight from "../assets/icons/arrow-right.svg";

const ChosenJournal = () => {
  const { journalName } = useParams();

  const journal = journalData.find(
    (j) =>
      j.name.toLowerCase().replace(/\s+/g, "-").replace(/\?/g, "") ===
      journalName
  );

  const { image, name, date, id } = journal;

  const oppositeJournal =
    name === "Is It Flowers You’re After?"
      ? "Searching for Succulents?"
      : "Is It Flowers You’re After?";

  return (
    <div className="w-full pt-40 xl:pt-60 bg-DarkGray">
      <div className="flex flex-col items-center justify-center px-4 mx-auto xl:w-2/3 md:px-8 lg:px-12 xl:px-0">
        <div>
          <span className="pr-3">{date}</span>
          <span className="before:content-['•'] before:pr-3">
            Written By Guest User
          </span>
        </div>
        <h2 className="pt-10 text-[40px] lg:text-6xl text-center">{name}</h2>
        <div className="flex flex-col items-center pt-20 xl:pt-32 xl:w-1/2">
          <img src={image} alt="journal image" />
          <div className="flex flex-col gap-6 pt-10 leading-loose xl:pt-32 ">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <p>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis at vero eros et accumsan et iusto odio dignissim qui
              blandit praesent luptatum zzril delenit augue duis dolore te
              feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat.
            </p>
            <p>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`pt-20 xl:pt-52 pb-20 gap-6 items-center text-[26px] lg:text-[32px] flex xl:w-auto ${
          id === 1 ? "xl:pr-32 pr-8 justify-end" : "pl-8 xl:pl-32"
        }`}
      >
        {id === 2 && (
          <img src={ArrowLeft} alt="ArrowLeft" className="w-6 xl:w-4" />
        )}
        <Link
          to={`/journal/${oppositeJournal.toLowerCase().replace(/\s+/g, "-")}`}
          className="w-40 leading-tight md:w-auto"
        >
          {oppositeJournal}
        </Link>
        {id === 1 && (
          <img src={ArrowRight} alt="ArrowRight" className="w-6 xl:w-4" />
        )}
      </div>
    </div>
  );
};

export default ChosenJournal;
