const db = require('../data/dbConfig');

module.exports = {
	get,
	remove,
	insert,
	getById
};

function get() {
	return db('pets');
}

function getById(id) {
	return db('pets')
		.first()
		.where({ id })
		.then(pet => {
			if (pet) {
				return pet;
			} else {
				return null;
			}
		});
}

function insert(pet) {
	return db('pets').insert(pet);
}

function remove(id) {
	return db('pets')
		.where({ id })
		.del();
}
