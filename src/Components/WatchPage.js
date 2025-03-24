import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { YOUTUBE_API_URL } from "../utils/constants";
import Comments from "./Comments";
import Chat from "./Chat";
import { addLiveMessage } from "../utils/liveChatSlice";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videos, setVideos] = useState([]);
  const [filter, setFilter] = useState([]);
  const [chatBox, setChatBox] = useState("");
  const dispatch = useDispatch();
  const isDark = useSelector(store=>store.app.darkMode);

  useEffect(() => {
    dispatch(closeMenu());
    getData();
  }, []);

  useEffect(() => {
    if (videos.length) {
      setFilter(videos.filter((video) => video?.id === searchParams.get("v")));
    }
  }, [videos, searchParams]);

  const getData = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    // console.log(json?.items);
    setVideos(json?.items);
  };


  console.log(filter);

  const firstVideo = filter.length > 0 ? filter[0] : {};

  const { snippet } = firstVideo || {};
  const { title, channelTitle } = snippet || {};
  const { statistics } = firstVideo || {};

  return (
    <div className={isDark? "p-5 pl-20 bg-[#0f0f0f] text-white" : "p-5 pl-20 "}>
      <div className="">
        <div className="flex gap-5">
          <div className="w-[900px] h-[500px] ">
            <iframe
              className="rounded-xl"
              width="900"
              height="500"
              src={
                "https://www.youtube.com/embed/" +
                searchParams.get("v") +
                "?autoplay=1&si=bBW36Q9XuO9-bqfD"
              }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex-col w-full ">
            <div className={isDark? "bg[#0f0f0f] w-full rounded-xl overflow-y-scroll h-[500px] flex flex-col-reverse scroll-smooth" : "bg-slate-200 w-full rounded-xl overflow-y-scroll h-[500px] flex flex-col-reverse scroll-smooth"}>
              <Chat />
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(addLiveMessage({ name: "Ranjith", message: chatBox }));
                setChatBox("");
              }}
              className="w-full ml-4"
            >
              <input
                className={isDark? "border bg-[#0f0f0f] border-gray-400 rounded-xl w-[400px] mt-2 p-1 pl-2" : "border-2 border-gray-400 rounded-xl w-[400px] mt-2 p-1 pl-2"}
                type="text"
                value={chatBox}
                onChange={(e) => setChatBox(e.target.value)}
              />
              <button className="ml-1 p-1 bg-green-200 text-black px-2 rounded-xl">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className=" w-[900px]">
          <h1 className="mt-3 text-xl font-bold">{title}</h1>
          <h1 className="mt-3">{channelTitle}</h1>
          <div className="flex flex-row-reverse gap-8 mr-5 pb-5">
            <h1 className={isDark? "bg-slate-700 p-1 px-2 rounded-full" : "bg-gray-200 p-1 px-2 rounded-full"}>
              {Math.floor(statistics?.viewCount / 1000000)}M views
            </h1>
            <h1 className={isDark? "bg-slate-700 p-1 px-2 rounded-full" : "bg-gray-200 p-1 px-2 rounded-full"}>
              {Math.floor(statistics?.likeCount / 1000)}K likes
            </h1>
          </div>
        </div>
        <div>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
