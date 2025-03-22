import React, { useState } from "react";
import { skill } from '../../Data';
import './Skills.css';

const Skills = () => {
  const [fabActive, setFabActive] = useState(false);

  const openFAB = () => {
    setFabActive(true);
  };

  const closeFAB = () => {
    setFabActive(false);
  };

  return (
    <section
      className="pb-[220px] bg-gradient-180 from-bgColor to-bgColor dark:bg-gradient-180 dark:from-bgColorAltDark dark:to-bgColorAltDark sm:px-[5%] 2xl:px-[17%]"
      id="skills"
    >
      <h2 className="uppercase tracking-[0.05em] text-[34px] sm:text-h1Size font-[700] text-titleColor dark:text-titleColorDark text-center">
        Professional Skills
      </h2>
      <p className="leading-[1.7] text-primaryColor uppercase text-smaller font-[700] mb-[60px] text-center">
        My
        <span className="font-[Caveat] text-titleColor dark:text-titleColorDark text-h3Size capitalize ml-[10px]">
          Talent
        </span>
      </p>

      {/* Display 3 cards per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
      
        {skill.slice(0, 5).map(({ name, percentage, description }, index) => {
          return (
            
            <div
              className="skills_item border-2 border-titleColor py-6 lg:px-4 mx-8 rounded-2xl bg-bgColorAlt dark:border-2 dark:border-titleColorDark dark:bg-bgColorAltDark"
              key={index}
            >
              <div className="flex justify-between items-center mb-[15px] px-[30px]">
                <h3 className="text-larger text-titleColor font-[700] dark:text-titleColorDark">
                  {name}
                </h3>
                <span className="text-titleColor dark:text-titleColorDark font-[700] text-large">
                  {percentage} <span className="text-primaryColor">%</span>
                </span>
              </div>
              <p className="mb-[30px] px-[30px] text-titleColor dark:text-titleColorDark text-small">
                {description}
              </p>

              <div className="h-[2px] dark:bg-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.3)] mx-12 sm:mx-4">
                <span
                  className="relative h-[2px] block bg-primaryColor"
                  style={{
                    width: `${percentage}%`,
                  }}
                >
                  <span className="bg-containerColor border-[2px] border-solid border-borderColor w-[25px] h-[25px] rounded-[50%] absolute right-0 top-[-12px]"></span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dark Overlay when Popup is active */}
      {fabActive && (
        <div
          onClick={closeFAB}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 transition-all duration-500 ease-in-out z-50"
        >
        </div>
      )}

      {/* Floating Action Button (FAB) */}
      <div
        onClick={openFAB}
        className={`fixed right-6 top-32 z-50 cursor-pointer bg-orange-500 text-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg transform transition-all duration-500 ${
          fabActive ? "bg-white rounded-md w-full-minus-50 h-94 shadow-xl " : ""
        }`}
      >
        {!fabActive ? (
          <i className="material-icons">add</i>
        ) : (
          <div className="absolute top-0 left-0  bg-white rounded-md p-8 overflow-y-auto max-h-[80vh] w-full">
            {/* Popup Form */}
            <div className="flex flex-col h-full">
              <div className="bg-orange-500 p-4 text-white rounded-t-md">
              {/* {fabActive && (
        <div
          onClick={closeFAB}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 transition-all duration-500 ease-in-out z-50"
        >
                            <button className="text-titleColor dark:text-titleColorDark" onClick={closeFAB}>X</button>
        </div>
      )} */}
              </div>
              {/* Scrollable Content for Skills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
                {skill.map(({ name, percentage, description }, index) => {
                  return (
                    <div
                      className="skills_item border-2 border-titleColor py-6 lg:px-4 mx-8 rounded-2xl bg-bgColorAlt dark:border-2 dark:border-titleColorDark dark:bg-bgColorAltDark"
                      key={index}
                    >
                      <div className="flex justify-between items-center mb-[15px] px-[30px]">
                        <h3 className="text-larger text-titleColor font-[700] dark:text-titleColorDark">
                          {name}
                        </h3>
                        <span className="text-titleColor dark:text-titleColorDark font-[700] text-large">
                          {percentage} <span className="text-primaryColor">%</span>
                        </span>
                      </div>
                      <p className="mb-[30px] px-[30px] text-titleColor dark:text-titleColorDark text-small">
                        {description}
                      </p>

                      <div className="h-[2px] dark:bg-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.3)] mx-12 sm:mx-4">
                        <span
                          className="relative h-[2px] block bg-primaryColor"
                          style={{
                            width: `${percentage}%`,
                          }}
                        >
                          <span className="bg-containerColor border-[2px] border-solid border-borderColor w-[25px] h-[25px] rounded-[50%] absolute right-0 top-[-12px]"></span>
                        </span>
                      </div>
                    </div>
                  );
                 
                })}
               
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
