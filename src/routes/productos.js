// requerimos express
let express = require("express");

// traemos los elementos necesarios para definir las rutas de un recurso en particular con
let router = express.Router();

router.get("/", (req, res) => res.send("Bienvenidos a la pagina de productos"));

// usamos req.params.idProducto para enviar al usuario a la ruta ......
router.get("/:idProducto", (req, res) =>
  res.send("Bienvenidos al detalle del producto" + req.params.idProducto)
);

// ahora queremos que el usuario pueda ir a comentarios de productos y un comentario en especifico
// agregando ? al id (idComentario?) le decimos a express que es optativo
router.get("/:idProducto/comentarios/:idComentario?", function (req, res) {
  // validacion del idComentarios para no imprimir undefine en caso que no este el idComentario
  if (req.params.idComentario == undefined) {
    //indicacion al usuario que no se ha indicado el idComentarios
    res.send(
      "Bienvenidos a los comentarios de producto " + req.params.idProducto
    );

    // si se indico el idComentarios
  } else {
    res.send(
      "Bienvenidos a los comentarios de producto " +
        req.params.idProducto +
        " y estas enfocado en el comentario " +
        req.params.idComentario
    );
  }
});

module.exports = router;
