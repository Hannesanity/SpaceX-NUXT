<template>
	<v-app-bar :elevation="0">
		<v-container>
			<v-row>
				<v-app-bar-title class="font-weight-bold">SpaceX</v-app-bar-title>

				<v-btn text to="/" class="font-weight-bold">Home</v-btn>
				<v-btn text to="/launches" class="font-weight-bold">Launches</v-btn>
				<v-btn text to="/favorite" class="font-weight-bold">Favorite</v-btn>
			</v-row>
		</v-container>
	</v-app-bar>
</template>

<script>
export default {
	name: 'AppNavbar',
}
</script>
