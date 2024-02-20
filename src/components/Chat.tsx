"use client";
import ChatType from "@/utils/ChatType";
import { useEffect, useState } from "react";

export default function Chat({ chatID }: { chatID: string }) {
	const [chat, setChat] = useState<ChatType>();
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

			let chat = chats?.filter((v) => {
				return v.id != chatID;
			})[0];
			if (chat) {
				setChat(chat);
			}
		})();
	}, [chats]);

	return (
		<div>
			<div className="bg-foreground w-full h-16">
				<h1 className="font-bold">{chat?.title}</h1>
			</div>
		</div>
	);
}
