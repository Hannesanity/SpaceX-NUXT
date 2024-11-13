<template>
	<v-app>
		<Head>
			<Title>SpaceX</Title>
			<Meta name="description" content="Experience the future of space exploration with SpaceX" />
		</Head>
		<div class="home-page">
			<video autoplay muted loop class="background-video">
				<source src="../looping-rockets.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
		<v-container class="d-flex">
			<v-row>
				<v-col cols="12">
					<div class="inner-left-bottom">
						<h1>Welcome to SpaceX</h1>
						<p>
							Experience the future of space exploration with SpaceX. Discover the launches,
							rockets, and more that will make leave you curious.
						</p>
						<v-btn variant="outlined" class="mt-3" :to="'/launches'">EXPLORE MORE</v-btn>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</v-app>
</template>

<style scoped>
.inner-left-bottom {
	color: white;
	text-align: left;
	width: 50%;
	max-width: 520px;
	position: absolute;
	bottom: 40%;
}

.home-page {
	position: relative;
	overflow: hidden;
	height: 100vh;
}

.background-video {
	position: absolute;
	top: 10%;
	left: 50%;
	min-width: 100%;
	min-height: 100%;
	width: auto;
	height: auto;
	z-index: 0;
	transform: translate(-50%, -50%);
	object-position: center;
}
</style>
