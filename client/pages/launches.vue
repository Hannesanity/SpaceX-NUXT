<template>
	<v-container class="">
		<Head>
			<Title>SpaceX - Launches</Title>
			<Meta name="description" content="Experience the future of space exploration with SpaceX" />
		</Head>
		<h2>
			<v-icon icon="mdi-rocket" />
			Rocket Launches
		</h2>

		<template v-if="launches && launches.length !== 0">
			<v-data-iterator :items="launches" :items-per-page="page">
				<template #header="{ page, pageCount, prevPage, nextPage }">
					<div class="d-flex justify-space-between">
						<div class="d-flex justify-content-start align-center">
							<v-btn
								:disabled="page === 1"
								class="me-2"
								icon="mdi-arrow-left"
								size="small"
								variant="tonal"
								@click="prevPage"
							/>

							<v-btn
								:disabled="page === pageCount"
								icon="mdi-arrow-right"
								size="small"
								variant="tonal"
								@click="nextPage"
							/>

							<v-chip class="ml-4">{{ 'Page  ' + page + '  of  ' + pageCount }}</v-chip>
							<p class="ml-3">There are {{ launches?.length || 0 }} launches.</p>
						</div>

						<div class="d-flex align-center">
							<v-btn class="ma-2" variant="tonal" @click="sortData('asc')">
								Date(ASC)
								<v-icon icon="mdi-arrow-up" end />
							</v-btn>

							<v-btn class="ma-2" variant="tonal" @click="sortData('desc')">
								Date(DESC)
								<v-icon icon="mdi-arrow-down" end />
							</v-btn>

							<v-select
								v-model="year"
								:items="['', ...years]"
								label="Filter by Year"
								variant="solo-filled"
								dense
								class="mt-5 ml-2"
								style="width: 200px"
							/>
						</div>
					</div>
				</template>

				<template #default="{ items }">
					<v-row>
						<v-col v-for="(item, i) in items" :key="i" cols="12" sm="6" xl="3">
							<v-sheet>
								<iframe
									:src="getVideoLink(item?.raw?.links?.video_link)"
									height="480px"
									width="100%"
									title="Iframe Example"
								/>

								<v-list-item :title="item.raw.mission_name" density="comfortable" lines="two">
									<template #title>
										<h5 class="mt-3 text-medium-emphasis">
											{{ formatDate(item.raw.launch_date_utc) }}
										</h5>

										<div class="d-flex align-center mt-3">
											<strong class="text-h4 font-weight-bold text-uppercase mr-auto">
												{{ item.raw.mission_name }}
											</strong>
										</div>
										<h4 class="mt-3">{{ item.raw.rocket.rocket_name }}</h4>
										<p
											class="mt-3"
											style="
												min-height: 100px;
												white-space: pre-line;
												max-width: 100%;
												overflow-wrap: break-word;
											"
										>
											{{ item?.raw?.details ? item.raw.details : '-----------' }}
										</p>

										<p class="mt-3 mb-5">
											{{
												item.raw?.launch_site?.site_name
													? item.raw?.launch_site?.site_name
													: 'Site name is currently not avalible'
											}}
										</p>
										<v-btn
											variant="outlined"
											class="mt-3"
											:to="'/rocketdetails/' + item.raw.rocket.rocket.id"
										>
											View More
										</v-btn>
									</template>
								</v-list-item>
							</v-sheet>
						</v-col>
					</v-row>
				</template>
			</v-data-iterator>
		</template>

		<div v-else>
			<v-container>
				<v-row>
					<v-col cols="10" sm="5" class="mr-2">
						<v-skeleton-loader :elevation="24" type="card-avatar" />
					</v-col>
					<v-col cols="10" sm="5" class="ml-2">
						<v-skeleton-loader :elevation="24" type="card-avatar" />
					</v-col>
				</v-row>
			</v-container>
		</div>
	</v-container>
</template>

<script lang="ts" setup>
import filterByYear from '../composables/filterByYear'
import formatDate from '../composables/formatDate'
import sortLaunches from '../composables/sort'

const page = ref(10)
const getLaunches = gql`
	query Launches {
		launches {
			id
			mission_name
			launch_date_local
			launch_date_utc
			launch_site {
				site_name
				site_name_long
			}
			rocket {
				rocket_name
				rocket {
					id
				}
			}
			details
			links {
				flickr_images
				video_link
			}
			launch_year
		}
	}
`

const { data } = useAsyncQuery<{
	launches: {
		id: String
		mission_name: String
		launch_date_local: String
		launch_date_utc: String
		launch_site: {
			site_name: String
			site_name_long: String
		}
		rocket: {
			rocket_name: String
			rocket: {
				id: String
			}
		}
		details: String
		links: {
			flickr_images: String[]
			video_link: String
		}
		launch_year: String
	}[]
}>(getLaunches)
let launches = computed(() => data.value?.launches ?? [])

const { years, selectedYear, filteredLaunches } = filterByYear(launches)

const year = ref(selectedYear)

watch(
	year,
	(_oldValue, _newValue) => {
		launches = filteredLaunches
	},
	{
		immediate: true,
	},
)

const sortData = (order: string) => {
	launches = sortLaunches(launches, order)
}

const getVideoLink = (link?: any) => {
	if (link?.includes('youtu.be')) {
		const linkData = link && link.split('youtu.be/')
		return `https://www.youtube.com/embed/${linkData[1]}`
	} else {
		const linkData = link && link.split('watch?v=')
		const finalLink = linkData && linkData[0] + 'embed/' + linkData[1]
		return finalLink
	}
}
</script>

<style>
.launch-image {
	width: 100%;
}
</style>
