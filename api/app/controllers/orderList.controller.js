const db = require("../models");
const orderList = db.orderLists;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.orderDate) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const orderList = {
    idOrder: req.body.idOrder,
    orderDate: req.body.orderDate,
    totalPrice: req.body.totalPrice,
    billingAddress: req.body.billingAddress,
    shipingAddress: req.body.shipingAddress,
    gift: req.body.gift,
  };

  orderList
    .create(orderList)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the orderList.",
      });
    });
};

exports.findAll = (req, res) => {
  const idOrder = req.query.idOrder;
  var condition = idOrder ? { idOrder: { [Op.like]: `%${idOrder}%` } } : null;

  orderList
    .findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving orderLists.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  orderList
    .findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find orderList with id=${id}.`,
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

  orderList
    .update(req.body, {
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "orderList was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update orderList with id=${id}. Maybe orderList was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating orderList with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  orderList
    .destroy({
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "orderList was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete orderList with id=${id}. Maybe orderList was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete orderList with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  orderList
    .destroy({
      where: {},
      truncate: false,
    })
    .then((nums) => {
      res.send({
        message: `${nums} orderLists were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all orderLists.",
      });
    });
};
