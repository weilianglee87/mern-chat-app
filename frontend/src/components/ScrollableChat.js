import React from "react";
import ScrollableFeed from "react-scrollable-feed";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../config/ChatLogics";
import { ChatState } from "../Context/ChatProvider";
import { Avatar, Tooltip } from "@chakra-ui/react";
import moment from "moment";

const ScrollableChat = ({ messages }) => {
  const { user } = ChatState();
  return (
    <ScrollableFeed>
      {messages.map((m, i) => {
        const dayAfter = moment(messages[i + 1]?.createdAt).format(
          "Do MMM YYYY"
        );
        const sendDate = moment(m.createdAt).format("Do MMM YYYY");

        return (
          <div key={m._id}>
            {dayAfter !== sendDate && (
              <div style={{ textAlign: "center" }}>
                <p>{sendDate}</p>
                <br />
              </div>
            )}
            <div style={{ display: "flex" }}>
              {(isSameSender(messages, m, i, user._id) ||
                isLastMessage(messages, i, user._id)) && (
                <Tooltip
                  label={m.sender.name}
                  placement='bottom-start'
                  hasArrow
                >
                  <Avatar
                    mt='7px'
                    mr={1}
                    size='sm'
                    name={m.sender.name}
                    src={m.sender.pic}
                  />
                </Tooltip>
              )}
              <Tooltip
                label={new Date(m.createdAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                placement='bottom'
                hasArrow
              >
                <span
                  style={{
                    backgroundColor: `${
                      m.sender._id === user._id ? "#BEE3F8" : "#B9F5D0"
                    }`,
                    borderRadius: "20px",
                    padding: "5px 15px",
                    maxWidth: "75%",
                    marginLeft: isSameSenderMargin(messages, m, i, user._id),
                    marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
                  }}
                >
                  {m.content}
                </span>
              </Tooltip>
            </div>
          </div>
        );
      })}
    </ScrollableFeed>
  );
};

export default ScrollableChat;
