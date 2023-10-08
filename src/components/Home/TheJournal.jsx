import React from "react";
import { Link } from "react-router-dom";
import { journalData } from "../../data/journalData";
import Hero2 from "../../assets/Hero/hero2.jpg";

const TheJournal = ({ isJournal }) => {
  return (
    <>
      {!isJournal && (
        <img
          src={Hero2}
          alt="Hero2"
          className="lg:h-[600px] w-screen object-cover"
        />
      )}
      <div className={`w-full ${isJournal ? "bg-DarkGray" : "bg-Gray"}`}>
        <div
          className={`flex flex-col items-center xl:w-2/3 gap-10 md:gap-20 pb-20 md:pb-32 mx-auto px-4 md:px-8 lg:px-12 xl:px-0 ${
            isJournal ? "pt-36 md:pt-60" : "pt-20 md:pt-36 lg:pt-32"
          }`}
        >
          {!isJournal && (
            <h2 className="md:text-[44px] text-[32px]">The Journal</h2>
          )}
          <div className="grid grid-cols-1 gap-20 md:gap-5 md:grid-cols-2">
            {journalData.map((journal, i) => (
              <div
                key={journal.id}
                className="flex flex-col items-center gap-8"
              >
                <img
                  src={journal.image}
                  alt={`Image${i + 1}`}
                  className="object-cover w-full lg:h-96"
                />
                {isJournal && <span>{journal.fullDate}</span>}
                <h3 className="text-[26px] lg:text-[32px] text-center">
                  {journal.name}
                </h3>
                {!isJournal && <p className="text-center">{journal.text}</p>}
                <Link
                  to={`/journal/${journal.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="flex items-center h-16 text-center bg-white px-14 text-Gray"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TheJournal;
