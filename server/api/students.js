"use strict"
const router = require("express").Router()
const { Student } = require("../db/models")

router.get("/", (req, res, next) => {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next)
})

router.post("/", (req, res, next) => {
  Student.create(req.body)
    .then(newStudent => res.json(newStudent))
    .catch(next)
})

router.get("/:id", (req, res, next) => {
  const id = req.params.id
  Student.findById(id)
    .then(student => res.json(student))
    .catch(next)
})

router.put("/:id", (req, res, next) => {
  const id = req.params.id
  Student.findById(id)
    .then(student => {
      return student.update(req.body)
    })
    .then(() => Student.findAll())
    .then(students => res.json(students))
    .catch(next)
})

router.delete("/:id", (req, res, next) => {
  const id = req.params.id
  Student.findById(id)
    .then(student => {
      return student.destroy()
    })
    .then(() => Student.findAll())
    .then(students => res.json(students)) //return updated list of students
    .catch(next)
})

module.exports = router
