import { sveltekit } from '@sveltejs/kit/vite'
import autoprefixer from 'autoprefixer'
import { defineConfig } from 'vite'
import Sonda from 'sonda/sveltekit'

const DEV = process.env.NODE_ENV === 'development'

export default defineConfig({
	plugins: [sveltekit(), DEV && Sonda()],
	build: { sourcemap: DEV },
	server: {
		allowedHosts: ['pubmed-successful-ross-among.trycloudflare.com'],
	},
	css: {
		postcss: { plugins: [autoprefixer()] },
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
	},
})
