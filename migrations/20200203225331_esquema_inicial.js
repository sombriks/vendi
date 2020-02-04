
exports.up = knex => knex.schema.createTable("foo", tb => tb.increments())

exports.down = knex => knex.schema.dropTable("foo")
