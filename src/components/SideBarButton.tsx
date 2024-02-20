export default function SideBarButton({ children, onClick }: { children: React.ReactNode; onClick?: Function }) {
	return (
		<div
			onClick={() => {
				if (onClick) {
					onClick();
				}
			}}
			className="text-white flex justify-center items-center w-16 h-16 m-2 rounded-[50px] duration-500 ease-in-out bg-button hover:rounded-lg hover:bg-button-highlight"
		>
			{children}
		</div>
	);
}
