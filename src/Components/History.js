import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HistoryVideoCard from "../Components/HistoryVideoCard";
import { Link } from "react-router-dom";
import { openMenu } from "../utils/appSlice";
import { clearHistory } from "../utils/historySlice";

const History = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((store) => store.app.darkMode);
  const historyVideos = useSelector((store) => store.history.historyVideos);
  // console.log(historyVideos);
  dispatch(openMenu());
  const handleButton = () => {
    dispatch(clearHistory());
  };

  return historyVideos.length == 0 ? (
    <div className="w-[82vw] h-screen">
      <h1 className="text-2xl text-red-500 pl-[35%] pt-[20%] font-bold">
        Sorry... there is no history
      </h1>
    </div>
  ) : (
    <div className="flex-col w-[82vw] h-screen">
      <div className="text-center py-3">
        <button
          className={isDark? "border-2 px-5 text-xl rounded-xl p-1 transition-all duration-300 hover:bg-red-600 hover:text-black text-white" : "border-2 px-5 text-xl rounded-xl p-1 transition-all duration-300 hover:bg-red-600 hover:text-white"}
          onClick={() => handleButton()}
        >
          Clear history
        </button>
      </div>

      <div
        className={
          isDark
            ? "flex gap-4 pl-3 flex-wrap text-white"
            : "flex gap-4 pl-3 flex-wrap"
        }
      >
        {historyVideos.map((video) => (
          <Link key={video?.id} to={"watch?v=" + video?.id}>
            <HistoryVideoCard id={video.id} info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default History;
