import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";

import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./ChatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const liveMsg = useSelector((store) => store.chat.messages);
  const [message, setMessage] = useState("");
  const [showChat, setShowChat] = useState(true);

  useEffect(() => {
    let timer = setInterval(() => {
      dispatch(addMessage({ name: "Sreeraj", message: "wow nice one" }));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`border rounded-xl md:w-[400px] ${
        showChat ? "max-h-[570px]" : "max-h-[70px]"
      }`}
    >
      {showChat && (
        <div>
          <div>
            <h3 className="p-4 font-semibold border-b">Live chat</h3>
          </div>

          <div className="flex flex-col-reverse p-4 overflow-y-scroll h-96">
            {liveMsg.map((msg) => (
              <ChatMessage
                name={msg.name}
                message={msg.message}
                key={Math.random()}
              />
            ))}
            <ChatMessage name={"Abhishek"} message={"wow just amazing"} />
          </div>
          <div className="flex items-center justify-center gap-2 p-3 border-t border-b">
            <input
              type="text"
              className="bg-gray-100 w-[320px] p-2 rounded-2xl "
              placeholder="Chat..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div>
              <button
                className="p-2 bg-gray-100 rounded-2xl"
                onClick={() => {
                  dispatch(addMessage({ name: "Athul", message: [message] }));
                  setMessage("");
                }}
              >
                ▶️
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="p-4 ">
        <button
          className="w-full mx-auto font-semibold"
          onClick={() => setShowChat((prev) => !prev)}
        >
          Show chat
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
