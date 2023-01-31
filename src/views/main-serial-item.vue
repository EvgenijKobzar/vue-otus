<template>
	<div class="col-xl-3 col-lg-4 col-sm-6">
		<div class="movie-item mb-50">
			<div class="movie-poster">
				<a href="movie-details.html"><img :src="getSrc" alt=""></a>
			</div>
			<div class="movie-content">
				<div class="top">
					<h5 class="title"><a href="movie-details.html">{{ props.item.title }}</a></h5>
					<span class="date">{{ props.item.productionPeriod }}</span>
				</div>
				<div class="bottom">
					<ul>
						<li><span class="quality">{{ props.item.quality }}</span></li>
						<li>
							<span class="duration"><i class="far fa-clock"></i> {{ props.item.duration }} мин</span>
							<span class="rating"><i class="fas fa-thumbs-up"></i> {{ props.item.rating }}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['item'])



function getSrcByFileId(id)
{
	return 'img/poster/ucm_poster0' + id +'.jpg';
}

const getSrc = computed(() => {
	return getSrcByFileId(props.item.fileId);
})
</script>

<style scoped>

</style>