<template>
		<div class="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer" style="position: absolute;">
			<div class="movie-item mb-60" @click="click">
				<div class="movie-poster">
					<a href="#"><img :src="getSrc" alt=""></a>
				</div>
				<div class="movie-content">
					<div class="top">
						<h5 class="title"><a href="#">{{ props.item.title }}</a></h5>
						<span class="date">{{ props.item.productionDate }}</span>
					</div>
					<div class="bottom">
						<ul>
							<li><span class="quality">{{ props.item.quality }}</span></li>
							<li>
								<span class="duration"><i class="far fa-clock"></i> {{ props.item.duration }} мин</span>
								<span class="rating"><i class="fas fa-thumbs-up"></i> {{ props.item.rating }} </span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
</template>

<script setup>
import { computed } from 'vue'
import Type from "../lib/type.js";

const props = defineProps(['item'])

function getSrcByFileId(serialId, seasonId, episodeId)
{
	if(Type.isNil(episodeId) || Type.isNil(seasonId))
	{
		return 'img/poster/serial_0.jpg';
	}
	else
	{
		return 'img/poster/' + serialId +'/'+ seasonId + '_' + episodeId + '.jpg';
	}
}

const getSrc = computed(() => {
	return getSrcByFileId(props.item.serialId, props.item.seasonId, props.item.fileId);
})

const emit = defineEmits([
	'episode-detail-item',
]);

function click()
{
	emit('episode-detail-item', {
		episode: {
			id: props.item.id
		},
	});
}
</script>

<style scoped>

</style>