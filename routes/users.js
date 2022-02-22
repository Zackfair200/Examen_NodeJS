var express = require('express');
var router = express.Router();
const pool = require("../db/database")
const {encriptado} = require("../helpers/helpers")

/* LISTAR USUARIOS. */
router.get("/", async (req, res, next) => {
  const usuarios = await pool.query("SELECT * FROM users");
  res.render("listusers", {
    usuarios,
    title: "Usuarios",
  });
});

/* AÑADIR USUARIOS */
router.get("/add", (req, res, next) => {
  res.render("adduser", {
    title: "Añadir usuario",
  });
});

router.post("/add", async (req, res, next) => {
  const { fullname, username, email, password } = req.body;
  const newUser = {
    fullname,
    username,
    email,
    password,
  };
  newUser.password = encriptado(newUser.password)
  await pool.query("INSERT INTO users SET ?", [newUser]);
  res.redirect("/users");
});

/* BORRAR USUARIOS */
router.get("/delete/:id", async (req, res, next) => {
  const {id} = req.params
  await pool.query("DELETE FROM users WHERE id=?",[id])
  res.redirect("/users");
});


module.exports = router;
