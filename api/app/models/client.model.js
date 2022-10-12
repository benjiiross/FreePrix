module.exports = (sequelize, Sequelize) => {
  const Client = sequelize.define("client", {
    username: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    surname: {
      type: Sequelize.STRING,
    },
    birth: {
      type: Sequelize.DATEONLY,
    },
    mail: {
      type: Sequelize.STRING,
      validate: { isEmail: true },
    },
    phone: {
      type: Sequelize.STRING,
    },
  });

  return Client;
};
