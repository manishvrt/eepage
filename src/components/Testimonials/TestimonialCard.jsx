"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { testimonialData } from "./testimonialData";

const TestimonialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(2); // Default to 2 cards for larger screens
  const cardsRef = useRef(null);

  const animateCards = (direction) => {
    const cardElements = cardsRef.current.children;
    if (direction === "next") {
      gsap.fromTo(
        cardElements,
        { x: 300, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    } else if (direction === "prev") {
      gsap.fromTo(
        cardElements,
        { x: -300, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      animateCards("prev");
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < testimonialData.length - visibleCards) {
      animateCards("next");
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    // Update visible cards based on screen size
    const updateVisibleCards = () => {
      setVisibleCards(window.innerWidth < 1024 ? 1 : 2);
    };

    // Set initial visible cards and add event listener for resize
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    animateCards("next"); // Initial animation when the component mounts
  }, []);

  return (
    <div className="relative my-5">
      <div
        className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6  pt-16 pb-10 mx-auto"
        ref={cardsRef}
      >
        {testimonialData
          .slice(currentIndex, currentIndex + visibleCards)
          .map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#ffffff] flex flex-col px-6 justify-between h-auto lg:h-auto py-6 rounded-[35px] w-full"
              style={{ minHeight: "280px" }}
            >
              {/* Testimonial Text */}
              <div>
                <h1 className="lg:text-md tracking-tight text-md text-[#0c0c0c]  text-left small ">
                  {testimonial.text}
                </h1>
              </div>

              {/* Fixed Position for the Name, Image, and Google Icon */}
              <div className="flex justify-between mt-6 items-center">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt="feature1"
                    className="lg:w-14 w-10 h-10 lg:h-14 rounded-full object-cover"
                  />
                  <h1 className="small text-lg lg:text-xl font-semibold flex flex-col ml-2">
                    {testimonial.name}
                    <span className="small tracking-wide text-[#ff0000] text-sm">
                      {testimonial.role}
                    </span>
                  </h1>
                </div>
                <div className="flex items-center">
                  <img
                    src="/vrtlogo.svg"
                    alt="feature1"
                    className="w-8 h-8 rounded-full-"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Arrows below the cards */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`flex justify-center items-center w-14 h-14 rounded-full ${
            currentIndex === 0 ? "bg-gray-200  opacity-50 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          <img
            src={currentIndex === 0 ? "https://www.svgrepo.com/show/533605/arrow-narrow-right.svg" : "https://www.svgrepo.com/show/533605/arrow-narrow-right.svg"}
            alt="previous"
            className="lg:h-8 h-6 w-6 rotate-180 lg:w-8 inline"
          />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= testimonialData.length - visibleCards}
          className={`flex justify-center items-center w-14 h-14 rounded-full ${
            currentIndex >= testimonialData.length - visibleCards
              ? "bg-gray-200 opacity-50 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          <img
            src={currentIndex >= testimonialData.length - visibleCards ? "https://www.svgrepo.com/show/533605/arrow-narrow-right.svg" : "https://www.svgrepo.com/show/533605/arrow-narrow-right.svg"}
            alt="next"
            className="lg:h-8 h-6 w-6 lg:w-8 inline"
          />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;