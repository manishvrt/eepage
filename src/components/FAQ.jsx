"use client";
import React, { useState, useRef } from "react";
import { gsap } from "gsap";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleCard = (index) => {
    const contentRef = contentRefs.current[index];

    if (contentRef) {
      if (openIndex === index) {
        // Close the currently open card
        gsap.to(contentRef, {
          height: 0,
          opacity: 0,
          duration: 0.2,
          ease: "power1.out",
        });
        setOpenIndex(null);
      } else {
        // Close any previously open card
        if (openIndex !== null) {
          const previousContentRef = contentRefs.current[openIndex];
          gsap.to(previousContentRef, {
            height: 0,
            opacity: 0,
            duration: 0.2,
            ease: "power1.out",
          });
        }

        // Open the clicked card
        contentRef.style.height = "auto";
        const height = contentRef.scrollHeight; // Get the full height for animation
        contentRef.style.height = 0; // Reset height for animation

        gsap.to(contentRef, {
          height,
          opacity: 1,
          duration: 0.2,
          ease: "power1.out",
        });
        setOpenIndex(index);
      }
    }
  };

  return (
    <div className="h-auto">
      <div className="gap-6 max-w-7xl mx-auto">
        <div className="mt-20 space-y-2 px-3 text-center">
          <h1 className="lg:text-6xl text-4xl font-bold gsans text-[#0c0c0c] md:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="small px-3 lg:text-xl text-sm pt-3 text-gray-800">
            Get your answers and insights by exploring our FAQ section!
          </p>
        </div>
        <div className="lg:col-span-3 mt-6 px-4 overflow-y-auto">
          <div className="flex flex-col gap-4 items-end justify-start lg:mt-20 mb-20">
            {faqData.map((faq, index) => (
              <div
                key={index}
                onClick={() => toggleCard(index)}
                className="w-full p-6 flex max-w-5xl mx-auto flex-col cursor-pointer bg-[#ececec]/60 h-auto rounded-3xl"
              >
                <div className="flex justify-between items-center">
                  <h1 className="small text-md tracking-tight font-semibold lg:text-xl text-[#0c0c0c]">
                    {faq.question}
                  </h1>
                  <span
                    className={`bg-[#0c0c0c] hidden lg:block 
                      lg:flex justify-center items-center h-8 w-8 rounded-full transition-transform duration-500 ${
                        openIndex === index ? "rotate-90" : ""
                      }`}
                  >
                    <img
                      src="/warrow.svg"
                      alt="arrow"
                      className={`h-4 w-4 transition-transform duration-500 ${
                        openIndex === index ? "rotate-45" : "-rotate-45"
                      }`}
                    />
                  </span>
                </div>
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="overflow-hidden"
                  style={{ height: 0, opacity: 0 }}
                >
                  {Array.isArray(faq.answer) ? (
                    <div className="mt-4 small tracking-tight text-md lg:text-lg text-zinc-700">
                      <p>{faq.answer[0]}</p>
                      <ul className="mt-2 list-disc  list-inside">
                        {faq.answer[1].map((point, i) => (
                          <li key={i} className="mt-1">{point}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className="mt-4 small tracking-tight text-md lg:text-lg text-zinc-700">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "How much time should I commit weekly?",
    answer: "Plan for 4-6 hours per week, including live sessions and action steps.",
  },
  {
    question: "Will I receive personalized feedback?",
    answer: "Yes! Small cohort size ensures 1:1 feedback and direct guidance.",
  },
  {
    question: "What makes Entrepreneur’s EDGE™ different from other programs?",
    answer: [
      "Unlike generic business courses, the program insights are:",
      [
        "Backed by scientific assessments (not opinions)",
        "Tailored to your unique entrepreneurial profile",
        "Led by an expert with a proven track record",
      ],
    ],
  },
  {
    question: "Can I access materials after the program?",
    answer: "Yes! You’ll have lifetime access to all program materials and assessments.",
  },
];

export default FAQ;
