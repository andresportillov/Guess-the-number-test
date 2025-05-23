const express = require("express");
const cors = require("cors");
const app = express();
const gameRoutes = require("./routes/gameRoutes");

app.use(express.json());
app.use(cors());
app.use("/juego", gameRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
