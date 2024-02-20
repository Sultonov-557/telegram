import SideBar from "@/components/SideBar";
import Chat from "@/components/Chat";

export default function ChatPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-row">
      <SideBar />
      <Chat chatID={params.id} />
    </div>
  );
}
