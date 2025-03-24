import React from "react";
import { useSelector } from "react-redux";

const LiveMessage = ({ name, message }) => {
  const isDark = useSelector(store=>store.app.darkMode);

  return (
    <div className={isDark? "px-5 py-2 border-b-gray-400 border border-[#0f0f0f] flex gap-4" : "px-5 py-2 border-b-gray-400 border flex gap-4"}>
      <div>
      <i class="fa-regular fa-circle-user"></i>
      </div>
      <div className="flex gap-4">
        <h1 className="font-bold">{name}</h1>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default LiveMessage;
