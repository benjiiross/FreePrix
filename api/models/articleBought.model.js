module.exports = (sequelize, Sequelize) => {
  const articleBought = sequelize.define("articleBought", {
    referenceArticle: {
      type: Sequelize.INTEGER,
    },
    unityPrice: {
      type: Sequelize.FLOAT(10, 2),
    },
    quantity: {
      type: Sequelize.INTEGER,
    },
  });

  return articleBought;
};
