export const useFavorite = defineStore('favorites', {
	state: () => ({ favorites: [] }),
	getters: {
		getFavoritesList: (state) => state.favorites,
	},
	actions: {
		add(dataToAdd: any) {
			console.log('Adding to favorites: ', dataToAdd)
			// @ts-ignore
			this.$state.favorites.push(dataToAdd)
		},
		remove(dataToRemove: any) {
			const dataToRemoveId = dataToRemove.value ? dataToRemove.value.id : dataToRemove.id

			this.$state.favorites = this.$state.favorites.filter((item: any) => {
				const itemId = item.value ? item.value.id : item.id
				return itemId !== dataToRemoveId
			})

			console.log('Updated favorites list:', this.$state.favorites)
		},

		removeAllFavorite() {
			console.log('Removing all favorites: ', this.$state.favorites)
			this.$state.favorites = []
		},
	},
})
