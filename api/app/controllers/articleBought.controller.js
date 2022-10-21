const {
  articleBoughts,
  articles,
  users,
  Sequelize: { Op },
} = require("../models");
const { isLoggedIn } = require("./auth.controller");

exports.create = async (req, res) => {
  const session = await isLoggedIn(req, res);
  if (!session) {
    res.status(401).send({ message: "Unauthorized" });
    return;
  }

  if (!req.body.referenceArticle) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const article = await articles.findOne({
    where: { reference: req.body.referenceArticle, reserved: false },
  });
  if (!article) {
    res.status(404).send({ message: "Article not found" });
    return;
  }

  articleBoughts
    .create({
      articleId: article.id,
      unitPrice: article.price,
      userId: session.userId,
    })
    .then(async (data) => {
      await articles.update({ reserved: true }, { where: { id: article.id } });
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

exports.findAll = async (req, res) => {
  const session = await isLoggedIn(req, res);
  if (!session) {
    res.status(401).send({ message: "Unauthorized" });
    return;
  }

  articleBoughts
    .findAll({
      where: { userId: session.userId, orderListId: null },
      include: [{ model: articles, as: "article" }],
    })
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

exports.findOne = async (req, res) => {
  const session = await isLoggedIn(req, res);
  if (!session) {
    res.status(401).send({ message: "Unauthorized" });
    return;
  }

  const id = req.params.id;

  articleBoughts
    .findOne({
      where: { userId: session.userId, orderListId: null },
      include: [{ model: articles, as: "article" }],
    })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res
          .status(404)
          .send({ message: `Cannot find ArticleBought with id=${id}.` });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving Clent with id=${id}`,
      });
    });
};

exports.update = async (req, res) => {
  const session = await isLoggedIn(req, res);
  if (!session) {
    res.status(401).send({ message: "Unauthorized" });
    return;
  }

  const id = req.params.id;

  articleBoughts
    .update(req.body, {
      where: { id, userId: session.userId, orderListId: null },
    })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "ArticleBought was updated successfully." });
      } else {
        res.send({
          message: `Cannot update ArticleBought with id=${id}. Maybe ArticleBought was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating ArticleBought with id=${id}`,
      });
    });
};

exports.delete = async (req, res) => {
  const session = await isLoggedIn(req, res);
  if (!session) {
    res.status(401).send({ message: "Unauthorized" });
    return;
  }

  const id = req.params.id;
  const articleBought = await articleBoughts.findOne({
    where: { id, orderListId: null, userId: session.userId },
  });

  if (!articleBought) {
    res.status(404).send({ message: `ArticleBought not found` });
    return;
  }

  articleBought
    .destroy()
    .then(async (num) => {
      await articles.update(
        { reserved: false },
        { where: { id: articleBought.articleId } }
      );

      res.send({ message: "ArticleBought was deleted successfully!" });
    })
    .catch((err) => {
      res.status(500).send({
        message: `Could not delete ArticleBought with id=${id}`,
      });
    });
};

exports.deleteAll = async (req, res) => {
  const session = await isLoggedIn(req, res);
  if (!session) {
    res.status(401).send({ message: "Unauthorized" });
    return;
  }

  const toDestroy = await articleBoughts.findAll({
    where: { userId: session.userId, orderListId: null },
  });

  articleBoughts
    .destroy({
      where: { id: { [Op.in]: toDestroy.map((article) => article.id) } },
      truncate: false,
    })
    .then(async (nums) => {
      await articles.update(
        { reserved: false },
        {
          where: {
            id: { [Op.in]: toDestroy.map((article) => article.articleId) },
          },
        }
      );

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
