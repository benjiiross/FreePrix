module.exports = (app) => {
  const articles = require("../controllers/article.controller.js");

  var router = require("express").Router();

  router.post("/", articles.create);

  router.get("/", articles.findAll);

  router.get("/:id", articles.findOne);

  router.get("/category/:category", articles.findByCategory);

  router.put("/:id", articles.update);

  router.delete("/:id", articles.delete);

  router.delete("/", articles.deleteAll);

  app.use("/api/articles", router);
};
