exports.up = knex =>
	knex.schema
		.createTable("operador", tb => tb.increments())
		.createTable("pdv", tb => tb.increments())
		.createTable("loja", tb => tb.increments())
		.createTable("produto", tb => tb.increments())
		.createTable("estoque", tb => tb.increments())
		.createTable("preco", tb => tb.increments())
		.createTable("venda", tb => tb.increments());

exports.down = knex =>
	knex.schema
		.dropTable("operador")
		.dropTable("pdv")
		.dropTable("loja")
		.dropTable("produto")
		.dropTable("estoque")
		.dropTable("preco")
		.dropTable("venda");
