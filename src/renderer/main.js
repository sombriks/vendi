import Vue from "vue";

import { store } from "./store";
import { router } from "./routes";

import App from "./components/App";

import { Menu } from "electron";

import menu from "../main/components/menu";

if (module.hot) {
  module.hot.accept();
}

new Vue({
	el: "#app",
	name: "vendi",
	store,
	router,
	render: r => r(App),
});
