import SideBar from "@/components/SideBar";
import Chat from "@/components/Chat";

export default function ChatPage({ params }: { params: { id: string } }) {
	return (
		<main className="bg-background w-screen h-screen">
			<SideBar />
			<Chat chatID={params.id} />
		</main>
	);
}
