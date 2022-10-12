require("dotenv/config");
const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: `http://localhost:${process.env.FRONTEND_PORT}`,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Freeprix application" });
});

const db = require("./app/models");
db.sequelize
  .sync({
    // recreates the db
    // force: true,
  })
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

require("./app/routes/client.routes")(app);
require("./app/routes/orderList.routes")(app);
require("./app/routes/article.routes")(app);
require("./app/routes/articleBought.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
