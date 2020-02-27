import {ipcMain} from "electron";
import eventos from "../../common/eventos";
import {knex} from "../database";

export const setup = _ => {
	ipcMain.handle(eventos.listProducts, async (ev, filtro) => {
		return await knex("produto").where(filtro);
	})
};