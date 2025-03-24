import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchCard from "./SearchCard";
import { Link } from "react-router-dom";
import { openMenu } from "../utils/appSlice";

const SearchContainer = () => {
  const isDark = useSelector((store) => store.app.darkMode);
  const dispatch = useDispatch();
  const searchMovies = useSelector(
    (store) => store?.searchMovies?.searchMovies
  );
  // console.log(searchMovies);

  useEffect(() => {
    dispatch(openMenu());
  }, []);

  return (
      searchMovies && (
      <div className={isDark? "bg-[#0f0f0f]" : "bg-white"}>
        {searchMovies.map((movie) => (
          <Link key={movie?.id?.videoId} to={"watch?v=" + movie?.id?.videoId}>
            <SearchCard movieList={movie} />
          </Link>
        ))}
      </div>
      )
  );
};

export default SearchContainer;
