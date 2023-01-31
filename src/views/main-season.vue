<template>
	<!-- season -->
	<section class="top-rated-movie tr-movie-bg" data-background="img/bg/tr_movies_bg.jpg" style="background-image: url(&quot;img/bg/tr_movies_bg.jpg&quot;);">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-8">
					<div class="section-title text-center mb-50">
						<span class="sub-title">ONLINE STREAMING</span>
						<h2 class="title">Breaking Bad</h2>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-lg-8">
					<div class="tr-movie-menu-active text-center">
						<button class="" data-filter="*">Сезон - 1</button>
						<button class="" data-filter="*">Сезон - 4</button>
						<button class="" data-filter="*">Сезон - 3</button>
						<button class="" data-filter="*">Сезон - 2</button>
						<button class="active" data-filter="*">Сезон - 5</button>
					</div>
				</div>
			</div>
			<MainSeasonEpisode/>
		</div>
	</section>
	<!-- season-end -->
</template>

<script setup>
import MainSeasonEpisode from "./main-season-episode.vue";
const props = defineProps([
	'season',
])

</script>

<style scoped>

</style>