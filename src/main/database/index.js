import Knex from "knex";
import knexfile from "../../../knexfile";

const env = process.env.NODE_ENV || "development";

export const knex = Knex(knexfile[env]);
