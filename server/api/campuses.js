"use strict"
const router = require("express").Router()
const { db, Campus } = require("../db/models")

router.get("/", (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next)
})

router.post("/", (req, res, next) => {
  Campus.create(req.body)
    .then(newCampus => res.json(newCampus))
    .catch(next)
})

router.get("/:id", (req, res, next) => {
  const id = req.params.id
  Campus.findById(id)
    .then(campus => res.json(campus))
    .catch(next)
})

router.put("/:id", (req, res, next) => {
  const id = req.params.id
  Campus.findById(id)
    .then(campus => {
      return campus.update(req.body)
    })
    .then(updatedCampus => res.json(updatedCampus))
    .catch(next)
})

router.delete("/:id", (req, res, next) => {
  const id = req.params.id
  Campus.findById(id)
    .then(campus => {
      return campus.delete()
    })
    .then(deletedCampus => res.json(deletedCampus))
    .catch(next)
})

module.exports = router
