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
			brand: 'var(--brand-color)',
			content: 'var(--content-color)',
			tahiti: 'var(--tahiti-color)',
			selection: 'var(--selection-color)'
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
