import React from "react";
import { useSelector } from "react-redux";

const commentsData = [
  {
    name: "Ranjith kadapa",
    text: "This the demo of the comment section",
    replies: [
      {
        name: "Ranjith kadapa",
        text: "This the demo of the comment section",
        replies: [
          {
            name: "Ranjith kadapa",
            text: "This the demo of the comment section",
            replies: [],
          },
          {
            name: "Ranjith kadapa",
            text: "This the demo of the comment section",
            replies: [
              {
                name: "Ranjith kadapa",
                text: "This the demo of the comment section",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Ranjith kadapa",
        text: "This the demo of the comment section",
        replies: [],
      },
      {
        name: "Ranjith kadapa",
        text: "This the demo of the comment section",
        replies: [],
      },
    ],
  },
  {
    name: "Ranjith kadapa",
    text: "This the demo of the comment section",
    replies: [],
  },
  {
    name: "Ranjith kadapa",
    text: "This the demo of the comment section",
    replies: [
      {
        name: "Ranjith kadapa",
        text: "This the demo of the comment section",
        replies: [
          {
            name: "Ranjith kadapa",
            text: "This the demo of the comment section",
            replies: [],
          },
          {
            name: "Ranjith kadapa",
            text: "This the demo of the comment section",
            replies: [],
          },
          {
            name: "Ranjith kadapa",
            text: "This the demo of the comment section",
            replies: [],
          },
        ],
      },
      {
        name: "Ranjith kadapa",
        text: "This the demo of the comment section",
        replies: [],
      },
    ],
  },
  {
    name: "Ranjith kadapa",
    text: "This the demo of the comment section",
    replies: [],
  },
  {
    name: "Ranjith kadapa",
    text: "This the demo of the comment section",
    replies: [],
  },
  {
    name: "Ranjith kadapa",
    text: "This the demo of the comment section",
    replies: [
      {
        name: "Ranjith kadapa",
        text: "This the demo of the comment section",
        replies: [],
      },
      {
        name: "Ranjith kadapa",
        text: "This the demo of the comment section",
        replies: [],
      },
      {
        name: "Ranjith kadapa",
        text: "This the demo of the comment section",
        replies: [],
      },
      {
        name: "Ranjith kadapa",
        text: "This the demo of the comment section",
        replies: [],
      },
      {
        name: "Ranjith kadapa",
        text: "This the demo of the comment section",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  const isDark = useSelector((store) => store.app.darkMode);

  return (
    <>
      <div
        className={
          isDark
            ? "flex bg-gray-600 rounded-xl w-full px-5 py-2 border-b-gray-600 border mb-1"
            : "flex bg-gray-100 rounded-xl w-full px-5 py-2 border-b-gray-600 border mb-1"
        }
      >
        <div className="p-2">
        <i class="fa-regular fa-circle-user fa-xl"></i>
        </div>
        <div className="">
          <h1 className="font-semibold">{name}</h1>
          <h1>{text}</h1>
        </div>
      </div>
    </>
  );
};

const CommentList = ({ comments }) => {
  const isDark = useSelector((store) => store.app.darkMode);
  return comments.map((comment, index) => (
    <div className="">
      <Comment key={index} data={comment} />
      <div className={isDark? "ml-3 border-l border-gray-300 " : "ml-3 border-l-2 border-black "}>
        <CommentList key={index} comments={comment.replies} />
      </div>
    </div>
  ));
};

const Comments = () => {
  return (
    <div className="w-[64%]">
      <h1 className="text-xl mb-2 pl-2 font-semibold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default Comments;
