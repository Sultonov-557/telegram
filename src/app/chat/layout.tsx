import type { Metadata } from "next";
import "../globals.css";
import Sidebar from "@/components/SideBar";

export const metadata: Metadata = {
	title: "telegram",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<div className="bg-background w-screen h-screen flex flex-row">
					<Sidebar />
					{children}
				</div>
			</body>
		</html>
	);
}
