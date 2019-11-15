exports.seed = function(knex) {
	return knex('pets').insert([
		{ name: 'Ama', breed: 'cat' },
		{ name: 'Nana', breed: 'dog' },
		{ name: 'Da G', breed: 'husky' }
	]);
};
