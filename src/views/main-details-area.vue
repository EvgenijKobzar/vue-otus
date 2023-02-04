<template>
	<section class="movie-details-area" style="background-image: url(&quot;img/bg/movie_details_bg.jpg&quot;);">
		<div class="container">
			<div class="row align-items-center position-relative">
				<div class="col-xl-3 col-lg-4">
					<div class="movie-details-img">
						<img :src="getSrc" alt="{{item.title}}" style="width: 303px;">
						<a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" class="popup-video"><img src="img/images/play_icon.png" alt=""></a>
					</div>
				</div>
				<div class="col-xl-6 col-lg-8">
					<div class="movie-details-content">
						<h5>Новая серия</h5>
						<h2>{{ item.title }}</h2>
						<div class="banner-meta">
							<ul>
								<li class="quality">
									<span>Pg 18</span>
									<span>hd</span>
								</li>

								<li class="release-time">
									<span><i class="far fa-calendar-alt"></i></span>
									<span><i class="far fa-clock"></i> {{ item.duration }} мин</span>
								</li>
							</ul>
						</div>
						<p>{{item.description}}</p>
						<div class="movie-details-prime">
							<ul>
								<li class="share"><a href="#"><i class="fas fa-share-alt"></i> Share</a></li>
								<li class="streaming">
									<h6>Prime Video</h6>
									<span>Streaming Channels</span>
								</li>
								<li class="watch"><a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" class="btn popup-video"><i class="fas fa-play"></i> Смотерть</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="movie-details-btn">
					<a href="img/poster/movie_details_img.jpg" class="download-btn" download="">Скачать <img src="fonts/download.svg" alt=""></a>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import {computed} from "vue";
import Type from "../lib/type.js";

const props = defineProps([
	'item',
])
const getSrc = computed(() => {
	return getSrcByFileId(props.item.serialId, props.item.seasonId, props.item.fileId);
})

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
</script>