import React, { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const containerRef = useRef(null); // Reference to the container element
  const careers = ["Web Developer", "ML Engineer","React Developer", "Student"];
  let careerIndex = 0;
  let characterIndex = 0;

  const updateText = () => {
    if (containerRef.current) {
      characterIndex++;
      containerRef.current.innerHTML = `<h1> I am a <span>${careers[careerIndex].slice(0, characterIndex)}</span></h1>`;

      if (characterIndex === careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
      }

      if (careerIndex === careers.length) {
        careerIndex = 0;
      }

      setTimeout(updateText, 500);
    }
  };

  useEffect(() => {
    updateText();}, []);

  return (
    <>
      <div className="home">
      <div class="homeText"><p className="container" ref={containerRef}></p>
        <p className="description">
          I'm Abhiram, a design enthusiast fueled by the thrill of turning ideas into captivating visuals. With a knack for harmonizing aesthetics and functionality, I embark on every project with a passion to inspire and a drive to excel.
        </p> </div>
        <img src="./images/dp.png" alt="" id="myPic" />
      </div>
    </>
  );
};

export default Home;
