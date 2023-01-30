import { createApp } from 'vue'
import Component from "./component.vue";
export default class Application
{
	constructor(id)
	{
		this.wrapper = document.getElementById(id);
		this.init()
			.then()
			.catch()
	}

	init()
	{
		return new Promise((resolve) =>
		{
			createApp(Component)
				.mount(this.wrapper);
			// Todo: resolve() как его тут вызвать? как можно подписаться на onMounted()
			resolve();
		});
	}

	#layout()
	{
		return this.wrapper;
	}
}