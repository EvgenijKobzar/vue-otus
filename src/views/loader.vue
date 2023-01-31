<template>
	<div id="preloader" v-show="isWait()">
		<div id="loading-center">
			<div id="loading-center-absolute">
				<img src="img/preloader.svg" alt="">
			</div>
		</div>
	</div>
</template>

<script setup>
import {Status} from "../enum/loader.js";

const state = defineProps(['status'])

function isWait()
{
	return state.status === Status.WAIT
}
</script>

<style scoped>

</style>