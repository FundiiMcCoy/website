"use client"
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    id: 1,
    metric: "Projects",
    value: "30",
    postfix: "+",
  },
  {
    id: 2,
    metric: "Clients",
    value: "14",
    postfix: "+",
  },
  {
    id: 3,
    metric: "Major Brands",
    value: "5",
    postfix: "+",
  },
  {
    id: 4,
    metric: "Years",
    value: "4",
    postfix: "+",
  },

];

const Achievements = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16  sm:grid-col '>
      <div className='border-[#33353f] border rounded-md py-8 px-4 sm:px-16 md:grid md:grid-cols-2 lg:grid-cols-4'>
        {achievementsList.map((achievement) => (
          <div key={achievement.id} className='flex flex-col items-center justify-center mx-4 my-4 sm:my-0'>
            <h2 className='text-white text-4xl font-bold flex flex-row '>
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale='en-US'
                className='text-white text-4xl font-bold'
                configs={((_, index) => {
                  return {
                    mass: 1,
                    friction: 100,
                    tensions: 1070 * (index + 1),
                  };
                })}
              />
              {achievement.postfix}
            </h2>
            <p className='text-[#ADB7BE] text-base'>{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements
