const express = require("express");
const router = express.Router();
const Game = require("../models/Game");

const gameInstance = new Game();

router.get("/estado", (req, res) => {
  res.json(gameInstance.getEstado());
});

router.post("/intentar", (req, res) => {
  const { numero } = req.body;
  const result = gameInstance.intentar(numero);
  if (result) return res.status(400).json({ error: result });
  res.json(gameInstance.getEstado());
});

router.post("/nivel", (req, res) => {
  const { dificultad } = req.body;
  try {
    gameInstance.setDificultad(dificultad);
    res.json(gameInstance.getEstado());
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
