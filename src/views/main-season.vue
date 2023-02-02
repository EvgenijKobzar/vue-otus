<template>
	<!-- season -->
	<section class="top-rated-movie tr-movie-bg" data-background="img/bg/tr_movies_bg.jpg" style="background-image: url(&quot;img/bg/tr_movies_bg.jpg&quot;);">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-8">
					<div class="section-title text-center mb-50">
						<span class="sub-title">ONLINE STREAMING</span>
						<h2 class="title">{{serialName}}</h2>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-lg-8">
					<div class="tr-movie-menu-active text-center">
						<main-season-item :class="{'active': item.id === selectedId}" :item="item" v-for="item in props.seasons" :key="item.id"
															@season-change-item="emitChange"
						/>
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
import {computed, onMounted} from "vue";
import Type from "../lib/type.js";
const props = defineProps([
	'seasons',
	'serials',
	'selectedId',
])

const emit = defineEmits([
	'season-change',
]);

function emitChange(data)
{
	emit('season-change', data );
}

const serialName = computed(() => {

	const season = props.seasons.find((item) => item.id === props.selectedId);


	if (Type.isNil(season) === false)
	{
		return props.serials.find((serial) => serial.id === season.serialId)?.title;
	}

	return '';
})

onMounted(() => {
	if (Type.isNil(props.selectedId) === false && Type.isNil(props.seasons) === false)
	{
		let season = props.seasons.find((item) => item.id === props.selectedId);
		console.log('season', season);


		if (Type.isNil(seasons) === false)
		{

		}
		// {
		// 	return props.serials.find((serial) => serial.id === season.serialId)?.title
		// }
	}
})

</script>

<style scoped>

</style>