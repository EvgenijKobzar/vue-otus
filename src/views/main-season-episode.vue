<template>
	<div class="row tr-movie-active" style="position: relative; height: 1144.97px;">

		<main-season-episode-item :item="item" v-for="(item, index) in props.episodes" :key="item.id"
															style="position: absolute; top: 0px;" :style="eachTwo(index)"
		/>

		<div class="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer" style="position: absolute; left: 0%; top: 0px;">
			<div class="movie-item mb-60">
				<div class="movie-poster">
					<a href="movie-details.html"><img src="img/poster/sezon_1.jpg" alt=""></a>
				</div>
				<div class="movie-content">
					<div class="top">
						<h5 class="title"><a href="movie-details.html">Живи свободным или умри</a></h5>
						<span class="date">2013</span>
					</div>
					<div class="bottom">
						<ul>
							<li><span class="quality">hd</span></li>
							<li>
								<span class="duration"><i class="far fa-clock"></i> 45 min</span>
								<span class="rating"><i class="fas fa-thumbs-up"></i> 5</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer" style="position: absolute; left: 24.9624%; top: 0px;">
			<div class="movie-item mb-60">
				<div class="movie-poster">
					<a href="movie-details.html"><img src="img/poster/1/5_2.jpg" alt=""></a>
				</div>
				<div class="movie-content">
					<div class="top">
						<h5 class="title"><a href="movie-details.html">Мадригал</a></h5>
						<span class="date">2013</span>
					</div>
					<div class="bottom">
						<ul>
							<li><span class="quality">4k</span></li>
							<li>
								<span class="duration"><i class="far fa-clock"></i> 45 min</span>
								<span class="rating"><i class="fas fa-thumbs-up"></i> 5</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer" style="position: absolute; left: 50%; top: 0px;">
			<div class="movie-item mb-60">
				<div class="movie-poster">
					<a href="movie-details.html"><img src="img/poster/1/5_3.jpg" alt=""></a>
				</div>
				<div class="movie-content">
					<div class="top">
						<h5 class="title"><a href="movie-details.html">Опасные условия</a></h5>
						<span class="date">2013</span>
					</div>
					<div class="bottom">
						<ul>
							<li><span class="quality">hd</span></li>
							<li>
								<span class="duration"><i class="far fa-clock"></i> 45 min</span>
								<span class="rating"><i class="fas fa-thumbs-up"></i> 5</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer" style="position: absolute; left: 74.9624%; top: 0px;">
			<div class="movie-item mb-60">
				<div class="movie-poster">
					<a href="movie-details.html"><img src="img/poster/1/5_1.jpg" alt=""></a>
				</div>
				<div class="movie-content">
					<div class="top">
						<h5 class="title"><a href="movie-details.html">Пятьдесят один</a></h5>
						<span class="date">2013</span>
					</div>
					<div class="bottom">
						<ul>
							<li><span class="quality">8K</span></li>
							<li>
								<span class="duration"><i class="far fa-clock"></i> 45 min</span>
								<span class="rating"><i class="fas fa-thumbs-up"></i> 5</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div class="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer" style="position: absolute; left: 0%; top: 572px;">
			<div class="movie-item mb-60">
				<div class="movie-poster">
					<a href="movie-details.html"><img src="img/poster/sezon_5.jpg" alt=""></a>
				</div>
				<div class="movie-content">
					<div class="top">
						<h5 class="title"><a href="movie-details.html">Мертый груз</a></h5>
						<span class="date">2013</span>
					</div>
					<div class="bottom">
						<ul>
							<li><span class="quality">3D</span></li>
							<li>
								<span class="duration"><i class="far fa-clock"></i> 45 min</span>
								<span class="rating"><i class="fas fa-thumbs-up"></i> 5</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer" style="position: absolute; left: 24.9624%; top: 572px;">
			<div class="movie-item mb-60">
				<div class="movie-poster">
					<a href="movie-details.html"><img src="img/poster/sezon_6.jpg" alt=""></a>
				</div>
				<div class="movie-content">
					<div class="top">
						<h5 class="title"><a href="movie-details.html">Выкуп</a></h5>
						<span class="date">2013</span>
					</div>
					<div class="bottom">
						<ul>
							<li><span class="quality">hd</span></li>
							<li>
								<span class="duration"><i class="far fa-clock"></i> 45 min</span>
								<span class="rating"><i class="fas fa-thumbs-up"></i> 5</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer" style="position: absolute; left: 50%; top: 572px;">
			<div class="movie-item mb-60">
				<div class="movie-poster">
					<a href="movie-details.html"><img src="img/poster/sezon_7.jpg" alt=""></a>
				</div>
				<div class="movie-content">
					<div class="top">
						<h5 class="title"><a href="movie-details.html">Произнеси мое имя</a></h5>
						<span class="date">2013</span>
					</div>
					<div class="bottom">
						<ul>
							<li><span class="quality">4K</span></li>
							<li>
								<span class="duration"><i class="far fa-clock"></i> 45 min</span>
								<span class="rating"><i class="fas fa-thumbs-up"></i> 5</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer" style="position: absolute; left: 74.9624%; top: 572px;">
			<div class="movie-item mb-60">
				<div class="movie-poster">
					<a href="movie-details.html"><img src="img/poster/sezon_8.jpg" alt=""></a>
				</div>
				<div class="movie-content">
					<div class="top">
						<h5 class="title"><a href="movie-details.html">Летящий над всем</a></h5>
						<span class="date">2013</span>
					</div>
					<div class="bottom">
						<ul>
							<li><span class="quality">4K</span></li>
							<li>
								<span class="duration"><i class="far fa-clock"></i> 45 min</span>
								<span class="rating"><i class="fas fa-thumbs-up"></i> 5</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script setup>
import MainSeasonEpisodeItem from "./main-season-episode-item.vue";

const props = defineProps([
	'episodes',
])

function eachTwo(inx)
{
	if ( inx % 4 == 0 )
	{
		return {left: '0%', top: '0px'}
	}
	else if ( inx % 2 == 0 )
	{
		return {left: '24.9624%', top: '572px'}
	}
	else if ( inx % 3 == 0 )
	{
		return {left: '50%', top: '572px'}
	}
	else
	{
		return {left: '74.9624%', top: '572px'}
	}
}

</script>

<style scoped>

</style>