const express = require("express");

let router = express.Router();

// esta es una ruta
router.get("/", (req, res) => res.send("Diego"));

// al acceder a la ruta /contacto el servidor nos responde "Dejanos tu contacto"
router.get("/contacto", (req, res) => res.send("Dejanos tu contacto"));

module.exports = router;
