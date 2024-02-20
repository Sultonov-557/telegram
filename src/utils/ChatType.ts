type ChatType = {
	id: string;
	title: string;
	lastMessage: string;
	type?: "user" | "channel" | "group" | "bot" | any;
	messages: { text: string; senderID: string; senderName: string }[];
};

export default ChatType;
