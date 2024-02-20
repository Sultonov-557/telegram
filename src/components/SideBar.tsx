"use client";
import SideBarChat from "./SideBarChat";
import SideBarButton from "./SideBarButton";
import { useEffect, useState } from "react";
import ChatType from "@/utils/ChatType";

export default function Sidebar() {
	const [allChats, setAllChats] = useState<ChatType[]>();
	const [chats, setChats] = useState<ChatType[]>();

	useEffect(() => {
		(async () => {
			if (!allChats) {
				const chatsStr = localStorage.getItem("chats");
				if (chatsStr && chatsStr != "undefined") {
					setAllChats(JSON.parse(chatsStr));
				} else {
					const req = await fetch(`http://localhost:3000/api/chats`);
					const res = await req.json();
					setAllChats(res);
					localStorage.setItem("chats", JSON.stringify(res));
				}
			}

			setChats(allChats);
		})();
	}, []);

	function changeCategory(category: string) {
		if (category == "all") {
			setChats(allChats);
		} else {
			setChats(
				allChats?.filter((chat) => {
					return chat.type == category;
				})
			);
		}
	}

	return (
		<div className="bg-foreground h-screen w-96 overflow-hidden flex flex-row">
			<div className="w-24 h-screen border-l-2 bg-foreground-highlight">
				<SideBarButton
					onClick={() => {
						changeCategory("all");
					}}
				>
					All
				</SideBarButton>
				<SideBarButton
					onClick={() => {
						changeCategory("user");
					}}
				>
					Users
				</SideBarButton>
				<SideBarButton
					onClick={() => {
						changeCategory("group");
					}}
				>
					Groups
				</SideBarButton>
				<SideBarButton
					onClick={() => {
						changeCategory("channel");
					}}
				>
					Channels
				</SideBarButton>
				<SideBarButton
					onClick={() => {
						changeCategory("bot");
					}}
				>
					Bots
				</SideBarButton>
			</div>
			<div className="w-full h-screen overflow-y-scroll">
				{chats?.map((chat) => (
					<SideBarChat id={chat.id} lastMessage={chat.lastMessage || ""} title={chat.title || ""} />
				))}
			</div>
		</div>
	);
}
