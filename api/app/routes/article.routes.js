module.exports = (app) => {
  const articles = require("../controllers/article.controller.js");

  var router = require("express").Router();

  router.post("/", articles.create);

  router.get("/", articles.findArticles);

  router.get("/:reference", articles.findOne);

  router.put("/:reference", articles.update);

  router.delete("/:reference", articles.delete);

  router.delete("/", articles.deleteAll);

  app.use("/api/articles", router);
};
