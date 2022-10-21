module.exports = (sequelize, Sequelize) => {
  const orderList = sequelize.define("orderList", {
    orderDate: {
      type: Sequelize.DATE,
    },
    totalPrice: {
      type: Sequelize.FLOAT(10, 2),
    },
    shippingAddress: {
      type: Sequelize.STRING,
    },
    gift: {
      type: Sequelize.BOOLEAN,
    },
  });

  return orderList;
};
