const db = require('../data/dbConfig');

module.exports = {
	getPets,
	deleteById,
	addPet,
	getById
};

function getPets() {
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

function addPet(pet) {
	return db('pets')
		.insert(pet, 'id')
		.then(ids => {
			const id = ids[0];
			// const [id] = ids;
			return db('hobbits')
				.where({ id })
				.first();
		});
}

function deleteById(id) {
	return db('pets')
		.where({ id })
		.del();
}
