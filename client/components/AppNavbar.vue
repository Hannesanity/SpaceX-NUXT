<template>
	<v-app-bar :elevation="0">
		<v-container>
			<v-row>
				<v-app-bar-title class="font-weight-bold">SpaceX</v-app-bar-title>

				<v-btn text to="/" class="font-weight-bold">Home</v-btn>
				<v-btn text to="/launches" class="font-weight-bold">Launches</v-btn>
				<v-btn text to="/favorite" class="font-weight-bold">Favorite</v-btn>
				<v-btn @click="toggleTheme">
					<v-icon left>mdi-brightness-6</v-icon>
					Toggle Theme
				</v-btn>
			</v-row>
		</v-container>
	</v-app-bar>
</template>

<script>
import { useTheme } from 'vuetify'

export default {
	name: 'AppNavbar',
	setup() {
		const theme = useTheme()

		const toggleTheme = () => {
			theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
		}

		return {
			toggleTheme,
		}
	},
}
</script>
