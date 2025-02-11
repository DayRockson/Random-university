import React, { useState, useEffect, useRef } from "react";

const images = [
    {
        src: "/images/campus2.jpg",
        alt: "A view of a red brick building"
    },
    {
        src: "/images/campus.jpg",
        alt: "A campus view"
    },
    {
        src: "/images/lecture-hall.jpg",
        alt: "An empty lecture hall"
    },
    {
        src: "/images/library.jpg",
        alt: "A library full of students studying"
    },
    {
        src: "/images/cafeteria.jpg",
        alt: "An empty cafeteria"
    },
    {
        src: "/images/dorm.jpg",
        alt: "Two ladies settling into their dorm room"
    },
    {
        src: "/images/dorm2.jpg",
        alt: "Two ladies with moving boxes"
    },
    {
        src: "/images/dorm3.jpg",
        alt: "A group of friends in their dorm room"
    },
    {
        src: "/images/campus4.jpg",
        alt: "A sunset view of the campus"
    },
    {
        src: "/images/campus3.jpg",
        alt: "An inside view of a campus building"
    },
    {
        src: "/images/campus5.jpg",
        alt: "Students outside a campus building"
    },
    {
        src: "/images/landscape.jpg",
        alt: "A view of campus landscape"
    },
    {
        src: "/images/landscape2.jpg",
        alt: "An evening view of the campus"
    },
    {
        src: "/images/research4.jpg",
        alt: "Two students observing an experiment under microscope"
    },
    {
        src: "/images/lecture-hall2.jpg",
        alt: "A lecture hall full of students"
    },
    {
        src: "/images/library3.jpg",
        alt: "Students walking in a library"
    },
    {
        src: "/images/robotics4.jpg",
        alt: "A female student working on a robot"
    },
    {
        src: "/images/students.jpg",
        alt: "Students walking across campus"
    },
  
  
];

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null); // Ref to store interval ID
  
    
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    };
  
    // Start the interval when the component mounts
    useEffect(() => {
      startInterval();
      
      return () => clearInterval(intervalRef.current); // Cleanup on component unmount
    }, []);
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      clearInterval(intervalRef.current); // Clear the previous interval
      startInterval(); 
    };
  
    const goToPrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      clearInterval(intervalRef.current); // Clear the previous interval
      startInterval(); 
    };
  

  return (
    <div className="campus-slider">
      <div className="campus-slide">
        <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
        />
      </div>

      <div className="campus-nav">
        <button onClick={goToPrevious}>&lt; Prev</button>
        <button onClick={goToNext}>Next &gt;</button>
      </div>

    </div>
  );
};

export default Slideshow;
