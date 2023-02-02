<template>
	<button class="active" data-filter="*">{{props.item.title}}</button>
</template>

<script setup>
const props = defineProps(['item'])
</script>
