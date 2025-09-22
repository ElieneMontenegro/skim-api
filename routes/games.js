const { Router } = require("express");
const router = Router();

const pool = require("../db/connectdb");

//funções
router.post("/", async (req, res) => {
  const { title, description, price, release_date } = req.body; // title, description, price, release_date

  const result = await pool.query(
    "INSERT INTO games (title, description, price, release_date) VALUES ($1, $2, $3, $4) RETURNING *",
    [title, description, price, release_date]
  );

  res.status(201).json({ resultado: result.rows[0] });
});

router.get("/all", async (req, res) => {
  const result = await pool.query(
    "SELECT id, title, description, price, release_date FROM games"
  );

  res.status(200).json(result.rows);
});

router.get("/", async (req, res) => {
  const title = req.body.title;

  const result = await pool.query(
    "SELECT title, description, price, release_date FROM games WHERE title = ($1)",
    [title]
  );

  if (result.rows.length === 0) {
    res.status(404).json("Não há nenhum jogo com esse título");
  }

  res.status(200).json(result.rows);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, price, release_date } = req.body;

  const result = await pool.query(
    "UPDATE games SET title=($1), description=($2), price=($3), release_date=($4) WHERE id = ($5) RETURNING *",
    [title, description, price, release_date, id]
  );

  res.status(200).json(result.rows);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const result = await pool.query(
    "DELETE FROM games WHERE id = ($1) RETURNING *",
    [id]
  );

  if (result.rowCount === 1) {
    res.status(200).json("Deletado com sucesso");
  } else {
    res.status(404).json("Objeto não encontrado");
  }
});

module.exports = router;
