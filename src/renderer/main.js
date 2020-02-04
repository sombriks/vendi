import Vue from "vue";

import { store } from "./store";
import { router } from "./routes";

import App from "./components/App";

new Vue({
	el: "#app",
	name: "vendi",
	store,
	router,
	render: r => r(App),
});
