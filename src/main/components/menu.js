import rotas from "../../common/rotas";
import eventos from "../../common/eventos";

const nav = rota => (menuItem, BrowserWindow, event) =>
	BrowserWindow.webContents.send(eventos.navigateTo.name, rota);

export default [
	{
		label: "Início",
		submenu: [
			{ label: rotas.PAINEL_TESTE.label, click: nav(rotas.PAINEL_TESTE) },
			{
				label: rotas.ENTRADA_OPERADOR.label,
				click: nav(rotas.ENTRADA_OPERADOR),
			},
			{
				label: rotas.CONSULTA_PRODUTO.label,
				click: nav(rotas.CONSULTA_PRODUTO),
			},
			{
				label: rotas.SAIDA_OPERADOR.label,
				click: nav(rotas.SAIDA_OPERADOR),
			},
			{
				label: rotas.REFORCO_CAIXA.label,
				click: nav(rotas.REFORCO_CAIXA),
			},
			{ label: rotas.SANGRIA.label, click: nav(rotas.SANGRIA) },
		],
	},
	{
		label: "Vendas",
		submenu: [
			{
				label: rotas.ABERTURA_CAIXA.label,
				click: nav(rotas.ABERTURA_CAIXA),
			},
			{
				label: rotas.CONSULTA_CUPOM.label,
				click: nav(rotas.CONSULTA_CUPOM),
			},
			{ label: rotas.CANCELA_ITEM.label, click: nav(rotas.CANCELA_ITEM) },
			{
				label: rotas.CANCELA_CUPOM.label,
				click: nav(rotas.CANCELA_CUPOM),
			},
		],
	},
];
