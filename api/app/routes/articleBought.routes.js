module.exports = (app) => {
  const articleBoughts = require("../controllers/articleBought.controller.js");

  var router = require("express").Router();

  router.post("/", articleBoughts.create);

  router.get("/", articleBoughts.findAll);

  router.get("/:id", articleBoughts.findOne);

  router.put("/:id", articleBoughts.update);

  router.delete("/:id", articleBoughts.delete);

  router.delete("/", articleBoughts.deleteAll);

  app.use("/api/articleBoughts", router);
};
