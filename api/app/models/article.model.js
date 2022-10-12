module.exports = (sequelize, Sequelize) => {
  const Article = sequelize.define("article", {
    reference: {
      type: Sequelize.INTEGER,
    },
    category: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    url: {
      type: Sequelize.STRING,
      validate: { isUrl: true },
    },
    gender: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.FLOAT(10.2),
    },
  });

  return Article;
};
