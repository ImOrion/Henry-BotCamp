const { Sequelize, Op } = require("sequelize");
const modelCharacter = require("./models/Character.js");
const modelAbility = require("./models/Ability.js");
const modelRole = require("./models/Role.js");

const db = new Sequelize(
	"postgres://postgres:postgres@localhost:5432/henry_sequelize",
	{
		logging: false,
	}
);

modelCharacter(db);
modelAbility(db);
modelRole(db);

const { Character, Ability, Role } = db.models;

// 1:N entre Character y Ability
Character.hasMany(Ability);
Ability.belongsTo(Character);
// N:M entre Character y Role
Character.belongsToMany(Role, { through: "Character_Role" });
Role.belongsToMany(Character, { through: "Character_Role" });

module.exports = {
	...db.models,
	db,
	Op,
};
