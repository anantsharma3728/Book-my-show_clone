import React from "react";
import { BiShareAlt, BiChevronRight } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { FcLike } from "react-icons/fc";


const MovieHero = () => {
  return (
    <>
   <div className="md:hidden">
    <img
      src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
      alt="poster"
     />
   </div>

   <div className="hidden md:block lg:hidden">
   <img
     src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
     alt="poster"
    />
   </div>

   <div className="relative hidden lg:block py-2" style={{height: "30rem"}}>

<div className="absolute h-full w-full z-10"
style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
/>
<div className="absolute container">
<div className="absolute z-30 w-64 h-96 left-64 top-10">
<img
src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
alt="poster"
className="h-full w-full rounded-xl"
/>
</div>

<div className="absolute z-30 top-10 w-1/2 left-96 ml-44">
<div className="flex flex-grow-0 items-start">
  <div>
  <h1 className="text-gray-50 font-extrabold text-2xl h-6">Shang-Chi and the Legends of the Ten Rings</h1>
  <div className="flex py-10 gap-2 items-center text-gray-50">
  <FcLike />
  <h3 className="font-bold">90%</h3>
  <p className="flex items-center">52.7K ratings  <BiChevronRight /></p>
  </div>

  <div className="bg-navCol-100 flex justify-between h-16 items-center rounded-md">
  <div className="flex-col px-5">
     <p className="text-sm font-bold text-gray-50">Add your rating and review</p>
     <p className="text-gray-400">Your ratings matter</p>
  </div>
  <button className="bg-gray-50 rounded-md px-1 m-5 h-8 hover:bg-gray-500">
   Rate now
  </button>
  </div>

  <div className="py-10 text-black font-bold -mt-3">
     <p className="bg-white text-sm rounded-sm px-3 focus:underline hover:underline cursor-pointer">2D, MX4D, 3D, 4DX 3D, IAMX 3D, IAMX 2D, 4DX</p>
     <p className="bg-white my-5 rounded-sm px-3 focus:underline hover:underline cursor-pointer">English,Telugu,Tamil,Hindi,Kannada,Malyalam</p>
  </div>

  <div className="flex text-gray-50 text-bold rounded-sm -mt-5 items-center"
  style={{backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
  >
     <p className=" text-sm">2h 12m</p>
     <div className="w-8 h-8">
     <BsDot className="w-full h-full"/>
     </div>
     <p className="focus:underline hover:underline cursor-pointer text-sm">Action, Adventure, Fantasy</p>
     <div className="w-8 h-8">
     <BsDot className="w-full h-full"/>
     </div>
     <p className="text-sm">UA</p>
     <div className="w-8 h-8">
     <BsDot className="w-full h-full"/>
     </div>
     <p className="text-sm">3Sep,2021</p>
  </div>
  </div>
  <div className="flex gap-4 bg-navCol-100 items-center z-30 ml-64 p-1 opacity-60 rounded-md cursor-pointer">
    <div className="w-10 h-10">
    <BiShareAlt className="w-full h-full px-1" style={{color: "white"}} />
    </div>
    <p className="text-gray-50 font-bold text-lg px-1">Share</p>
  </div>

  </div>
</div>
</div>


   <img
     src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
     alt="poster"
     className="w-full h-full"
    />
  </div>
    </>
  )
};

export default MovieHero;
