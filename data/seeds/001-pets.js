exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('pets')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('pets').insert([
				{ name: 'LuLu', breed: 'cat' },
				{ name: 'NaNa', breed: 'dog' },
				{ name: 'da G', breed: 'fish' }
			]);
		});
};
