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
    return db.close()
  })
