import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { darkMode } from "../utils/appSlice";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store?.app?.isMenuOpen);
  const isDark = useSelector((store) => store.app.darkMode);

  //Early returning
  if (!isMenuOpen) return;

  return (
    <div
      className={
        isDark
          ? "grid h-full w-[250px] p-5 pl-10 text-center bg-[#0f0f0f]"
          : "grid h-full w-[250px] shadow-lg p-5 pl-10 text-center"
      }
    >
      <ul className="font-semibold">
        <Link to={"/"}>
          <li className="mb-3 text-gray-500">
            <i class="fa-solid fa-house mr-2 text-gray-500"></i> Home
          </li>
        </Link>
        <li className="mb-3 text-gray-500">
          <i class="fa-solid fa-clapperboard mr-2 text-gray-500"></i> Shorts
        </li>
        <li className="mb-3 text-gray-500">
          <i class="fa-solid fa-layer-group mr-2 text-gray-500"></i> Scripts
        </li>
        <Link to={"/history"}>
          <li className="mb-3 text-gray-500">
            <i class="fa-solid fa-clock-rotate-left mr-2 text-gray-500"></i>{" "}
            History
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
