const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.articles = require("./article.model.js")(sequelize, Sequelize);
db.articleBoughts = require("./articleBought.model.js")(sequelize, Sequelize);
db.orderLists = require("./order.model.js")(sequelize, Sequelize);
db.sessions = require("./session.model.js")(sequelize, Sequelize);

db.users.hasMany(db.orderLists, { as: "orders" });
db.orderLists.belongsTo(db.users, { foreignKey: "userId", as: "user" });

db.users.hasMany(db.articleBoughts, { as: "articleBoughts" });
db.articleBoughts.belongsTo(db.users, { foreignKey: "userId", as: "user" });

db.orderLists.hasMany(db.articleBoughts, { as: "articleBoughts" });
db.articleBoughts.belongsTo(db.orderLists, {
  foreignKey: "orderId",
  as: "order",
});

db.articles.hasMany(db.articleBoughts, { as: "articleBoughts" });
db.articleBoughts.belongsTo(db.articles, {
  foreignKey: "articleId",
  as: "article",
});

module.exports = db;
