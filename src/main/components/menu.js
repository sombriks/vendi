import rotas from "../../common/rotas";

const nav = rota => (menuItem, BrowserWindow, event) => {
	BrowserWindow.webContents.send("navigateTo", rota);
};

export default [
	{
		label: "Início",
		submenu: [
			{ label: rotas.PAINEL_TESTE.label, click: nav(rotas.PAINEL_TESTE) },
			{ label: rotas.OPERADOR_SEL.label, click: nav(rotas.OPERADOR_SEL) },
			{ label: "Consulta de produto" },
			{ label: "Saída de operador" },
			{ label: "Reforço de caixa" },
			{ label: "Sangria" },
		],
	},
	{
		label: "Vendas",
		submenu: [
			{ label: "Abertura de caixa" },
			{ label: "Consulta de cupom" },
			{ label: "Cancelar item" },
			{ label: "Cancelar cupom" },
		],
	},
];
