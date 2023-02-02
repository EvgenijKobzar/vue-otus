<template>
	<div class="row tr-movie-active" :style="{position: 'relative', height: getMaxTop(props.episodes) + 'px'}">

		<template v-for="col in getColIndexes(props.episodes)">
			<main-season-episode-item :item="props.episodes[col.inx]" :key="props.episodes[col.inx].id"
																:style="{position: 'absolute', left: '0%', top: col.top + 'px'}" v-if="col.num === 0"/>
			<main-season-episode-item :item="props.episodes[col.inx]" :key="props.episodes[col.inx].id"
																:style="{position: 'absolute', left: '24.9624%', top: col.top + 'px'}" v-else-if="col.num === 1"/>
			<main-season-episode-item :item="props.episodes[col.inx]" :key="props.episodes[col.inx].id"
																:style="{position: 'absolute', left: '50%', top: col.top + 'px'}" v-else-if="col.num === 2"/>
			<main-season-episode-item :item="props.episodes[col.inx]" :key="props.episodes[col.inx].id"
																:style="{position: 'absolute', left: '74.9624%', top: col.top + 'px'}" v-else-if="col.num === 3"/>
		</template>
	</div>
</template>

<script setup>
import MainSeasonEpisodeItem from "./main-season-episode-item.vue";
import {computed} from "vue";

const topInc = 572;

const props = defineProps([
	'episodes',
])

function getColIndexes(list)
{
	const result = []
	let num = 0;
	let top = 0;

	Object.keys(list).forEach((inx) => {

		if (num > 3)
		{
			num = 0;
			top = top + topInc;
		}

		result.push({inx, num, top});
		num++;
	});
	return result;
}

function getMaxTop(list)
{
	return getColIndexes(list).slice(-1)[0]?.top + topInc
}

</script>

<style scoped>

</style>