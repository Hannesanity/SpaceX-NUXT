<template>
	<v-app>
		<AppNavbar class="navbar" />

		<v-main class="main-content">
			<slot />
		</v-main>

		<AppFooter class="footer" />
	</v-app>
</template>
<script>
import AppNavbar from '../components/AppNavbar.vue'
import AppFooter from '../components/AppFooter.vue'
export default {
	name: 'DefaultLayout',
	components: {
		AppNavbar,
		AppFooter,
	},
}
</script>
