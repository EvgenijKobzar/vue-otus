<template>
	<button data-filter="*" @click="click">{{item.title}}</button>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps(['model'])

const emit = defineEmits([
	'season-change-item',
]);

const item = computed(() => {
	return props.model.getFields();
})
function click()
{
	emit('season-change-item', {
		serial: {
			id: props.model.getField('serialId')
		},
		season: {
			id: props.model.getId()
		}
	});
}
</script>
