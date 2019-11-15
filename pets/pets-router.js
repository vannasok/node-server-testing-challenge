const express = require('express');

const router = express.Router();
const Pets = require('./pets-model');

router.use(express.json());

router.get('/', async (req, res) => {
	const pets = await Pets.get();
	if (pets) {
		res.status(200).json(pets);
	} else {
		res.status(400).json({ message: 'Cannot Find Data' });
	}
});

router.get('/:id', async (req, res) => {
	const { id } = req.params;
	if (id) {
		try {
			const pet = await Pets.getById(id);
			res.status(200).json(pet);
		} catch (error) {
			res.status(401).json({ message: 'pet with ID does not exist' });
		}
	} else {
		res.status(500).json({ message: 'no pet found' });
	}
});

router.post('/', async (req, res) => {
	const { name, breed } = req.body;

	if (!name || !breed) {
		res.status(400).json({ message: 'Please add a name, and breed' });
	} else {
		const [id] = (pet = await Pets.insert(req.body));
		const newPet = await Pets.getById(id);
		res.status(200).json(newPet);
	}
});

router.delete('/:id', async (req, res) => {
	const { id } = req.params;
	const remove = await Pets.remove(id);

	if (remove) {
		res.status(200).json({ message: 'Deleted pet' });
	} else {
		res.status(401).json({ message: 'cannot delete pet' });
	}
});

module.exports = router;
