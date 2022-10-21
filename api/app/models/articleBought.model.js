module.exports = (sequelize, Sequelize) => {
  const articleBought = sequelize.define("articleBought", {
    unitPrice: {
      type: Sequelize.FLOAT(10, 2),
    },
  });

  return articleBought;
};
