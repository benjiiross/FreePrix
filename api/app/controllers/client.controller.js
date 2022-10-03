const db = require("../models");
const Client = db.clients;
const Op = db.Sequelize.Op;

// Create and Save a new Client
exports.create = (req, res) => {
  // Validate request
  if (!req.body.birth) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Client
  const client = {
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    surname: req.body.surname,
    birth: req.body.birth,
    mail: req.body.mail,
    phone: req.body.phone,
  };

  // Save Client in the database
  Client.create(client)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Client.",
      });
    });
};

// Retrieve all Clients from the database.
exports.findAll = (req, res) => {
  const username = req.query.username;

  // looks for username that is like the request
  // sql equivalent to LIKE
  var condition = username
    ? { username: { [Op.like]: `%${username}%` } }
    : null;

  Client.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving clients.",
      });
    });
};

// Find a single Client with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Client.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Client with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Clent with id=" + id,
      });
    });
};

// Update a Client by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Client.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Client was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Client with id=${id}. Maybe Client was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Client with id=" + id,
      });
    });
};

// Delete a Client with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Client.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Client was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Client with id=${id}. Maybe Client was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Client with id=" + id,
      });
    });
};

// Delete all Clients from the database.
exports.deleteAll = (req, res) => {
  Client.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Clients were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all clients.",
      });
    });
};
