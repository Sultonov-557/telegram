"use client";
import ChatType from "@/utils/ChatType";
import { useEffect, useState } from "react";

export default function Chat({ chatID }: { chatID: string }) {
  const [chat, setChat] = useState<ChatType>();
  const [messages, setMessages] = useState<ChatType>();

  useEffect(() => {
    (async () => {
      const chatsStr = localStorage.getItem("chats");
      let chats = [];

      if (chatsStr && chatsStr != "undefined") {
        chats = JSON.parse(chatsStr);
      }

      for (let _chat of chats || []) {
        if (_chat.id == chatID) {
          setChat(_chat);
          return;
        }
      }
    })();
  }, []);

  return (
    <div className="bg-foreground w-full h-screen flex flex-col">
      <div className="w-full h-16 flex items-center">
        <h1 className="font-bold text-white ">{chat?.title}</h1>
      </div>
      <div className="w-full h-full bg-background">messages</div>
    </div>
  );
}
