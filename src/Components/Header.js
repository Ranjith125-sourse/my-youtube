import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { darkMode, toggleMenu } from "../utils/appSlice";
import { addSearchMovies } from "../utils/searchMovieSlice";
import { Link, useNavigate } from "react-router-dom";
import { YOUTUBE_SUGGESTION } from "../utils/constants";
import ytLogoDark from "../assets/yt_logo_rgb_dark.png";
import ytLogoLight from "../assets/yt_logo_rgb_light.png";

const Header = () => {
  const isDark = useSelector((store) => store.app.darkMode);
  // console.log(isDark);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggessions] = useState([]);
  const [showSuggession, setShowSuggession] = useState(false);

  const handleSearchText = (suggesstion) => {
    setSearch(suggesstion);
    setShowSuggession(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSuggessionData();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const getSuggessionData = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION + search);
    const json = await data.json();
    setSuggessions(json[1]);
    // console.log(json[1]);
  };

  const handleSearch = async () => {
    // console.log(searchText.current.value);
    if (!searchText.current.value.trim()) return;
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" +
        searchText.current.value.trim() +
        "&key=AIzaSyAqg3qEs_6VSn17Ku_XX-MyFhSEkrjeYKc"
    );
    const json = await data.json();
    dispatch(addSearchMovies(json?.items));
    navigate("search");
  };

  const handleMenuBar = () => {
    dispatch(toggleMenu());
  };

  const handleDark = () => {
    dispatch(darkMode());
  };

  return (
    <div
      className={
        isDark
          ? "bg-[#0f0f0f] grid grid-flow-col p-5"
          : "grid grid-flow-col p-5 shadow-lg"
      }
    >
      <div className="flex col-span-1">
        <i
          onClick={() => handleMenuBar()}
          class="fa-solid fa-bars text-2xl mr-5 text-gray-500 cursor-pointer"
        ></i>
        <Link to={"/"}>
          {isDark ? (
            <img className="h-7" alt="youtube-icon" src={ytLogoDark} />
          ) : (
            <img className="h-7" alt="youtube-icon" src={ytLogoLight} />
          )}
        </Link>
      </div>
      <div className="col-span-10 relative">
        <input
          onFocus={() => setShowSuggession(true)}
          // onBlur={() => setShowSuggession(false)}
          ref={searchText}
          onChange={(e) => setSearch(e.target.value)}
          className={
            isDark
              ? "border-2 border-gray-300 p-1 w-1/2 rounded-l-full pl-4 bg-[#0f0f0f] text-white"
              : "border-2 border-gray-300 p-1 w-1/2 rounded-l-full pl-4"
          }
          type="text"
          placeholder="search here"
          value={search}
        />
        <button
          className="border-2 border-gray-300 p-1 px-3 rounded-r-full "
          onClick={() => handleSearch()}
        >
          <i class="fa-solid fa-magnifying-glass text-gray-500"></i>
        </button>

        <div className="pl-8 absolute w-[50%] p-3 rounded-xl">
          {showSuggession &&
            suggestions.map((suggesstion) => (
              <ul>
                <li
                  onClick={() => handleSearchText(suggesstion)}
                  className={
                    isDark
                      ? "transition-transform duration-300 hover:translate-x-5 px-5 py-2 bg-[#0f0f0f] text-white cursor-pointer pb-3"
                      : "transition-transform duration-300 hover:translate-x-5 hover:bg-gray-300 px-5 py-2 bg-white cursor-pointer"
                  }
                >
                  <i class="fa-solid fa-magnifying-glass fa-fade fa-md text-gray-600 mr-2"></i>{" "}
                  {suggesstion}
                </li>
              </ul>
            ))}
        </div>
      </div>

      <div className="col-span-1">
        {isDark ? (
          <i
            onClick={() => handleDark()}
            class="fa-solid fa-sun text-2xl mr-5 text-gray-500 cursor-pointer"
          ></i>
        ) : (
          <i
            onClick={() => handleDark()}
            class="fa-solid fa-moon text-2xl mr-5 text-gray-500 cursor-pointer"
          ></i>
        )}

        <i class="fa-regular fa-circle-user text-2xl text-gray-500 cursor-pointer"></i>
      </div>
    </div>
  );
};

export default Header;
