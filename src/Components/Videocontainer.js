import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Videocontainer = () => {
  const [videos, setVideos] = useState([]);  
  const isDark = useSelector((store)=>store.app.darkMode); 
  // console.log(videos);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data?.json();
    setVideos(json?.items);
  };

  return (
    <div className="flex flex-wrap gap-8 p-4">
      {videos.map((video) => (
        <Link key={video?.id} to={"watch?v=" + video?.id}>
          <VideoCard key={video?.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default Videocontainer;
