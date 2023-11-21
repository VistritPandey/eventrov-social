import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import InputOption from "./InputOption";
import {
  BsFillHandThumbsUpFill,
  BsFillChatLeftFill,
  BsShareFill,
} from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "./Firebase";
import {
  query,
  collection,
  getDocs,
  where,
  Timestamp,
} from "firebase/firestore";

function Post({ name, message, photoUrl, timestamp, image }) {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [showImageModal, setShowImageModal] = useState(false);

  function formatTimestamp(timestamp) {
    const dateInMillis = timestamp.toMillis();
    const date = new Date(dateInMillis);
    return date.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    });
  }

  const handleImageClick = () => {
    setShowImageModal(true);
  };

  const handleCloseModal = () => {
    setShowImageModal(false);
  };

  return (
    <div className="post bg-gray-800 p-4 mb-4 rounded">
      <div className="post__header flex items-center mb-4">
        <Avatar src={"https://robohash.org/" + name} />
        <div className="post__info ml-4 text-white">
          <h2 className="text-lg">{name}</h2>
          <p className="text-sm text-gray-500">{formatTimestamp(timestamp)}</p>
        </div>
      </div>
      <div className="post__body text-white overflow-wrap-anywhere mb-4">
        <p className="text-base">{message}</p>
      </div>
      {image && (
        <div className="post__image mb-4 cursor-pointer" onClick={handleImageClick}>
          <img src={image} alt="" className="rounded w-full h-64 object-cover" />
        </div>
      )}
      {/*
      <div className="post__buttons flex justify-evenly">
        <InputOption Icon={BsFillHandThumbsUpFill} title="Like" color="gray" cursor="pointer" />
        <InputOption Icon={BsFillChatLeftFill} title="Comment" color="lightgreen" cursor="pointer" />
        <InputOption Icon={BsShareFill} title="Share" color="orange" cursor="pointer" />
      </div>
      */}
      {showImageModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
          <div className="max-w-screen-md w-full overflow-hidden">
            <img
              src={image}
              alt=""
              className="rounded-lg max-w-full max-h-full"
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;
