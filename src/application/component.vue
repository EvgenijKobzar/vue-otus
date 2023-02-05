<template>
	<loader :status="state.status"/>
	<header-area
								@header-season-add="addSeason"
								@header-episode-add="addEpisode"
	/>
	<template v-if="state.page === Page.ADD_SEASON">
		<main-season-add :serials="state.serials"
										 v-if = "state.status === Status.NONE"
										 @season-create="createSeason"
		/>
	</template>
	<template v-else-if="state.page === Page.ADD_EPISODE">
		<main-season-episode-add :serials="state.serials" :seasons="state.seasons"
										 v-if = "state.status === Status.NONE"
										 @episode-create="createEpisode"
		/>
	</template>
	<template v-else>
		<main-area :serials="state.serials" :seasons="state.seasons" :episodes="state.episodes"
							 v-if="state.status === Status.NONE && state.page === Page.INDEX"
							 @main-area-serial-change="refresh"
							 @main-area-season-change="refresh"
							 @main-area-episode-detail="detail"
		/>
		<main-details :serials="state.serials" :seasons="state.seasons" :episodes="state.episodes" :id="state.episodeId"
									@main-area-serial-change="refresh"
									v-if="state.status === Status.NONE && state.page === Page.DETAIL"
		/>
	</template>
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
import MainDetails from "../views/main-details.vue";
import {Page} from "../enum/page.js";
import MainSeasonAdd from "../views/main-season-add.vue";
import MainSeasonEpisodeAdd from "../views/main-season-episode-add.vue";

const state = reactive({
	status: Status.WAIT,
	page: Page.INDEX,
	episodeId: null,
	serials: {},
	seasons: {},
	episodes: {},
})

const collectionSerial = new CollectionSerial();
const collectionSeason = new CollectionSeason();
const collectionEpisode = new CollectionEpisode();

function createEpisode(data)
{
	state.status = Status.WAIT;
	state.page = Page.INDEX;

	return collectionEpisode.create(data)
	.then(() => refresh({serial:{id: data.serialId}}))
}
function createSeason(data)
{
	state.status = Status.WAIT;
	state.page = Page.INDEX;

	return collectionSeason.create(data)
		.then(() => refresh({serial:{id: data.serialId}}))
}
function addSeason()
{
	state.status = Status.WAIT;
	state.page = Page.ADD_SEASON;

	collectionSerial.clear();

	return collectionSerial.refreshByFilter()
	.then(() => {
		state.serials = collectionSerial.toArray();
		state.status = Status.NONE;
	})

	return init({
		serial: {id : serialId},
		season: {id : seasonId},
	})
	.then(() => state.status = Status.NONE)
}
function addEpisode()
{
	state.status = Status.WAIT;
	state.page = Page.ADD_EPISODE;

	collectionSerial.clear();
	collectionSeason.clear();

	return collectionSerial.refreshByFilter()
	.then(() => {
		collectionSeason.refreshByFilter().then(() => {
			state.serials = collectionSerial.toArray();
			state.seasons = collectionSeason.toArray();
			state.status = Status.NONE;
		})
	})

	return init({
		serial: {id : serialId},
		season: {id : seasonId},
	})
	.then(() => state.status = Status.NONE)
}

function detail(data)
{
	state.episodeId = data.episode.id;
	state.page = Page.DETAIL;
}
function refresh(data)
{
	collectionSerial.clear();
	collectionSeason.clear();
	collectionEpisode.clear();

	const serialId = data.serial.id;
	const seasonId = data.season?.id;

	state.status = Status.WAIT;
	state.page = Page.INDEX;

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

			state.serials = collectionSerial.toArray();
			state.seasons = collectionSeason.toArray();
			state.episodes = collectionEpisode.toArray();

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