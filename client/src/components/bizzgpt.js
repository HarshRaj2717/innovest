import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function BotMsg({ content }) {
  return (
    <div className="chat chat-start ">
      <div className="chat-bubble chat-bubble-primary">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}

function UserMsg({ content }) {
  return (
    <div className="chat chat-end">
      <div className="chat-bubble chat-bubble-accent">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default function Evaluate() {
  const [allChats, setAllChats] = useState([
    {
      sender: "bot",
      content:
        "Hi there! I'm a business guru and startup advisor. I'm here to help you start and grow your business.",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  async function getAnswer() {
    if (inputMessage.trim() === "") {
      return;
    }
    document
      .getElementById("diable-when-loading-1")
      .classList.add("btn-disabled");
    document
      .getElementById("diable-when-loading-2")
      .classList.add("btn-disabled");
    const tempInputMessage = inputMessage;
    let answer = { sender: "bot", content: "" };
    const api_res = await fetch(
      `https://bizzgpt-production.up.railway.app/predict`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: tempInputMessage }),
      }
    );
    const api_data = await api_res.json();
    answer.content = api_data.content;
    let temp_chats = allChats;
    temp_chats.push({ sender: "user", content: inputMessage });
    setAllChats(temp_chats);
    setInputMessage("");
    temp_chats.push(answer);
    setAllChats(temp_chats);
    document
      .getElementById("diable-when-loading-1")
      .classList.remove("btn-disabled");
    document
      .getElementById("diable-when-loading-2")
      .classList.remove("btn-disabled");
  }

  return (
    <div className="bg-base-300 h-screen p-20" style={{ height: "90vh" }}>
      <div
        className="p-5 rounded-md outline-dashed outline-4 bg-base-200 snap-y overflow-y-auto"
        style={{ maxHeight: "calc(100% - 5rem)" }}
      >
        {allChats.map((chat, index) =>
          chat.sender === "user" ? (
            <UserMsg key={index} content={chat.content} />
          ) : (
            <BotMsg key={index} content={chat.content} />
          )
        )}
      </div>
      <div className="form-control mt-10 flex flex-row">
        <textarea
          id="diable-when-loading-1"
          className="textarea textarea-bordered bg-white text-black flex-grow mx-5"
          placeholder="Ask anything..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        ></textarea>
        <label className="label">
          <span className="label-text-alt"></span>
          <button
            id="diable-when-loading-2"
            className="diable-when-loading btn bg-sky-500 text-white"
            onClick={getAnswer}
          >
            Send!
          </button>
        </label>
      </div>
    </div>
  );
}
