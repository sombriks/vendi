import Vue from "vue";
import VueRouter from "vue-router";

import rotas from "../../common/rotas";
import { ipcRenderer } from "electron";

Vue.use(VueRouter);

const routes = [
	{ path: "/", redirect: rotas.PAINEL_TESTE.path },
	{
		path: rotas.PAINEL_TESTE.path,
		component: _ =>
			import(/* webpackChunkName: "test-panel" */ "../views/TestPanel"),
	},
	{
		path: "/consulta",
		component: _ =>
			import(/* webpackChunkName: "consulta" */ "../views/Consulta"),
	},
	{
		path: rotas.OPERADOR_SEL.path,
		component: _ =>
			import(/* webpackChunkName: "operador" */ "../views/Operador"),
	},
	{
		path: "/venda",
		component: _ =>
			import(/* webpackChunkName: "venda" */ "../views/Venda"),
	},
];

export const router = new VueRouter({
	mode: "hash",
	routes,
});

ipcRenderer.on("navigateTo", (ev, rota) => {
	router.push(rota.path);
});
