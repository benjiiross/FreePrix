module.exports = (app) => {
  const article = require("../controllers/article.controller.js");

  var router = require("express").Router();

  // Create a new Articles
  router.post("/", article.create);

  // Retrieve all Articles
  router.get("/", article.findAll);

  // Retrieve a single Articles with id
  router.get("/:id", article.findOne);

  // Update a Articles with id
  router.put("/:id", article.update);

  // Delete a Articles with id
  router.delete("/:id", article.delete);

  // Delete all Articles
  router.delete("/", article.deleteAll);

  app.use("/api/article", router);
};
