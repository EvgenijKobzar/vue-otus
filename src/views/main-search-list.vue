<template>
	<main>

		<!-- episode-area -->
		<section class="contact-area contact-bg" style="background-image: url(&quot;img/bg/movie_details_bg.jpg&quot;);">
			<div class="container">
				<div class="row">
					<div class="col-lg-8">
						<div class="movie-episode-wrap">
							<div class="episode-top-wrap">
								<div class="section-title">
									<span class="sub-title">ONLINE STREAMING</span>
									<h2 class="title">Найденные эпизоды</h2>
								</div>

							</div>
							<div class="episode-watch-wrap">
								<div class="accordion" id="accordionExample">
									<div class="card">
										<div class="card-header" id="headingOne">
											<button class="btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
												<span class="season">Результат</span>
												<span class="video-count">{{count}} эпизод(ов)</span>
											</button>
										</div>
										<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
											<div class="card-body">
												<ul>
													<template v-for="item in items">
														<li>
															<a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" class="popup-video">
																<i class="fas fa-play"></i> {{item.title}}
															</a>
															<span class="duration">
																<i class="far fa-clock"></i> {{item.duration}} Min</span>
															<p>{{item.description}}</p>
														</li>
													</template>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="episode-img">
							<img :src="srcImgSerial" alt="">
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- episode-area-end -->

	</main>
</template>

<script setup>
import {computed} from "vue";
import Type from "../lib/type.js";

const props = defineProps([
	'items',
]);

const count = computed(()=> props.items.length)
const srcImgSerial = computed(() => {
	const id = props.items.slice(-1)[0]?.serialId
	return Type.isNumber(id) ? getSrcByFileId(id):'';
})

function getSrcByFileId(id)
{
	return 'img/poster/serial_' + id +'.jpg';
}
</script>