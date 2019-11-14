exports.up = function(knex, Promise) {
	return knex.schema.createTable('pets', tbl => {
		tbl.increments();

		tbl.string('name', 128).notNullable();

		tbl.string('breed', 128).notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('pets');
};
