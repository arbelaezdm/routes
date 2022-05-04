// requerimos el modulo express
let express = require("express");

// traer el modulo de productos
let rutasProductos = require("./src/routes/productos.js");
let rutasMain = require("./src/routes/main.js");
let rutasMarcas = require("./src/routes/marcas.js");

// creamos una applicacion express que posee metodos para el enrutamiento de las peticiones HTTP
let app = express();

// definimos y creamos el servidor escuchando en puerto 3000 e imprimre "server run"
app.listen(3000, () => console.log("Server run"));

// aclaramos que todas las rutas que comiencen con el prefijo /productos van a ser respondidas por el archivo productos.js
app.use("/productos", rutasProductos);

//hacemos lo mismo para las demas rutas
app.use("/", rutasMain);
app.use("/marcas", rutasMarcas);
