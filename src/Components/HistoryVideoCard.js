import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  if (!info) {
    return <div>Loading...</div>;
  }

  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;
  const { viewCount } = statistics;

  return (
    <div className=" w-96 h-50 rounded-2xl ">
      <div className="w-96 overflow-hidden rounded-2xl">
        <img
          className="w-full h-full object-cover"
          alt="thubnail"
          src={thumbnails.medium.url}
        />
      </div>

      <ul className="p-2">
        <li className="font-bold mb-4">{title}</li>
        <li>{channelTitle}</li>
        <li>{Math.floor(viewCount/1000000)}M views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
