"use client";

import { styled } from "@mui/material";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useState } from "react";

import List from "@/app/_components/ChatBot/components/List";

import bot from "./bot.json";

export default function ChatBot() {
  const [onChatBot, setOnChatBot] = useState(false);

  return (
    <Wrapper
      initial={false}
      onClick={() => setOnChatBot(!onChatBot)}
      animate={{
        width: onChatBot ? 300 : "52px",
        height: onChatBot ? 500 : "52px",
        padding: onChatBot ? 0 : "4px",
        borderRadius: onChatBot ? "32px" : "100%",
      }}
      transition={{
        width: { duration: 0.2, ease: "linear" },
        height: { duration: 0.2, ease: "linear" },
        padding: { duration: 0.2, ease: "linear" },
        borderRadius: {
          duration: 0.3,
          ease: "linear",
          delay: onChatBot ? 0.1 : 0.2,
        },
      }}
    >
      {onChatBot ? <List /> : <Lottie animationData={bot} loop />}
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)(() => {
  return {
    zIndex: 10,
    right: "44px",
    bottom: "44px",
    padding: "10px",
    cursor: "pointer",
    position: "fixed",
    borderRadius: "100%",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.16)",
  };
});
