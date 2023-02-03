<template>
	<loader :status="state.status"/>
	<header-area/>
	<main-area :serials="state.serials" :seasons="state.seasons" :episodes="state.episodes"		v-if="state.status === Status.NONE"
						 @main-area-serial-change="refresh"
						 @main-area-season-change="refresh"
	/>
	<footer-area/>
</template>

<script setup>
import Loader from '../views/loader.vue';
import HeaderArea from '../views/header-area.vue';
import MainArea from '../views/main-area.vue';
import FooterArea from '../views/footer-area.vue';


import { reactive, onMounted } from 'vue'
import {Status} from "../enum/loader.js";
import CollectionSerial from "../lib/collection/collection-serial.js";
import CollectionSeason from "../lib/collection/collection-season.js";
import CollectionEpisode from "../lib/collection/collection-episode.js";
import Type from "../lib/type.js";

const state = reactive({
	status: Status.WAIT,
	serials: {},
	seasons: {},
	episodes: {},
})

const collectionSerial = new CollectionSerial();
const collectionSeason = new CollectionSeason();
const collectionEpisode = new CollectionEpisode();

function refresh(data)
{
	const serialId = data.serial.id;
	const seasonId = data.season?.id;

	state.status = Status.WAIT;
	return init({
		serial: {id : serialId},
		season: {id : seasonId},
	})
	.then(() => state.status = Status.NONE)
}
function init(options)
{
	return new Promise((resolve) => {

		const episodeFilter = Type.isNil(options.season.id) ? {serialId: options.serial.id} : {seasonId: options.season.id};

		collectionSerial.refreshByFilter()
		.then(() => collectionSeason.refreshByFilter({serialId: options.serial.id})
		.then(() => collectionEpisode.refreshByFilter(episodeFilter)
		.then(() => {

			state.serials = collectionSerial.getModels();
			state.seasons = collectionSeason.getModels();
			state.episodes = collectionEpisode.getModels();

			resolve();
		})))
	})
}

onMounted(() => {
	return init({
		serial: { id: 1 },
		season: { id: 5 },
	})
	.then(() => state.status = Status.NONE )
})

</script>