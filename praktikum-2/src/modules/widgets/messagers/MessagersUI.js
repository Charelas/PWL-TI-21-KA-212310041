import React, { useEffect, useMemo, useRef, useState } from "react";
import { ButtonPrimary, ButtonSecondary } from "./components/ButtonUI";
import ChatBody from "./components/ChatBody";
import moment from "moment";

export default function MessegersUI() {
  const StylesMessager = {
    chatBox: {
      minHeight: "200px",
      maxHeight: "45vh",
      overflowY: "auto",
    },
  };

  const chatArr = [
    {
      id: 1,
      message: "Hai",
      from: "Febry",
      date: "2024-02-22 10:30:00",
    },
    { id: 2, message: "Iya", from: "Isnan", date: "2024-01-20 10:35:00" },
    {
      id: 3,
      message: "Apakah itu Micro-Frontend?",
      from: "Febry",
      date: "2024-01-20 10:50:00",
    },
    { id: 4, message: "Kagak tau", from: "Isnan", date: "2024-01-20 10:52:00" },
    {
      id: 5,
      message: "Apann dah?",
      from: "Isnan",
      date: "2024-01-20 10:52:00",
    },
    {
      id: 6,
      message:
        "Arsitektur pada bagian FrontEnd aplikasi yang berpusat pada independensi suatu fitur dengan fitur lainnya.",
      from: "Febry",
      date: "2024-01-20 11:00:00",
    },
    { id: 7, message: "Bijii", from: "Isnan", date: "2024-01-20 12:12:00" },
  ];

  const EmptyChat = () => {
    return (
      <div>
        <div className="info text-center">
          <h1>No Conversations</h1>
          <p>You didn't made any conversation yet, please select username</p>
          <span className="badge badge-primary">Start a chat</span>
        </div>
      </div>
    );
  };


  const [myChat, setMyChat] = useState([]);
  const [writeChat, setWriteChat] = useState("");
  const HandlerSendChat = (e) => {
    e.preventDefault();
    const objChat = {
      id: 99,
      message: writeChat,
      from: "Febry",
      date: moment().format("YYYY-MMM-DD HH:mm"),
    };
    setMyChat([...myChat, objChat]);
    setWriteChat("");
  };
  const endOfMessagesRef = useRef(null);
  const [search, setSearch] = useState ([]); 
  const ResultMessageData = useMemo(() => {
    let computedData = myChat.map((msg) => ({
      ...msg,
      date_fmt: moment(msg.date).format("YYYY-MM-DD"),
      isOutgoing: msg.from_id === profile.id
    }));
    if (search) {
      computedData = computedData.filter(
        listData => {
          return Object.keys(listData).some(key =>
            listData[key].toString().toLowerCase().includes(search)
          );
        }
      );
    }

    return computedData;
  }, [myChat, profile.id])

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setMyChat(selectedChat)
    scrollToBottom();
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title align-items-start flex-column">
          <span className="fw-bold mb-2 text-gray-900">Chats</span>
        </h3>
        <div className="card-toolbar">
          <ButtonSecondary
            items={{
              title: "Create new chat",
              btn_class: "btn-icon btn-clear",
            }}
            // actions={HandlerCreateNewChat}
          >
            <i className="bi bi-pencil-square"></i>
          </ButtonSecondary>
        </div>
      </div>
      <div className="card-body p-0">
        <div
          className="chat-message px-2 bg-light-primary"
          style={StylesMessager.chatBox}
        >
          <ChatBody data={myChat} />
          <div ref={endOfMessagesRef} />
        </div>
        <div className="chat-send bg-light p-3">
          <form
            method="post"
            autoComplete="off"
            onSubmit={(e) => HandlerSendChat(e)}
          >
            <div className="d-flex justify-content-between align-items-center">
              <input
                type="text"
                className="form-control me-2"
                autoFocus={true}
                value={writeChat}
                onChange={(e) => setWriteChat(e.target.value)}
              />
              <ButtonPrimary
                items={{
                  title: "Send",
                  btn_class: "btn-icon btn-success",
                  type: "submit",
                }}
              >
                <i className="bi bi-send"></i>
              </ButtonPrimary>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
