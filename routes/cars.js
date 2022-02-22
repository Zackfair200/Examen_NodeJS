var express = require("express");
var router = express.Router();
const pool = require("../db/database");

/* LISTAR COCHES. */
router.get("/", async (req, res, next) => {
  const coches = await pool.query("SELECT * FROM cars");
  res.render("listcars", {
    coches,
    title: "Coches",
  });
});
/* AÑADIR COCHES */
router.get("/add", (req, res, next) => {
  res.render("addcar", {
    title: "Añadir coche",
  });
});

router.post("/add", async (req, res, next) => {
  const { modelo, numero, imagen } = req.body;
  const newCar = {
    modelo,
    numero,
    imagen,
  };
  await pool.query("INSERT INTO cars SET ?", [newCar]);
  res.redirect("/cars");
});
/* BORRAR COCHES */
router.get("/delete/:id", async (req, res, next) => {
  const { id } = req.params;
  await pool.query("DELETE FROM cars WHERE id=?", [id]);
  res.redirect("/cars");
});
/* EDITAR COCHES */
router.get("/editcar/:id", async (req, res, next) => {
  const { id } = req.params;
  const edited = await pool.query("SELECT * FROM cars WHERE id=?", [id]);
  res.render("editcar",edited[0]);
});

router.post("/editcar/:id", async (req, res, next) => {
  const { id } = req.params;
  const { modelo, numero, imagen } = req.body;
  const editedCar = {
    modelo,
    numero,
    imagen,
  };
  await pool.query("UPDATE cars SET ? WHERE id=?", [editedCar,id]);
  res.redirect("/cars");
});

/* MOSTRAR JSON */
router.get("/api", async (req, res, next) => {
    const cars = await pool.query("SELECT * FROM cars");
    res.json(cars);
  });

module.exports = router;
