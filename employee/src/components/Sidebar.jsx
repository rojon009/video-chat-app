import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../Context";

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <div className="bg-gray-400 w-[600px] mx-auto p-2">
      <div>
        <div>
          <div>
            <div>
              <h1 className="text-center text-xl underline mb-3   ">Account Info</h1>
              <input
                className="px-2 py-1 mr-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name here"
              />
              <CopyToClipboard text={me}>
                <button className="active:translate-y-1 px-2 py-1 bg-blue-400 hover:bg-blue-600">
                  Copy Your ID
                </button>
              </CopyToClipboard>
            </div>
            <div className="mt-6">
              <h1>Make a call</h1>
              <input
                className="px-2 py-1 mr-2"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                placeholder="put user id to call here"
              />
              {callAccepted && !callEnded ? (
                <button
                  className="active:translate-y-1 px-2 py-1 bg-blue-400 hover:bg-blue-600"
                  onClick={leaveCall}
                >
                  Hang Up
                </button>
              ) : (
                <button
                  className="active:translate-y-1 px-2 py-1 bg-blue-400 hover:bg-blue-600"
                  onClick={() => callUser(idToCall)}
                >
                  Call
                </button>
              )}
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
