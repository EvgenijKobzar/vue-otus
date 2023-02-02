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
						<main-season-item :item="item" v-for="item in props.seasons" :key="item.id"/>
					</div>
				</div>
			</div>
			<slot name="episodes"></slot>
		</div>
	</section>
	<!-- season-end -->
</template>

<script setup>
import MainSeasonItem from "./main-season-item.vue";
const props = defineProps([
	'seasons',
])

</script>

<style scoped>

</style>