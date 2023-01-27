const { Router } = require("express");
const { Op, Character, Role, Ability } = require("../db");
const router = Router();

router.post("/", async (req, res) => {
	try {
		const { name, hp, mana, code } = req.body;

		if (!name || !hp || !mana || !code)
			return res.status(404).send("Falta enviar datos obligatorios");

		const newCharacter = await Character.create(req.body);

		res.status(201).send(newCharacter);
	} catch (error) {
		res.status(404).send("Error en alguno de los datos provistos");
	}
});

router.get("/", async (req, res) => {
	const characters = await Character.findAll({
		where: Object.keys(req.query).length ? req.query : null,
	});

	if (characters.length < 1)
		return res.status(404).json({ msg: "0 Characters found" });

	res.json(characters);
});

router.get("/young", async (req, res) => {
	const youngCharacters = await Character.findAll({
		where: {
			age: {
				[Op.lt]: 25,
			},
		},
	});

	res.send(youngCharacters);
});

router.get("/:code", async (req, res) => {
	const character = await Character.findByPk(req.params.code);

	if (!character)
		return res
			.status(404)
			.send(
				`El código ${req.params.code} no corresponde a un personaje existente`
			);

	res.send(character);
});

router.get("/roles/:code", (req, res) => {
	Character.findByPk(req.params.code, { include: Role })
		.then(char => res.send(char))
		.catch(error => res.status(500).send(error));
});

router.put("/addAbilities", async (req, res) => {
	try {
		const { codeCharacter, abilities } = req.body;
		const character = await Character.findByPk(codeCharacter);
		const createdAbilities = await Ability.bulkCreate(abilities);


		await character.addAbilities(createdAbilities);

		res.send(character);
	} catch (error) {
		res.status(404).send(error);
	}
});

router.put("/:attribute", async (req, res) => {
	try {
		await Character.update(
			{ [req.params.attribute]: req.query.value },
			{
				where: {
					[req.params.attribute]: null,
				},
			}
		);
		res.send("Personajes actualizados");
	} catch (error) {
		res.status(400).send(error);
	}
});

module.exports = router;
