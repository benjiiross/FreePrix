const db = require("../models");
const Article = db.article;
const Op = db.Sequelize.Op;

// Create and Save a new Article
exports.create = (req, res) => {
  // Validate request
  if (!req.body.birth) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create an Article
  const Article = {
    reference: req.body.reference,
    category: req.body.category,
    size: req.body.size,
    gender: req.body.gender,
    price: req.body.price,
    indiscount: req.body.indiscount,
    pricebeforediscount: req.body.pricebeforediscount,
    newarrival: req.body.newarrival,
  };

  // Save Article in the database
  Article.create(Article)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Article.",
      });
    });
};

// Retrieve all Articles from the database.
exports.findAll = (req, res) => {
  const reference = req.query.reference;

  // looks for reference that is like the request
  // sql equivalent to LIKE
  var condition = reference
    ? { reference: { [Op.like]: `%${reference}%` } }
    : null;

  Article.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving article.",
      });
    });
};

// Find a single Article with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Article.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Article with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Article with id=" + id,
      });
    });
};

// Update an Article by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Article.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Article was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Article with id=${id}. Maybe Article was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Article with id=" + id,
      });
    });
};

// Delete a Article with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Article.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Article was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Article with id=${id}. Maybe Article was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Article with id=" + id,
      });
    });
};

// Delete all Clients from the database.
exports.deleteAll = (req, res) => {
  Article.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Article were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all articles.",
      });
    });
};
