exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('pets')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('pets').insert([
				{ name: 'Ama', breed: 'cat' },
				{ name: 'Nana', breed: 'dog' },
				{ name: 'Da G', breed: 'husky' }
			]);
		});
};
