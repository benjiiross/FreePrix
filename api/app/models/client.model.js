module.exports = (sequelize, Sequelize) => {
  const Client = sequelize.define("client", {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
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
      isEmail: true,
    },
    phone: {
      type: Sequelize.STRING,
    },
  });

  return Client;
};
