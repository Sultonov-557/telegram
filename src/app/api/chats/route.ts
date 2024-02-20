import TGClient from "@/utils/TGClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
	const chats = await TGClient.getChats();

	return new Response(
		JSON.stringify(
			chats.map((v) => {
				return { id: v.id, title: v.title, lastMessage: v.message?.text };
			})
		)
	);
}
