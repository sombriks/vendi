import os from "os";
import {app, BrowserWindow, ipcMain, Menu} from "electron";
import * as path from "path";
import {format as formatUrl} from "url";
import {knex} from "./database";

import menu from "./components/menu";

import eventos from "../common/eventos";

// in main/index.js, renderer/index.js or in both
if (module.hot) {
	module.hot.accept();
}

//
Menu.setApplicationMenu(Menu.buildFromTemplate(menu));

const isDevelopment = process.env.NODE_ENV !== "production";

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow;

function createMainWindow() {
	const window = new BrowserWindow({
		webPreferences: {nodeIntegration: true},
	});

	if (isDevelopment) {
		window.webContents.openDevTools();
	}

	if (isDevelopment) {
		window.loadURL(
				`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`,
		);
	} else {
		window.loadURL(
				formatUrl({
					// default production entry point
					pathname: path.join(__dirname, "index.html"),
					protocol: "file",
					slashes: true,
				}),
		);
	}

	window.on("closed", () => {
		mainWindow = null;
	});

	window.webContents.on("devtools-opened", () => {
		window.focus();
		setImmediate(() => {
			window.focus();
		});
	});

	return window;
}

// quit application when all windows are closed
app.on("window-all-closed", () => {
	// on macOS it is common for applications to stay open until the user explicitly quits
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	// on macOS it is common to re-create a window even after all windows have been closed
	if (mainWindow === null) {
		mainWindow = createMainWindow();
	}
});

// create main BrowserWindow when electron is ready
app.on("ready", () => {
	console.log("starting migration subsystem...");
	knex.migrate.latest().then(_ => {
		console.log("migrations done!");
		mainWindow = createMainWindow();
	});
});

// exemplo tratamento mensagem vinda da tela
ipcMain.handle(
		eventos.getSysInfo.name,
		async ev =>
				({cpus: os.cpus(), arch: os.arch(), platform: os.platform()}),
);
