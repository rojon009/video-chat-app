import React, { useContext, useEffect } from "react";
import { SocketContext } from "../Context";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  /**
   useEffect(() => {
     if (call.isReceivingCall && !callAccepted) {
       answerCall();
      }
    }, [call.isReceivingCall, callAccepted, answerCall]);
  */

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div>
          {}
          <h1>{call.name} is calling:</h1>
          <button onClick={answerCall}>Answer</button>
        </div>
      )}
    </>
  );
};

export default Notifications;
