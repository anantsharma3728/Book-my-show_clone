import React from "react";

export const NextArrow = (props) => {
  //const {className, style, onClick }= props;
  return (
    <>
   <div
   className={props.className}
   style={{ ...props.style,
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      height: "50px",
      display: "flex",
      margin: "-15px",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      width: "45px",
      position: "absolute",
      borderRadius: "6px 0px 0px 6px"}}
   onClick={props.onClick}
    />
    </>
  );
};

export const PrevArrow = (props) => {
  return (
    <>
   <div
   className={props.className}
   style={{ ...props.style,
     backgroundURL: "http://www.w3.org/2000/svg",
     backgroundColor: "rgba(0, 0, 0, 0.4)",
     height: "50px",
     display: "flex",
     margin: "-15px",
     alignItems: "center",
     justifyContent: "center",
     cursor: "pointer",
     width: "45px",
     position: "absolute",
     borderRadius: "0px 6px 6px 0px",
     content: "<"}}
   onClick={props.onClick}
    />
    </>
  );
};
