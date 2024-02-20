import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				background: "#18191d",
				foreground: "#282e33",
				"foreground-highlight": "#353c43",
				"button-background":"#fe0000"
			},
		},
	},
	plugins: [],
};
export default config;
