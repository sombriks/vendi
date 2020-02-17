exports.up = knex =>
	knex.schema
		.createTable("operador", tb => tb.increments())
		.createTable("loja", tb => tb.increments())
		.createTable("produto", tb => tb.increments())
		.createTable("pdv", tb => {
			tb.increments();
			tb.integer("loja_id")
				.notNullable()
				.references("loja.id");
		})
		.createTable("estoque", tb => {
			tb.increments();
			tb.integer("produto_id")
				.notNullable()
				.references("produto.id");
			tb.integer("loja_id")
				.notNullable()
				.references("loja.id");
		})
		.createTable("preco", tb => {
			tb.increments();
			tb.integer("produto_id")
				.notNullable()
				.references("produto.id");
			tb.integer("loja_id")
				.notNullable()
				.references("loja.id");
		})
		.createTable("transacao", tb => {
			tb.increments();
			tb.integer("pdv_id")
				.notNullable()
				.references("pdv.id");
			tb.integer("operador_id")
				.notNullable()
				.references("operador.id");
		})
		.createTable("venda", tb => {
			tb.increments();
			tb.integer("transacao_id")
				.notNullable()
				.references("transacao.id");
		})
		.createTable("vendaitem", tb => {
			tb.increments();
			tb.integer("venda_id")
				.notNullable()
				.references("venda.id");
			tb.integer("produto_id")
				.notNullable()
				.references("produto.id");
			tb.integer("quantidade")
				.notNullable()
				.defaultTo(1);
			tb.decimal("valor").notNullable();
		})
		.createTable("reforco", tb => {
			tb.increments();
			tb.integer("transacao_id")
				.notNullable()
				.references("transacao.id");
		})
		.createTable("sangria", tb => {
			tb.increments();
			tb.integer("transacao_id")
				.notNullable()
				.references("transacao.id");
		})
		.createTable("entradaoperador", tb => {
			tb.increments();
			tb.integer("transacao_id")
				.notNullable()
				.references("transacao.id");
		})
		.createTable("saidaoperador", tb => {
			tb.increments();
			tb.integer("transacao_id")
				.notNullable()
				.references("transacao.id");
		});

exports.down = knex =>
	knex.schema
		.dropTable("entradaoperador")
		.dropTable("saidaoperador")
		.dropTable("sangria")
		.dropTable("reforco")
		.dropTable("vendaitem")
		.dropTable("venda")
		.dropTable("transacao")
		.dropTable("pdv")
		.dropTable("estoque")
		.dropTable("preco")
		.dropTable("operador")
		.dropTable("loja")
		.dropTable("produto");
