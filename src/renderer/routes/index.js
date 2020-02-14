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
		path: rotas.CONSULTA_PRODUTO.path,
		component: _ =>
			import(/* webpackChunkName: "consulta-produto" */ "../views/ConsultaProduto"),
	},
	{
		path: rotas.ENTRADA_OPERADOR.path,
		component: _ =>
			import(/* webpackChunkName: "entrada-operador" */ "../views/EntradaOperador"),
	},
	{
		path: rotas.SAIDA_OPERADOR.path,
		component: _ =>
			import(/* webpackChunkName: "saida-operador" */ "../views/SaidaOperador"),
	},
	{
		path: rotas.REFORCO_CAIXA.path,
		component: _ =>
			import(/* webpackChunkName: "reforco-caixa" */ "../views/ReforcoCaixa"),
	},
	{
		path: rotas.SANGRIA.path,
		component: _ =>
			import(/* webpackChunkName: "sangria" */ "../views/Sangria"),
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
