import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const HeaderSlider = () => {
  const sliderData = [
    {
      title: "Pro Dog",
      image: "/IMG_3454.JPG",
      subtitle: "BUY DOGS"
    },
    {
      title: "Cat Food",
      image: "/IMG_3456.JPG",
      subtitle: "BUY CATS"
    },
    {
      title: "Dog Food",
      image: "/IMG_3457.JPG",
      subtitle: "BUY FOOD"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className="min-w-full relative md:h-[85vh] h-[50vh] w-full"
          >
            {/* Background Image */}
            <Image
              className="object-cover z-0"
              src={slide.image}
              fill
              alt={`Slide ${index + 1}`}
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white bg-black/40">
              <div className="flex-1 flex items-center justify-center">
                <h2 className="text-[10vw] Futura-font font-extrabold text-center">
                  {slide.title}
                </h2>
              </div>

              {/* Bottom p and button */}
              <div className="flex flex-col items-center pb-8">
                <p className="Futura-font text-[22px] font-medium">{slide.subtitle}</p>
                <button className="mt-4 text-black bg-white px-5 py-1.5 rounded-[6px]  transition">
                  Shop Now
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      
    </div>
  );
};

export default HeaderSlider;
