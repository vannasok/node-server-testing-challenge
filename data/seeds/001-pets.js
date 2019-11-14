exports.seed = function(knex) {
	return knex('pets').insert([
		{ name: 'LuLu', breed: 'cat' },
		{ name: 'NaNa', breed: 'dog' },
		{ name: 'da G', breed: 'fish' }
	]);
};
