<template>
	<!-- main-area -->
	<main>
		<main-banner/>
		<main-serial :serials="props.serials"
								 @serial-change="emitSerialChange"
		/>
		<main-season :seasons="props.seasons" :selectedId="seasonId" :serials="props.serials"
								 @season-change="emitSeasonChange"
		>
			<template v-slot:episodes>
				<main-season-episode :episodes="props.episodes"/>
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

const seasonId = computed(() => {
	return props.episodes.slice(-1)[0]?.seasonId
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