<template>
	<button data-filter="*" @click="click">{{props.item.title}}</button>
</template>

<script setup>
const props = defineProps(['item'])

const emit = defineEmits([
	'season-change-item',
]);

function click()
{
	emit('season-change-item', { serial: { id: props.item.serialId }, season: { id: props.item.id }});
}
</script>
