<template>
	<v-container v-if="rocket && rocket !== null">
		<div class="d-flex align-center">
			<h2 class="ml-16">SpaceX Rocket Details</h2>
		</div>

		<v-container class="d-flex">
			<v-card elevation="0" style="padding: 24px; width: 50%">
				<div class="d-flex align-center justify-space-between mx-4">
					<div class="d-flex justify-content-start">
						<v-btn variant="outlined" class="ml-3 mb-3" to="/launches">Back to Launches</v-btn>
					</div>
					<div class="d-flex align-center">
						<v-btn
							v-if="displayButton(rocket.id)"
							class="ma-2"
							color="indigo"
							icon="mdi-heart"
							@click="removeFavorite()"
						/>
						<v-btn
							v-else
							class="ma-2"
							color="indigo"
							icon="mdi-heart-outline"
							@click="addFavorite()"
						/>
					</div>
				</div>

				<v-card-title class="ml-4">
					<h2>{{ rocket.name }}</h2>
				</v-card-title>
				<v-card-text>
					<v-list>
						<v-list-item>
							<v-list-item-content>
								<v-list-item-subtitle class="d-block text-medium-emphasis">
									{{ rocket?.description }}
								</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
						<v-list-item>
							<v-list-item-content class="d-flex justify-space-between align-center">
								<v-list-item-title class="text-medium font-weight-bold d-block">
									Active
								</v-list-item-title>
								<v-list-item-subtitle
									class="text-sm text-grey font-weight-bold text-align-end"
								>
									{{ rocket?.active ? 'Yes' : 'No' }}
								</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
						<v-divider />

						<v-list-item>
							<v-list-item-content class="d-flex justify-space-between align-center">
								<v-list-item-title class="text-medium font-weight-bold d-block">
									First Flight
								</v-list-item-title>
								<v-list-item-subtitle
									class="text-sm text-grey font-weight-bold text-align-end"
								>
									{{ rocket?.first_flight }}
								</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
						<v-divider />

						<v-list-item>
							<v-list-item-content class="d-flex justify-space-between align-center">
								<v-list-item-title class="text-medium font-weight-bold d-block">
									Stages
								</v-list-item-title>
								<v-list-item-subtitle
									class="text-sm text-grey font-weight-bold text-align-end"
								>
									{{ rocket?.stages }}
								</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>

						<v-card-title class="mt-3">
							<h4>Dimensions</h4>
						</v-card-title>
						<v-list-item>
							<v-list-item-content class="d-flex justify-space-between align-center">
								<v-list-item-title class="text-medium font-weight-bold d-block">
									Diameter (feet)
								</v-list-item-title>
								<v-list-item-subtitle
									class="text-sm text-grey font-weight-bold text-align-end"
								>
									{{ rocket?.diameter?.feet }}
								</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
						<v-divider />

						<v-list-item>
							<v-list-item-content class="d-flex justify-space-between align-center">
								<v-list-item-title class="text-medium font-weight-bold d-block">
									Diameter (meters)
								</v-list-item-title>
								<v-list-item-subtitle
									class="text-sm text-grey font-weight-bold text-align-end"
								>
									{{ rocket?.diameter?.meters }}
								</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
						<v-divider />

						<v-list-item>
							<v-list-item-content class="d-flex justify-space-between align-center">
								<v-list-item-title class="text-medium font-weight-bold d-block">
									Height (feet)
								</v-list-item-title>
								<v-list-item-subtitle
									class="text-sm text-grey font-weight-bold text-align-end"
								>
									{{ rocket?.height?.feet }}
								</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
						<v-divider />

						<v-list-item>
							<v-list-item-content class="d-flex justify-space-between align-center">
								<v-list-item-title class="text-medium font-weight-bold d-block">
									Height (meters)
								</v-list-item-title>
								<v-list-item-subtitle
									class="text-sm text-grey font-weight-bold text-align-end"
								>
									{{ rocket?.height?.meters }}
								</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
						<v-divider />

						<v-list-item>
							<v-list-item-content class="d-flex justify-space-between align-center">
								<v-list-item-title class="text-medium font-weight-bold d-block">
									Mass (kilograms)
								</v-list-item-title>
								<v-list-item-subtitle
									class="text-sm text-grey font-weight-bold text-align-end"
								>
									{{ rocket?.mass?.kg }}
								</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
						<v-divider />

						<v-list-item>
							<v-list-item-content class="d-flex justify-space-between align-center">
								<v-list-item-title class="text-medium font-weight-bold d-block">
									Mass (pounds)
								</v-list-item-title>
								<v-list-item-subtitle
									class="text-sm text-grey font-weight-bold text-align-end"
								>
									{{ rocket?.mass?.lb }}
								</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
						<v-divider />
					</v-list>
				</v-card-text>
			</v-card>
		</v-container>
	</v-container>

	<v-container v-else>
		<v-skeleton-loader :elevation="24" type="article" />
	</v-container>
</template>

<script lang="ts" setup>
import { useFavorite } from '../../stores/useFavorites'

const favorite = useFavorite()

const route = useRoute()

const getRocketDetails = gql`
	query Rocket($rocketId: ID!) {
		rocket(id: $rocketId) {
			active
			name
			description
			first_flight
			height {
				feet
				meters
			}
			diameter {
				feet
				meters
			}
			mass {
				kg
				lb
			}
			stages
			id
		}
	}
`

const { data } = useAsyncQuery<{
	rocket: {
		active: boolean
		description: String
		diameter: {
			feet: Number
			meters: Number
		}
		first_flight: String
		height: {
			feet: Number
			meters: Number
		}
		mass: {
			kg: Number
			lb: Number
		}
		id: String
		name: String
		stages: String
	}
}>(getRocketDetails, { rocketId: route.params.id })

const rocket = computed(() => data.value?.rocket ?? [])

const addFavorite = () => {
	favorite.add(rocket)
}

const removeFavorite = () => {
	const rocketData = rocket.value || rocket
	console.log('Rocket ID to remove:', rocketData.id)

	favorite.remove(rocketData)
}

const displayButton = (id: String) => {
	const data = favorite.getFavoritesList.filter((favorite: any) => {
		return favorite._value.id === id
	})

	return data.length !== 0
}
</script>
