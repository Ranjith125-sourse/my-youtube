import React, { useEffect } from "react";
import LiveMessage from "./LiveMessage";
import { useDispatch, useSelector } from "react-redux";
import { addLiveMessage } from "../utils/liveChatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const Chat = () => {
  const liveMessages = useSelector((store) => store?.live?.liveMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("API polling");
      dispatch(
        addLiveMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {liveMessages.map((chat) => (
        <LiveMessage name={chat.name} message={chat.message} />
      ))}
    </>
  );
};

export default Chat;
