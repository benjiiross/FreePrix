module.exports = (app) => {
  const auth = require("../models/auth.js");
  const sessions = require("../controllers/session.controller");

  var router = require("express").Router();

  router.get("/", (req, res) => {
    res.json({ message: "auth login" });
  });

  router.post("/", auth.login);

  router.post("/check", async (req, res) => {
    let isLoggedIn = await auth.isLoggedIn(req, res);
    if (isLoggedIn) {
      res.send(JSON.stringify({ isLoggedIn: true }));
    } else {
      res.send(JSON.stringify({ isLoggedIn: false }));
    }
  });

  app.use("/api/login", router);
};
