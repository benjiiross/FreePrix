module.exports = (app) => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new Client
  router.post("/", users.create);

  // Retrieve all Clients
  router.get("/", users.findAll);

  // Retrieve a single Client with id
  router.get("/:id", users.findOne);

  // Update a Client with id
  router.put("/:id", users.update);

  // Delete a Client with id
  router.delete("/:id", users.delete);

  // Delete all Clients
  router.delete("/", users.deleteAll);

  app.use("/api/users", router);
};
