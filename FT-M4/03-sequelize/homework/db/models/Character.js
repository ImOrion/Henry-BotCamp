const { DataTypes } = require("sequelize");

module.exports = sequelize => {
	sequelize.define(
		"Character",
		{
			code: {
				type: DataTypes.STRING(5),
				primaryKey: true,
				validate: {
					notHenry(value){
						if (value.toLowerCase() === "henry") throw new Error("El code no puede ser Henry!")
					}
				}
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					notIn: [["Henry", "SoyHenry", "Soy Henry"]]
				}
			},
			age: {
				type: DataTypes.INTEGER,
				// get(){
				// 	return `${this.getDataValue("age")} years old`
				// }
			},
			race: {
				type: DataTypes.ENUM(
					"Human",
					"Elf",
					"Machine",
					"Demon",
					"Animal",
					"Other"
				),
				defaultValue: "Other",
			},
			hp: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			mana: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			date_added: {
				type: DataTypes.DATEONLY,
				defaultValue: DataTypes.NOW,
			},
		},
		{
			timestamps: false,
		}
	);
};
