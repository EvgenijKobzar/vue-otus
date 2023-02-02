<template>
	<loader :status="state.status"/>
	<header-area/>
	<main-area :serials="state.serials" :seasons="state.seasons" :episodes="state.episodes"
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
	serials: [],
	seasons: [],
	episodes: [],
})

function setLoadedStatus(data)
{
	state.status = Object.values(Status).includes(data.status) ? data.status: Status.NONE
}

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

function getSerials()
{
	const collection = new CollectionSerial();

	return new Promise((resolve, reject) => {

		collection.refreshByFilter()
		.then(() => {

			const list = [];
			for (let model of collection.getModels())
			{
				list.push(model.getFields())
			}

			resolve(list);
		});
	})
}
function getSeasonByFilter(filter)
{
	const collection = new CollectionSeason();

	return new Promise((resolve, reject) => {

		collection.refreshByFilter(filter)
		.then(() => {

			const list = [];
			for (let model of collection.getModels())
			{
				list.push(model.getFields())
			}

			resolve(list);
		});
	})
}
function getEpisodesByFilter(filter)
{
	const collection = new CollectionEpisode();

	return new Promise((resolve, reject) => {

		collection.refreshByFilter(filter)
		.then(() => {

			const list = [];
			for (let model of collection.getModels())
			{
				list.push(model.getFields())
			}

			resolve(list);
		});
	})
}

function init(options)
{
	return new Promise((resolve, reject) => {

		const episodeFilter = Type.isNil(options.season.id) ? {serialId: options.serial.id} : {seasonId: options.season.id};

		getSerials()
		.then((serials) => {
			state.serials = serials;
			getSeasonByFilter({serialId: options.serial.id}).then((seasons) => {
				state.seasons = seasons;
				getEpisodesByFilter(episodeFilter).then((episodes) => {
					state.episodes = episodes;
					resolve()
				})
			})
		})
	})
}

onMounted(() => {
	return init({
		serial: {id:1},
		season: {id:5},
	})
	.then(() => state.status = Status.NONE)
})

</script>