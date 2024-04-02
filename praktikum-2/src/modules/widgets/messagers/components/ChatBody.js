import React from "react";
import moment from "moment";

export default function ChatBody({ data }) {
  const itsme = "Febry";

  const styleChatItems = {
    chatBubleItems: {
      display: "flex",
      flexDirection: "column",
    },
    chatBubleSender: {
      textAlign: "right",
      backgroundColor: "#a198a7",
      alignSelf: "flex-end",
    },
    chatBubleReceiver: {
      backgroundColor: "#a83aef",
      alignSelf: "flex-start",
    },
    chatDate: {
      textAlign: "center",
      fontSize: "12px",
      fontWeight: "bold",
      margin: "10px 0",
    },
  };

  // Fungsi untuk menampilkan tanggal
  const getDateString = (date) => {
    const messageDate = moment(date).startOf("day");
    const today = moment().startOf("day");
    const yesterday = moment().subtract(1, "days").startOf("day");

    if (messageDate.isSame(today, "day")) {
      return "Today";
    } else if (messageDate.isSame(yesterday, "day")) {
      return "Yesterday";
    } else {
      return moment(date).format("DD/MM/YYYY");
    }
  };

  return (
    <div className="chat-items">
      {data.map((v, index) => (
        <div
          className="chat-item"
          style={styleChatItems.chatBubleItems}
          key={index}
        >
          {index === 0 ||
          getDateString(data[index].date) !==
            getDateString(data[index - 1].date) ? (
            <div style={styleChatItems.chatDate}>{getDateString(v.date)}</div>
          ) : null}
          <div
            className="chat text-white rounded my-2 p-2"
            style={
              v.from === itsme
                ? styleChatItems.chatBubleSender
                : styleChatItems.chatBubleReceiver
            }
          >
            <span className="me-3">{v.message}</span>
            <span className="chat-date" style={{ fontSize: "11px" }}>
              {moment(v.date).format("HH:mm")}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
