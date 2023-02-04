<template>
	<!-- season -->
	<section class="top-rated-movie tr-movie-bg" style="background-image: url(&quot;img/bg/tr_movies_bg.jpg&quot;);">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-8">
					<div class="section-title text-center mb-50">
						<span class="sub-title">ONLINE STREAMING</span>
						<h2 class="title">
							<slot name="serial-name"/>
						</h2>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-lg-8">
					<div class="tr-movie-menu-active text-center">
						<main-season-item :class="{'active': item.id === id}" :item="item" v-for="item in list" :key="item.id"
															@season-change-item="emitChange"
						/>
					</div>
				</div>
			</div>
			<slot name="episodes"/>
		</div>
	</section>
	<!-- season-end -->
</template>

<script setup>
import MainSeasonItem from "./main-season-item.vue";

defineProps([
	'list',
	'id',
])

const emit = defineEmits([
	'season-change',
]);

function emitChange(data)
{
	emit('season-change', data );
}

</script>

<style scoped>

</style>