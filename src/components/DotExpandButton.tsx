import React from "react"; 
import { FiArrowRight } from "react-icons/fi"; 

interface DotExpandButtonProps {
  text: string;
  className?: string;
}

const DotExpandButton = ({ text, className = "" }: DotExpandButtonProps) => { 
  return ( 
    <button className={`group relative flex items-center gap-2 overflow-hidden rounded-full bg-black px-6 py-3 font-medium text-white transition-all duration-300 ease-out hover:scale-105 ${className}`}> 
      {/* expanding dot / ripple */} 
      <div 
        className="absolute right-2 top-1 bottom-1 aspect-square scale-0 rounded-full bg-white transition-transform duration-700 ease-out group-hover:scale-[15]" 
      /> 
      
      {/* Button Text */} 
      <span className="relative z-10 transition-colors duration-300 ease-out group-hover:text-black"> 
        {text} 
      </span> 

      {/* Icon */} 
      <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white text-black transition-all duration-400 ease-in-out group-hover:bg-black group-hover:text-white group-hover:translate-x-1"> 
        <FiArrowRight className="text-lg" /> 
      </div> 
    </button> 
  ); 
}; 

export default DotExpandButton;
