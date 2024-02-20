import TGClient from "@/utils/TGClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const chats = await TGClient.getMessages(+req.url.split("/")[-1]);

  return new Response(
    JSON.stringify(
      chats.map((v) => {
        return { id: v.id, sender_name: { name: v.sender?.className, id: v.senderId } };
      })
    )
  );
}
