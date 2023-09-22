// import React from "react"

// const About = () => {

//     const textToShow = document.querySelector(".hideText");

//     const observer = new IntersectionObserver(entries => {
//         const entry = entries[0];
//         if (entry.isIntersecting) {
//             entry.target.classList.add('showPresentation');
//         }
//     });

// observer.observe(textToShow);

import React, { useEffect, useRef } from "react";

const words = ["code", "passion"];

const About = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textToShow = textRef.current;

    if (textToShow) {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            textToShow.classList.add("opacity-100", "translate-y-[-5rem]");
          }
        },
        {
          threshold: 1, // You can adjust the threshold as needed
        }
      );

      observer.observe(textToShow);

      return () => {
        observer.disconnect(); // Clean up the observer when unmounting
      };
    }
  }, []);
  useEffect(() => {
    const dynamicWords = document.getElementById("textDynamic");

    let index = 0;

    const interval = setInterval(() => {
      dynamicWords.textContent = words[index];
      index++;
      if (index >= words.length) {
        index = 0;
      }
    }, 2000);

    // Cleanup: Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex h-20rem justify-end">
         <p className="w-1/2 flex items-center text-[12rem]">&lt;<span id="textDynamic" className="text-[5rem]"></span>&gt;</p>
      <p
        ref={textRef}
        className="w-2/6 opacity-0 transition-opacityTopSlide duration-800 ease-in transform translate-y-0 text-start mt-[20rem] mb-[4rem] mr-[4rem] text-lg">
        Having studied Web Design, I am curently in process of expanding my knowledge in Web Development at BeCode. After creating some projects with <span className="font-semibold">HTML/CSS/JS</span>, I find myself passionate about the front-end side and would like to expand my skills during an internship. <span className="text-[2rem]">Let's connect!</span>
      </p>
    </div>
  );
};

export default About;

