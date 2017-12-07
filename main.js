"use strict"
const chalk = require('chalk')
const { db } = require("./server/db/models")
const app = require("./server")
const PORT = 3000
const ADDRESS = chalk.underline.green(`http://localhost:${PORT}`)
db
	.sync({}) // if you update your db schemas, make sure you drop the tables first and then recreate them
	.then(() => {
		console.log("db synced")
		app.listen(PORT, () =>
      console.log(chalk.black.bgMagenta.italic(`

===========================================================
Galactacademy is waiting for you at: ${ADDRESS}
===========================================================
			`)
    ))
	})
