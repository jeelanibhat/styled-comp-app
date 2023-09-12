import React from "react";

const Button = ({ children, primary, warning, success, danger }) => {
  const basicBtn =
    "hover:bg-orange-400 py-3 px-8 rounded-full text-orange-100 mb-3";
  const btnShadow = "drop-shadow-xl";

  return (
    <button
      className={` ${basicBtn} ${
        primary
          ? "bg-blue-500 drop-shadow-xl"
          : warning
          ? "bg-orange-600"
          : success
          ? `${btnShadow} bg-green-500`
          : danger
          ? "bg-rose-600"
          : "bg-black-700"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
