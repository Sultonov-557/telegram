import ChatType from "@/utils/ChatType";
import TGClient from "@/utils/TGClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
	const chats = await TGClient.getChats();

	return new Response(
		JSON.stringify(
			chats.map((v): ChatType => {
				let type;
				if (v.isUser) {
					type = "user";
				}
				if (v.isGroup) {
					type = "group";
				}
				if (v.isChannel) {
					type = "channel";
				}
				return { id: v.id?.toString() || "not founded", title: v.title || "not founded", lastMessage: v.message?.text || "not founded", messages: [], type };
			})
		)
	);
}
