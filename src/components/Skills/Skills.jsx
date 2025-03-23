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
        <div class="box">
  <a class="button" href="#popup1">
    <span class="text-white text-xl font-bold">+</span>
  </a>
</div>
{/* <div className="box">
<a href="#popup1" class="link">
	<svg viewBox='0 0 200 200' width='200' height='200' xmlns='http://www.w3.org/2000/svg' class="link__svg" aria-labelledby="link1-title link1-desc">
		<title id="link1-title">Come quick and click this</title>
		<desc id="link1-desc">A rotating link with text placed around a circle with an arrow inside</desc>
		<path class="link__arrow" d="M 75 100 L 125 100 L 110 85 M 125 100 L 110 115"  fill="none" />
		<path id="link-circle" class="link__path" d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" stroke="none" fill="none" />
<a class="button" href="#popup1">
<textPath href="link__arrow" stroke="none">
			+
			</textPath>
  </a>

		<text class="link__text">
			<textPath href="#link-circle" stroke="none">
      Click to Explore More Skills
      </textPath>
		</text>
	</svg>
</a>
</div> */}

      </div>
     <div id="popup1" class="overlay">
  <div class="popup">
    <a class="close" href="#">×</a>
    <div className="content  z-90">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] max-h-[600px] overflow-y-auto z-90">

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
</div>

     
    </section>
  );
};

export default Skills;
