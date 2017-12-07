"use strict"
const { db, Student, Campus } = require("./db/models")

db
  .sync({ force: true })
  .then(() => {
    return Campus.create({
      name: "Interstellar Chismeria",
      imageUrl: "https://giphy.com/gifs/xT1XGKf6DzZQtHTyvu/html5",
      description:
        "Teaching the essential skills to talk smack accross the galaxy"
    })
  })
  .then(() => {
    return Campus.create({
      name: "Plutonian Hackeries",
      imageUrl: "https://giphy.com/gifs/xT1XGKf6DzZQtHTyvu/html5",
      description:
        "All the necessary skills to hack pluto into and out of being a planet"
    })
  })
  .then(() => {
    return Campus.create({
      name: "Kryptonian Kitty Kat Kampus",
      imageUrl: "https://giphy.com/gifs/xT1XGKf6DzZQtHTyvu/html5",
      description:
        "Kampin with Kitties chillin with some Kray Kryptonian"
    })
  })
  .then(() => {
    return Campus.create({
      name: "El Instituto de Cocina de Saturno",
      imageUrl: "https://giphy.com/gifs/xT1XGKf6DzZQtHTyvu/html5",
      description:
        "Hacking is great, but it'd be better if you were surviving off more than just space rocks"
    })
  })
  .then(() => {
    return Student.create({
      firstName: "Leah",
      lastName: "Gerald",
      email: "leahgerald@galactacademy.com",
      gpa: 4.0,
      campusId: 2
    })
  })
  .then(() => {
    return Student.create({
      firstName: "Lyssa",
      lastName: "Stiller",
      email: "lyssa_stiller@galactacademy.com",
      gpa: 4.0,
      campusId: 2
    })
  })
  .then(() => {
    return Student.create({
      firstName: "Emily",
      lastName: "Gordon",
      email: "emily_gordon@galactacademy.com",
      gpa: 4.0,
      campusId: 2
    })
  })
  .then(() => {
    return Student.create({
      firstName: "Ko-Hsin",
      lastName: "Chu",
      email: "ko_hsin_chu@galactacademy.com",
      gpa: 4.0,
      campusId: 2
    })
  })
  .then(() => {
    return Student.create({
      firstName: "Kat",
      lastName: "Ballo",
      email: "katballo@galactacademy.com",
      gpa: 4.0,
      campusId: 1
    })
  })
  .then(() => {
    return Student.create({
      firstName: "Lippy",
      lastName: "Lin",
      email: "lippylin@galactacademy.com",
      gpa: 4.0,
      campusId: 1
    })
  })
  .then(() => {
    return Student.create({
      firstName: "Rekha",
      lastName: "Mundada",
      email: "rekha_mundada@galactacademy.com",
      gpa: 4.0,
      campusId: 1
    })
  })
  .then(() => {
    return Student.create({
      firstName: "Ann",
      lastName: "Layman",
      email: "ann_layman@galactacademy.com",
      gpa: 4.0,
      campusId: 1
    })
  })
  .then(() => {
    return Student.create({
      firstName: "Annabel",
      lastName: "Lau",
      email: "annabel_lau@galactacademy.com",
      gpa: 4.0,
      campusId: 3
    })
  })
  .then(() => {
    return Student.create({
      firstName: "Claudia",
      lastName: "Baik",
      email: "claudia_baik@galactacademy.com",
      gpa: 4.0,
      campusId: 3
    })
  })
  .then(() => {
    return Student.create({
      firstName: "Oczane",
      lastName: "Rivera",
      email: "oczane_rivera@galactacademy.com",
      gpa: 4.0,
      campusId: 3
    })
  })
  .then(() => {
    return Student.create({
      firstName: "Sara",
      lastName: "Gallagher",
      email: "sara_gallagher@galactacademy.com",
      gpa: 4.0,
      campusId: 3
    })
  })
  .then(() => {
    return Student.create({
      firstName: "Pooja",
      lastName: "Srivastava",
      email: "pooja_srivastava@galactacademy.com",
      gpa: 4.0,
      campusId: 4
    })
  })
  .then(() => {
    return Student.create({
      firstName: "Sana",
      lastName: "Aiman",
      email: "sana_aiman@galactacademy.com",
      gpa: 4.0,
      campusId: 4
    })
  })
  .then(() => {
    return Student.create({
      firstName: "Natalie",
      lastName: "Ung",
      email: "natalie_ung@galactacademy.com",
      gpa: 4.0,
      campusId: 4
    })
  })
  .then(() => {
    return Student.create({
      firstName: "Sierra",
      lastName: "Saitta",
      email: "sierra_saitta@galactacademy.com",
      gpa: 4.0,
      campusId: 4
    })
  })
  .then(() => {
    return db.close()
  })
