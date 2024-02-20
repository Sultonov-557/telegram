import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				background: "#18191d",
				foreground: "#282e33",
				button: "#8d939e",
				"foreground-highlight": "#353c43",
				"button-highlight": "#fe0800",
			},
		},
	},
	plugins: [],
};
export default config;
