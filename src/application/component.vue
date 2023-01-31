<template>
	<loader :status="state.status"/>
	<header-area/>
	<main-area @main-area-loader-status="setLoadedStatus"/>
	<footer-area/>
</template>

<script setup>
import Loader from '../views/loader.vue';
import HeaderArea from '../views/header-area.vue';
import MainArea from '../views/main-area.vue';
import FooterArea from '../views/footer-area.vue';



import { reactive, onMounted } from 'vue'
import {Status} from "../enum/loader.js";


const state = reactive({
	status: Status.NONE
})

function setLoadedStatus(data)
{console.log('data', data);
	state.status = Object.values(Status).includes(data.status) ? data.status: Status.NONE
}

onMounted(() => {})

</script>