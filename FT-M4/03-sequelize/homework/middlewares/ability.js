const { Router } = require("express");
const { Ability } = require("../db");
const router = Router();

router.post("/", async (req, res) => {
	const { name, mana_cost } = req.body;

	try {
		if (!name || !mana_cost)
			return res.status(404).send("Falta enviar datos obligatorios");

		const newAbility = await Ability.create(req.body);

		res.status(201).send(newAbility);
	} catch (error) {
		res.status(400).send("Error en los datos enviados");
	}
});

router.put("/setCharacter", (req, res) => {
	const { idAbility, codeCharacter } = req.body;

	Ability.findByPk(idAbility)
		.then(ability => ability.setCharacter(codeCharacter))
		.then(ability => res.send(ability))
		.catch(error => res.status(400).send(error));
});

module.exports = router;
