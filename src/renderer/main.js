import Vue from "vue";

import { store } from "./store";

new Vue({
	el: "#app",
	store,
	template: `<div>{{$store.state.hello}} Hello from {{vue}}</div>`,
	data: {
		vue: "the other side!",
	},
});
