<template>
	<loader :status="state.status"/>
	<header-area/>
	<main-area :serials="state.serials" :seasons="state.season" :episodes="state.episodes" @main-area-loader-status="setLoadedStatus"/>
	<footer-area/>
</template>

<script setup>
import Loader from '../views/loader.vue';
import HeaderArea from '../views/header-area.vue';
import MainArea from '../views/main-area.vue';
import FooterArea from '../views/footer-area.vue';


import { reactive, onMounted } from 'vue'
import {Status} from "../enum/loader.js";
import SerialCollection from "../lib/collection/serial-collection.js";
import SeasonCollection from "../lib/collection/season-collection.js";
import EpisodeCollection from "../lib/collection/episode-collection.js";


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

function getSerials()
{
	const collection = new SerialCollection();

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
	const collection = new SeasonCollection();

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
	const collection = new EpisodeCollection();

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


onMounted(() => {

	getSerials()
		.then((serials) => {
			state.serials = serials;
			getSeasonByFilter({serialId: 1}).then((seasons) => {
				state.seasons = seasons;
				getEpisodesByFilter({serialId: 1, season: 5}).then((episodes) => {
					state.episodes = episodes;
					state.status = Status.NONE;
				})
			})
	})

})

</script>