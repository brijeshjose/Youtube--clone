import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const arr = [
    "All",
    "Live",
    "Pawan Kalyan",
    "Gaming",
    "Cricket",
    "Rohit ",
    "Valorant",
    "React",
    "ChatGPT",
    "Gemini",
    "Akshay Saini",
    "Acer",
    "Freefire",
    "Messi",
  ];

  const slideLeft=()=>{
    const slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
    
  }
  const slideRight=()=>{
    const slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <div className="relative flex items-center gap-4 px-3 overflow-hidden">
      <button onClick={slideLeft}>◀️</button>
      <div
        id="slider"
        className="flex gap-2 overflow-x-hidden whitespace-nowrap scroll-smooth"
      >
        {arr.map((btn) => (
          <Button name={btn} key={btn} />
        ))}
      </div>
      <button onClick={slideRight}>▶️</button>
    </div>
  );
};

export default ButtonList;
