import React from "react";
//props -> src, title,subtitle, isDark(bool)
const CastPoster = (props) => {
  return (
    <>
    <div className="flex flex-col items-center px-3">
      <div className="h-25 w-25" >
       <img src={props.src}
       alt={props.title} className="w-full h-full rounded-full"/>
      </div>
      <h3
      className="text-xl text-gray-700 mt-2 items-center px-1"
      >{props.title}</h3>
      <p
      className="text-sm text-gray-600 py-1 px-1"
      >{props.subtitle}</p>
    </div>
    </>
  )
};

export default CastPoster;
