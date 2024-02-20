"use client";
import SideBarChat from "./SideBarChat";
import SideBarButton from "./SideBarButton";
import { useEffect, useState } from "react";
import ChatType from "@/utils/ChatType";

export default function Sidebar() {
  const [chats, setChats] = useState<ChatType[]>();

  useEffect(() => {
    (async () => {
      const chatsStr = localStorage.getItem("chats");
      if (chatsStr && chatsStr != "undefined") {
        setChats(JSON.parse(chatsStr));
      } else {
        const req = await fetch(`http://localhost:3000/api/chats`);
        setChats(await req.json());
        localStorage.setItem("chats", JSON.stringify(chats));
      }
    })();
  }, []);

  return (
    <div className="bg-foreground h-screen w-96 overflow-hidden">
      <div className="w-16 h-screen border-l-2">
        <SideBarButton>Users</SideBarButton>
      </div>
      <div className="w-full h-screen overflow-y-scroll">
        {chats?.map((chat) => (
          <SideBarChat id={chat.id} lastMessage={chat.lastMessage || ""} title={chat.title || ""} />
        ))}
      </div>
    </div>
  );
}
