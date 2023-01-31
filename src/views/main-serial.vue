<template>
	<!-- serial-area -->
	<section class="ucm-area ucm-bg" data-background="img/bg/ucm_bg.jpg" style="background-image: url(&quot;img/bg/ucm_bg.jpg&quot;);">
		<div class="ucm-bg-shape" data-background="img/bg/ucm_bg_shape.png" style="background-image: url(&quot;img/bg/ucm_bg_shape.png&quot;);"></div>
		<div class="container">
			<div class="row align-items-end mb-55">
				<div class="col-lg-6">
					<div class="section-title text-center text-lg-left">
						<span class="sub-title">ONLINE STREAMING</span>
						<h2 class="title">Сериалы</h2>
					</div>
				</div>

			</div>
			<div class="row justify-content-center">
				<main-serial-item :item="item" v-for="item in props.serials" :key="item.id"/>
			</div>

		</div>
	</section>
	<!-- serial-area-end -->
</template>

<script setup>
import {reactive, onMounted, onBeforeMount} from 'vue'
import SerialCollection from "../lib/collection/serial-collection.js";
import MainSerialItem from "./main-serial-item.vue";
import {Status} from "../enum/loader.js";
import SeasonCollection from "../lib/collection/season-collection";
import EpisodeCollection from "../lib/collection/episode-collection.js";

const props = defineProps([
		'serials',
])

// const state = reactive({
// 	items:
// })
const emit = defineEmits([
		'serial-loader-status'
])

// const collection = new SerialCollection();
//
// onBeforeMount( () => {
// 	emit('serial-loader-status', {status: Status.WAIT});
// })
//
// onMounted(() => {
// 	return new Promise((resolve, reject) => {
//
// 		collection.refreshByFilter()
// 			.then(() => {
//
// 				const list = [];
// 					for (let model of collection.getModels())
// 					{
// 						list.push(model.getFields())
// 					}
//
// 				state.items = list
//
// 				emit('serial-loader-status', {status: Status.NONE});
//
// 				resolve();
// 			});
// 	})
// });
</script>

<style scoped>

</style>