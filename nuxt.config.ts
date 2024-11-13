import vuetify from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	srcDir: 'client/',
	build: { transpile: ['vuetify'] },
	imports: { dirs: ['./stores'] },
	apollo: {
		autoImports: true,
		proxyCookies: true,
		clients: {
			default: { httpEndpoint: 'https://spacex-production.up.railway.app/' },
		},
	},
	vite: {
		plugins: [vuetify()],
	},
	app: {
		head: {
			link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
		},
	},
	modules: ['@nuxtjs/apollo', ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }]],
})
