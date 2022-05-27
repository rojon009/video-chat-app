import React, { useContext } from "react";
import { SocketContext } from "../Context";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  // we can use this useEffect to auto answer the call
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
          <h1>{call.name} is calling:</h1>
          <button
            className="active:translate-y-1 px-2 py-1 bg-blue-400 hover:bg-blue-600"
            onClick={answerCall}
          >
            Answer
          </button>
        </div>
      )}
    </>
  );
};

export default Notifications;
