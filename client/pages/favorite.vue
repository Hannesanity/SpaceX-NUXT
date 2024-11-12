<template>
	<v-container>
		<div class="d-flex align-center">
			<v-icon icon="mdi-rocket" />
			<h2>SpaceX Favorite Rockets</h2>
			<div class="d-flex align-center ml-auto">
				<div class="d-inline-flex">
					<div class="ml-auto">
						<v-btn class="ma-2" color="red" @click="removeFavorites()">
							Remove All
							<v-icon icon="mdi-playlist-remove" end />
						</v-btn>
					</div>
				</div>
			</div>
		</div>

		<div
			v-if="
				favorite.getFavoritesList &&
				favorite.getFavoritesList !== null &&
				favorite.getFavoritesList.length !== 0
			"
			class="mt-4 mr-auto"
		>
			<div v-for="(item, i) in favorite.getFavoritesList" :key="i">
				<v-expansion-panels>
					<v-expansion-panel>
						<v-expansion-panel-title v-slot="{ expanded }">
							<v-row no-gutters>
								<v-col class="d-flex justify-start" cols="4">
									<span v-if="expanded" key="0" class="font-weight-bold">
										Rocket Information
									</span>

									<span v-else key="1" class="font-weight-bold">Rocket Name</span>
								</v-col>
								<v-col class="text--secondary" cols="8">
									<v-fade-transition leave-absolute>
										<span v-if="expanded" key="0" />
										<span v-else key="1">
											{{ item._value.name }}
										</span>
									</v-fade-transition>
								</v-col>
							</v-row>
						</v-expansion-panel-title>

						<v-expansion-panel-text>
							<v-row no-gutters>
								<v-col>
									<v-table>
										<tbody>
											<tr>
												<td class="text-subtitle-1">Rocket Name</td>
												<td>{{ item._value.name }}</td>
											</tr>
											<tr>
												<td class="text-subtitle-1">First Flight</td>
												<td>{{ item._value.first_flight }}</td>
											</tr>
											<tr>
												<td class="text-subtitle-1">Stage Count</td>
												<td>{{ item._value.stages }}</td>
											</tr>
											<tr>
												<td class="text-subtitle-1">Diameter (feet)</td>
												<td>{{ item._value.diameter.feet }}</td>
											</tr>
											<tr>
												<td class="text-subtitle-1">Diameter (meters)</td>
												<td>{{ item._value.diameter.meters }}</td>
											</tr>
											<tr>
												<td class="text-subtitle-1">Height (feet)</td>
												<td>{{ item._value.height.feet }}</td>
											</tr>
											<tr>
												<td class="text-subtitle-1">Height (meters)</td>
												<td>{{ item._value.height.meters }}</td>
											</tr>
											<tr>
												<td class="text-subtitle-1">Mass (kilograms)</td>
												<td>{{ item._value.mass.kg }}</td>
											</tr>
											<tr>
												<td class="text-subtitle-1">Mass (pounds)</td>
												<td>{{ item._value.mass.lb }}</td>
											</tr>
										</tbody>
									</v-table>
								</v-col>
							</v-row>

							<v-card-actions>
								<v-spacer />
							</v-card-actions>
						</v-expansion-panel-text>
					</v-expansion-panel>
				</v-expansion-panels>
				<br />
			</div>
		</div>

		<div v-else>Empty favorites list</div>
	</v-container>
</template>
<script lang="ts" setup>
import { useFavorite } from '../stores/useFavorites'

const favorite = useFavorite()

const removeFavorites = () => {
	favorite.removeAllFavorite()
}
</script>
