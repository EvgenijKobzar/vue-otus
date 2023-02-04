<template>
	<!-- main-area -->
	<main>
		<main-banner/>
		<main-serial :list="serials"
								 @serial-change="emitSerialChange"
		/>
		<main-season :list="seasons" :id="seasonId"
								 @season-change="emitSeasonChange"
		>
			<template v-slot:serial-name>{{ serialName }}</template>-->
			<template v-slot:episodes>
				<main-season-episode :list="episodes"/>
			</template>
		</main-season>
		<main-letter/>
	</main>
	<!-- main-area-end -->
</template>

<script setup>
import MainBanner from '../views/main-banner.vue';
import MainSerial from '../views/main-serial.vue';
import MainSeason from '../views/main-season.vue';
import MainLetter from '../views/main-newsletter.vue';
import MainSeasonEpisode from "./main-season-episode.vue";
import {computed} from "vue";

const props = defineProps([
		'serials',
		'seasons',
		'episodes',
])

const emit = defineEmits([
	'main-area-serial-change',
	'main-area-season-change',
])

const serialName = computed(() => {
	const id = props.episodes.slice(-1)[0]?.serialId

	for (let item of props.serials)
	{
		if (item.id === id)
		{
			return item.title
		}
	}

	return '';
})

const seasonId = computed(() => {
	return props.episodes.slice(-1)[0]?.seasonId;
})

function emitSerialChange(data)
{
	emit('main-area-serial-change', data );
}
function emitSeasonChange(data)
{
	emit('main-area-season-change', data );
}
</script>

<style scoped>

</style>