exports.up = function(knex) {
	return knex.schema.createTable('pets', tbl => {
		tbl.increments();

		tbl
			.string('name', 128)
			.notNullable()
			.unique();

		tbl.string('breed', 128).notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('pets');
};
