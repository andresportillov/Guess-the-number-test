const express = require("express");
const router = express.Router();
const Game = require("../models/Game");

const gameInstance = new Game();

router.get("/estado", (req, res) => {
 
});

router.post("/intentar", (req, res) => 

  if () return res.status(400).json({ error: result });
  res.json();
});

router.post("/nivel", (req, res) => {
  const { } = req.body;
  try {
    ;
    res.json();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
