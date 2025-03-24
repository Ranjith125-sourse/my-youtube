import React from "react";
import { useSelector } from "react-redux";

const Button = ({ name }) => {
  const isDark = useSelector(store=>store.app.darkMode);


  return (
    <button
      className={isDark? "bg-gray-600 text-white py-1 px-3 rounded-xl inline-block whitespace-nowrap" : "bg-gray-200 py-1 px-3 rounded-xl inline-block whitespace-nowrap"}
    >
      {name}
    </button>
  );
};

export default Button;
