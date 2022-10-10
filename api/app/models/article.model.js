module.exports = (sequelize, Sequelize) => {
  const Article = sequelize.define("article", {
    reference: {
      type: Sequelize.INTEGER,
    },
    category: {
      type: Sequelize.STRING,
    },
    size: {
      type: Sequelize.STRING,
    },
    gender: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.FLOAT(10.2),
    },
    Indiscount: {
      type: Sequelize.STRING,
    },
    Pricebeforediscount: {
      type: Sequelize.FLOAT(10.2),
    },
    Newarrival: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Article;
};
