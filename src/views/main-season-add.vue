<template>
	<section class="contact-area contact-bg" style="background-image: url(&quot;img/bg/movie_details_bg.jpg&quot;);">
		<div class="container">
			<div class="row">
				<div class="col-xl-8 col-lg-7">
					<div class="contact-form-wrap">
						<div class="widget-title mb-50">
							<h5 class="title">Новый сезон</h5>
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

								<div class="row">
									<div class="col-md-6">
										<input type="text" placeholder="Название сезона *" v-model="state.fields.title">
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
				<div class="col-xl-4 col-lg-5">
					<div class="widget-title mb-50">
						<h5 class="title">Information</h5>
					</div>
					<div class="contact-info-wrap">
						<p><span>Find solutions :</span> to common problems, or get help from a support agent industry's standard .</p>
						<div class="contact-info-list">
							<ul>
								<li>
									<div class="icon"><i class="fas fa-map-marker-alt"></i></div>
									<p><span>Address :</span> W38 Park Road New York</p>
								</li>
								<li>
									<div class="icon"><i class="fas fa-phone-alt"></i></div>
									<p><span>Phone :</span> (09) 123 854 365</p>
								</li>
								<li>
									<div class="icon"><i class="fas fa-envelope"></i></div>
									<p><span>Email :</span> support@movflx.com</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import {reactive} from "vue";

const state = reactive({
	fields: {
		serialId: 100,
		title: null,
		rating: null,
		duration: null,
		description: null,
		active: 'Y',
		sort: 1000
	}
})

const emit = defineEmits([
	'season-create',
]);
const props = defineProps([
	'serials',
]);

function add()
{
	emit('season-create', state.fields);
}
</script>

<style scoped>

</style>