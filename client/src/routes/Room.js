import React, { useRef, useEffect } from "react";
import io from "socket.io-client";

const Room = (props) => {
  const userVideo = useRef();
  const partnerVideo = useRef();
  const peerRef = useRef();
  const socketRef = useRef();
  const otherUser = useRef();
  const userStream = useRef();

  return (
    <div>
      <video autoPlay ref={userVideo}></video>
      <video autoPlay ref={partnerVideo}></video>
    </div>
  );
};

export default Room;
