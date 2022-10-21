const {
  orderLists,
  articles,
  articleBoughts,
  Sequelize: { Op },
} = require("../models");
const { isLoggedIn } = require("./auth.controller");

exports.create = async (req, res) => {
  const session = await isLoggedIn(req, res);
  if (!session) {
    res.status(401).send({ message: "Unauthorized" });
    return;
  }

  if (!req.body.shippingAddress) {
    res.status(400).send({ message: "shippingAddress is required" });
    return;
  }

  const cartItems = await articleBoughts.findAll({
    where: {
      orderListId: null,
      userId: session.userId,
    },
  });

  if (cartItems.length === 0) {
    res.status(400).send({ message: "Cart is empty" });
    return;
  }

  orderLists
    .create({
      orderDate: new Date(),
      totalPrice: cartItems.reduce((acc, item) => acc + item.unitPrice, 0),
      shippingAddress: req.body.shippingAddress,
      gift: req.body.gift || false,
      userId: session.userId,
    })
    .then(async (data) => {
      await articleBoughts.update(
        { orderListId: data.id },
        {
          where: {
            orderListId: null,
            userId: session.userId,
          },
        }
      );

      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the orderList.",
      });
    });
};

exports.findAll = async (req, res) => {
  const session = await isLoggedIn(req, res);
  if (!session) {
    res.status(401).send({ message: "Unauthorized" });
    return;
  }

  orderLists
    .findAll({
      where: { userId: session.userId },
      include: {
        model: articleBoughts,
        as: "articleBoughts",
        include: { model: articles, as: "article" },
      },
    })
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

exports.findOne = async (req, res) => {
  const session = await isLoggedIn(req, res);
  if (!session) {
    res.status(401).send({ message: "Unauthorized" });
    return;
  }

  const id = req.params.id;

  orderLists
    .findOne({
      where: { id, userId: session.userId },
      include: {
        model: articleBoughts,
        as: "articleBoughts",
        include: { model: articles, as: "article" },
      },
    })
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
        message: `Error retrieving Clent with id=${id}`,
      });
    });
};
