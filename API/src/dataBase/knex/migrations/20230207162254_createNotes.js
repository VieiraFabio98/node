
exports.up = knex => knex.schema.createTable("notes", table => {
  table.increments("id");
  table.text("title");
  table.text("description");
  table.integer("user_id").references("id").inTable("users"); //criando um user id que pega como referencia o user de outra tabela.
  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
}); 
  
exports.down = knex => knex.schema.dropTable("notes");
