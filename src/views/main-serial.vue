<template>
	<!-- serial-area -->
	<section class="ucm-area ucm-bg" data-background="img/bg/ucm_bg.jpg" style="background-image: url(&quot;img/bg/ucm_bg.jpg&quot;);">
		<div class="ucm-bg-shape" data-background="img/bg/ucm_bg_shape.png" style="background-image: url(&quot;img/bg/ucm_bg_shape.png&quot;);"></div>
		<div class="container">
			<div class="row align-items-end mb-55">
				<div class="col-lg-6">
					<div class="section-title text-center text-lg-left">
						<span class="sub-title">ONLINE STREAMING</span>
						<h2 class="title">Сериалы</h2>
					</div>
				</div>

			</div>
			<div class="row justify-content-center">
				<main-serial-item :item="item" v-for="item in props.serials" :key="item.id"
													@serial-change-item="emitChange"/>
			</div>

		</div>
	</section>
	<!-- serial-area-end -->
</template>

<script setup>
import MainSerialItem from "./main-serial-item.vue";

const props = defineProps([
		'serials',
])

const emit = defineEmits([
		'serial-change',
]);

function emitChange(data)
{
	emit('serial-change', data );
}

</script>

<style scoped>

</style>