import rotas from "../../common/rotas";

const nav = rota => (menuItem, BrowserWindow, event) =>
  BrowserWindow.webContents.send("navigateTo", rota);

export default [
  {
    label: "Início",
    submenu: [
      { label: rotas.PAINEL_TESTE.label, click: nav(rotas.PAINEL_TESTE) },
      {
        label: rotas.ENTRADA_OPERADOR.label,
        click: nav(rotas.ENTRADA_OPERADOR)
      },
      {
        label: rotas.CONSULTA_PRODUTO.label,
        click: nav(rotas.CONSULTA_PRODUTO)
      },
      { label: rotas.SAIDA_OPERADOR.label, click: nav(rotas.SAIDA_OPERADOR) },
      { label: rotas.REFORCO_CAIXA.label, click: nav(rotas.REFORCO_CAIXA) },
      { label: rotas.SANGRIA.label, click: nav(rotas.SANGRIA) }
    ]
  },
  {
    label: "Vendas",
    submenu: [
      { label: "Abertura de caixa" },
      { label: "Consulta de cupom" },
      { label: "Cancelar item" },
      { label: "Cancelar cupom" }
    ]
  }
];
