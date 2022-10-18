const db = require("../models");
const ArticleBought = db.articleBoughts;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.referenceArticle) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const articleBought = {
    referenceArticle: req.body.referenceArticle,
    unityPrice: req.body.unityPrice,
    quantity: req.body.quantity,
  };

  ArticleBought.create(articleBought)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the ArticleBought.",
      });
    });
};

exports.findAll = (req, res) => {
  const referenceArticle = req.query.referenceArticle;
  var condition = referenceArticle
    ? { referenceArticle: { [Op.like]: `%${referenceArticle}%` } }
    : null;

  ArticleBought.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ArticleBoughts.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  ArticleBought.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find ArticleBought with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Clent with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  ArticleBought.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "ArticleBought was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update ArticleBought with id=${id}. Maybe ArticleBought was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating ArticleBought with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  ArticleBought.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "ArticleBought was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete ArticleBought with id=${id}. Maybe ArticleBought was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete ArticleBought with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  ArticleBought.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({
        message: `${nums} ArticleBoughts were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while removing all ArticleBoughts.",
      });
    });
};
