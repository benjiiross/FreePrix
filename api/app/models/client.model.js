module.exports = (sequelize, Sequelize) => {
  const Client = sequelize.define("client", {
    username: {
      type: Sequelize.STRING,
      validate: { notEmpty: true },
    },
    password: {
      type: Sequelize.STRING,
      validate: { notEmpty: true },
    },
    name: {
      type: Sequelize.STRING,
      validate: { notEmpty: true },
    },
    surname: {
      type: Sequelize.STRING,
      validate: { notEmpty: true },
    },
    birth: {
      type: Sequelize.DATEONLY,
      validate: { notEmpty: true },
    },
    mail: {
      type: Sequelize.STRING,
      validate: { isEmail: true },
    },
    phone: {
      type: Sequelize.STRING,
      validate: { notEmpty: true },
    },
  });

  return Client;
};
