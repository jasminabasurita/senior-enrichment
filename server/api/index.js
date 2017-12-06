"use strict"
const router = require("express").Router()
const { db } = require("../db/models")
const campusRouter = require("./campuses")
const studentRouter = require("./students")

router.use("/campuses", campusRouter)
router.use("/students", studentRouter)

module.exports = router
