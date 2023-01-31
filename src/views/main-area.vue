<template>
	<!-- main-area -->
	<main>
		<main-banner/>
		<main-serial :serials="props.serials"  @serial-loader-status="emitLoadedStatus"/>
		<main-season :season="props.season"/>
		<main-letter/>
	</main>
	<!-- main-area-end -->
</template>

<script setup>
import MainBanner from '../views/main-banner.vue';
import MainSerial from '../views/main-serial.vue';
import MainSeason from '../views/main-season.vue';
import MainLetter from '../views/main-newsletter.vue';

const props = defineProps([
		'serials',
		'season',
])

const emit = defineEmits([
	'main-area-loader-status'
])

function emitLoadedStatus(data)
{
	emit('main-area-loader-status', data );
}

</script>

<style scoped>

</style>