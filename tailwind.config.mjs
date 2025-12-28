/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	darkMode: ['class', '[data-theme="dark"]'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Geist Sans"', ...defaultTheme.fontFamily.sans],
				mono: ['"Geist Mono"', ...defaultTheme.fontFamily.mono],
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
