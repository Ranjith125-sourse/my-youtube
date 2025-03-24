import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useSelector } from "react-redux";

const Body = () => {
  const isDark = useSelector(store=>store.app.darkMode);
  return (
    <div className={isDark && "bg-[#0f0f0f]"}>
      <Header />
      <div className="grid grid-flow-col">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
