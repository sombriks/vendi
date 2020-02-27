// exemplo tratamento mensagem vinda da tela
import os from "os";
import {ipcMain} from "electron";

import eventos from "../../common/eventos";

export const setup = _ => {
	ipcMain.handle(
		eventos.getSysInfo,
		async ev =>
			({cpus: os.cpus(), arch: os.arch(), platform: os.platform()}),
	);
};