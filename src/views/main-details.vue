<template>
	<main-details-area :item="episode"
										 @main-details-area-delete="deleteItem"
	/>
	<main-serial :list="serials"
							 @serial-change="emitSerialChange"
	/>
	<main-letter/>
</template>

<script setup>
import MainSerial from "./main-serial.vue";
import MainLetter from './main-newsletter.vue';
import MainDetailsArea from "./main-details-area.vue";
import {computed} from "vue";

const props = defineProps([
	'id',
	'serials',
	'episodes',
])

const emit = defineEmits([
	'main-area-serial-change',
	'main-details-delete',
])

const episode = computed(() => {
	const id = props.id

	for (let item of props.episodes)
	{
		if (item.id === id)
		{
			return item;
		}
	}

	return {};
})
function deleteItem(data)
{
	emit('main-details-delete', data );
}
function emitSerialChange(data)
{
	emit('main-area-serial-change', data );
}
</script>