module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
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
    email: {
      type: Sequelize.STRING,
      validate: { isEmail: true },
    },
    phone: {
      type: Sequelize.STRING,
      validate: { notEmpty: true },
    },
  });

  return User;
};
