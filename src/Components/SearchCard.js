import React from "react";
import { useSelector } from "react-redux";

const SearchCard = ({ movieList }) => {
  console.log(movieList);
  const isDark = useSelector(store=>store.app.darkMode);

  const { snippet } = movieList;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="grid grid-flow-col pl-5 pt-5">
      <div className="bg-gray-300 w-[400px] h-[220px] rounded-2xl">
        <img
          className="rounded-2xl w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          alt="Thumbnail"
          src={thumbnails?.medium?.url}
        />
      </div>
      <div className={isDark? "bg-[#0f0f0f] text-white w-[800px] p-5 rounded-xl" : "bg-gray-100 hover:bg-gray-200 w-[800px] p-5 rounded-xl"}>
        <h1 className="text-xl font-semibold">{title}</h1>
        <h1 className="mt-5">{channelTitle}</h1>
      </div>
    </div>
  );
};

export default SearchCard;
