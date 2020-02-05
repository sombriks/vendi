import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{ path: "/", redirect: "/test-panel" },
	{
		path: "/test-panel",
		component: _ =>
			import(/* webpackChunkName: "test-panel" */ "../views/TestPanel"),
	},
	{
		path: "/consulta",
		component: _ =>
			import(/* webpackChunkName: "consulta" */ "../views/Consulta"),
	},
	{
		path: "/operador",
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
