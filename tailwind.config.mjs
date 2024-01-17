/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	darkMode: ['class', '[data-theme="dark"]'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Space Grotesk Variable"', 'Inter', 'sans-serif', ...defaultTheme.fontFamily.sans],
				code: [
					'Menlo',
					'Monaco',
					'"Lucida Console"',
					'"Liberation Mono"',
					'"DejaVu Sans Mono"',
					'"Bitstream Vera Sans Mono"',
					'"Courier New"',
					'monospace'
				]
			},
		},
		colors: {
			brand: {
				DEFAULT: '#000000',
				light: '#000000',
				dark: '#99a2ff'
			},
			content: {
				DEFAULT: '#000000',
				light: '#000000',
				dark: '#b8b4d3'
			},
			tahiti: {
				DEFAULT: '#ffffff',
				light: '#ffffff',
				dark: '#151724'
			}
		}
	},
	plugins: [],
}
