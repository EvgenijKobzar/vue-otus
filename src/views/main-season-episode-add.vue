<template>
	<section class="contact-area contact-bg" style="background-image: url(&quot;img/bg/movie_details_bg.jpg&quot;);">
		<div class="container">
			<div class="row">
				<div class="col-xl-8 col-lg-7">
					<div class="contact-form-wrap">
						<div class="widget-title mb-50">
							<h5 class="title">Новый эпизод</h5>
						</div>
						<div class="contact-form">
							<form action="#">
								<div class="row"><div class="col-md-6">
									<select v-model="state.fields.serialId"
													style="
													background: transparent;
													border: none;
													color: #fff;
													text-transform: uppercase;
													font-weight: 700;
													outline: none;">
										<option value="100" style="color: #1a1a1e;" disabled >Сериалы * </option>
										<option style="color: #1a1a1e;" v-for="item in serials" :value="item.id">{{item.title}}</option>
									</select><br>
								</div></div>

								<div class="row"><div class="col-md-6">&nbsp;</div></div>

								<div class="row"><div class="col-md-6">
									<select v-model="state.fields.seasonId"
													style="
													background: transparent;
													border: none;
													color: #fff;
													text-transform: uppercase;
													font-weight: 700;
													outline: none;">
										<option value="100" style="color: #1a1a1e;" disabled >Сезоны * </option>
										<option style="color: #1a1a1e;" v-for="item in seasonList" :value="item.id">{{item.title}}</option>
									</select><br>
								</div></div>

								<div class="row"><div class="col-md-6">&nbsp;</div></div>

								<div class="row">
									<div class="col-md-6">
										<input type="text" placeholder="Название эпизода *" v-model="state.fields.title">
									</div>
									<div class="col-md-6">
										<input type="text" placeholder="Рейтинг" v-model="state.fields.rating">
									</div>
								</div>
								<input type="text" placeholder="Продолжительность" v-model="state.fields.duration">
								<textarea name="message" placeholder="Описание..." v-model="state.fields.description"></textarea>
								<button class="btn" @click.prevent="add">Добавить</button>
							</form>
						</div>
					</div>
				</div>
				<main-add-information/>
			</div>
		</div>
	</section>
</template>

<script setup>
import {computed, reactive} from "vue";
import MainAddInformation from "./main-add-information.vue";

const state = reactive({
	fields: {
		serialId: 100,
		seasonId: 100,
		active: 'Y',
		fileId: '',
		src: '',
		duration: '',
		description: '',
		sort: 1000,
		rating: '',
		quality: '8K',
		productionDate: '2023',
	}
})

const emit = defineEmits([
	'episode-create',
]);
const props = defineProps([
	'serials',
	'seasons',
]);

const seasonList = computed(() => {
	const serialId = state.fields.serialId;

	const list = [];
	for (let season of props.seasons)
	{
		if (season.serialId === serialId)
		{
			list.push(season)
		}
	}
	return list;
})


function add()
{
	emit('episode-create', state.fields);
}
</script>

<style scoped>

</style>