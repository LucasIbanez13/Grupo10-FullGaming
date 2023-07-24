const express = require("express");
const path = require("path");

const app = express();
const PORT = 3030;

app.use(express.static('public'))
/* rutas */
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "home.html"))
);
app.get("/productDetail", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "productDetail.html"))
);
app.get("/shoppingCart", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "shoppingCart.html"))
);
app.listen(PORT, () =>
  console.log("Server running in http://localhost:" + PORT)
);