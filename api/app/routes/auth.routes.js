module.exports = (app) => {
  const auth = require("../controllers/auth.controller");

  var router = require("express").Router();

  router.post("/", auth.login);
  router.get("/", auth.getTest);

  router.get("/check", async (req, res) => {
    let isLoggedIn = await auth.isLoggedIn(req, res);
    if (isLoggedIn) {
      res.send(JSON.stringify({ isLoggedIn: true }));
    } else {
      res.send(JSON.stringify({ isLoggedIn: false }));
    }
  });

  app.use("/api/login", router);
};
