var express = require('express');
var router = express.Router();
const pool = require("../db/database")

/* GET users listing. */
router.get("/", async (req, res, next) => {
  const usuarios = await pool.query("SELECT * FROM users");
  res.render("listusers", {
    usuarios,
    title: "Usuarios",
  });
});

module.exports = router;
