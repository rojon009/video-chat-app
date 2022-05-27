import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../Context";

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <h1>Account Info</h1>
              <input value={name} onChange={(e) => setName(e.target.value)} />
              <CopyToClipboard text={me}>
                <button>Copy Your ID</button>
              </CopyToClipboard>
            </div>
            <div>
              <h1>Make a call</h1>
              <input value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
              {callAccepted && !callEnded ? (
                <button onClick={leaveCall}>Hang Up</button>
              ) : (
                <button onClick={() => callUser(idToCall)}>Call</button>
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
