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
  Student.findById({ id: id, include: [{ all: true }] })
    .then(student => res.json(student))
    .catch(next)
})

router.put("/:id", (req, res, next) => {
  const id = req.params.id
  Student.findById(id)
    .then(student => {
      return student.update(req.body)
    })
    .then(updatedStudent => res.json(updatedStudent))
    .catch(next)
})

router.delete("/:id", (req, res, next) => {
  const id = req.params.id
  Student.findById(id)
    .then(student => {
      return student.delete()
    })
    .then(deletedStudent => res.json(deletedStudent))
    .catch(next)
})

module.exports = router
