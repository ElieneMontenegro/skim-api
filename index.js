require("dotenv").config();
const gamesRoutes = require("./routes/games");

const express = require("express");
const app = express();

app.use(express.json());
app.use("/games", gamesRoutes);

app.listen(8080, (err) => {
  if (err) {
    console.log("Houve um problema de conexão interno");
  } else {
    console.log("Servidor rodando na porta 8080");
  }
});
