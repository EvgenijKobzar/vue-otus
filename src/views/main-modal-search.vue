<template>
	<div class="modal fade show" id="search-modal" tabindex="-1" style="padding-right: '17px'; display: block;" aria-modal="true" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<form>
					<input v-model="state.text" type="text" placeholder="Поиск по описанию эпизодов ...">
					<button @click.prevent="searchList"><i class="fas fa-search"></i></button>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
import {reactive} from "vue";

const emit = defineEmits([
	'search-list',
]);

const state = reactive({
	text: null
})
function searchList()
{
	emit('search-list', state.text);
}
</script>

<style scoped>

</style>