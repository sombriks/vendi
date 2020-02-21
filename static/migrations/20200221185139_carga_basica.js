exports.up = knex => {
	return knex("operador")
		.insert([
			{id: 1, nome: "operador1"},
			{id: 2, nome: "operador2"},
			{id: 3, nome: "operador3"},
		])
		.then(_ => {
			return knex("loja").insert({id: 1, nome: "loja1"});
		})
		.then(_ => {
			return knex("pdv").insert({id: 1, loja_id: 1, nome: "pdv1"});
		}).then(_ => {
			return knex("produto").insert([
				{id: 1, nome: "cerveja"},
				{id: 2, nome: "pão"},
				{id: 3, nome: "ovo"},
				{id: 4, nome: "coca cola"},
				{id: 5, nome: "açúcar"},
				{id: 6, nome: "sabão"}
			])
		});
};

exports.down = knex => {
	return knex("pdv").del()
		.then(_ => knex("loja").del())
		.then(_ => knex("operador").del())
		.then(_ => knex("produto").del())

};
