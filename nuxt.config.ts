import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		'@tailwindcss/typography',
		'@nuxtjs/color-mode',
		'nuxt-icon',
		'@nuxt/content',
	],
	build: {
		transpile: ['gsap'],
	},
	colorMode: {
		classSuffix: '',
	},
	tailwindcss: {
		// add '~tailwind.config` alias
		exposeConfig: true,
	},
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
		layoutTransition: { name: 'page', mode: 'out-in' },
	},
	content: {
		highlight: {
		  theme: 'github-dark'
		}
	},
})
