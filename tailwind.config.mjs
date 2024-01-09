/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

export default {
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
	},
	plugins: [],
}
