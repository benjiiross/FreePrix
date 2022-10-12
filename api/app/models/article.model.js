module.exports = (sequelize, Sequelize) => {
  const Article = sequelize.define("article", {
    reference: {
      type: Sequelize.INTEGER,
    },
    category: {
      type: Sequelize.STRING,
    },
    url: {
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
    inDiscount: {
      type: Sequelize.STRING,
    },
    priceBeforeDiscount: {
      type: Sequelize.FLOAT(10.2),
    },
    newArrival: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Article;
};
