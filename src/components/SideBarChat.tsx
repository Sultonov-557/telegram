export default function SideBarChat({ lastMessage, title, id }: { id: string; lastMessage: string; title: string }) {
	return (
		<div
			onClick={() => {
				window.open(`./chat/${id}`,"__self");
			}}
			className="w-full h-20 text-white hover:bg-foreground-highlight border-b-2 border-b-background overflow-hidden"
		>
			<h3 className="font-bold">{title}</h3>
			<p className="text-gray-300">{lastMessage}</p>
		</div>
	);
}
