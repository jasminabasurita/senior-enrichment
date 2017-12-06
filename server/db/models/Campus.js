const Sequelize = require("sequelize")
const db = require("../index")

const Campus = db.define("campuses", {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	imageUrl: {
		type: Sequelize.STRING,
		defaultValue: '/path/somewhere',
		validate: {
			isUrl: true
		}
	},
	description: {
		type: Sequelize.TEXT
	}
}, {})

module.exports = Campus
