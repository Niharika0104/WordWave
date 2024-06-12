"use client"
import React, { useRef } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Topics from '@/Constant/TopicsData';
const Carousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className=" w-4/5 mx-auto mt-5 flex h-20 items-center ">
      <button
        className="   text-gray-700 p-2 rounded-full focus:outline-none"
        onClick={scrollLeft}
      >
       <BiChevronLeft fontSize={30}/>
      </button>
      <div
        className=" flex overflow-x-hidden whitespace-nowrap "
        ref={carouselRef}
      >
        {Topics.map((item:string)=>{
          return ( <div className=" text-gray-700 px-4 w-min-max">{item}</div>)
        })}
       
       
      
        

        


        {/* Add more items as needed */}
      </div>
      <button
        className="   text-gray-700 p-2 rounded-full hover:bg-gray-400 focus:outline-none"
        onClick={scrollRight}
      >
       <BiChevronRight fontSize={30}/>
      </button>
    </div>
  );
};

export default Carousel;
