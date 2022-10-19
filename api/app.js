var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

require("./app/routes/user.routes")(app);
require("./app/routes/orderList.routes")(app);
require("./app/routes/article.routes")(app);
require("./app/routes/articleBought.routes")(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

/* BEGIN db initialization */
const Op = {};
const dbConfig = require("./app/config/db.config.js");
const Sequelize = require("sequelize");
const connection = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: dbConfig.pool,
  }
);
/* END db initialization */

const User = require("./app/models/user.model")(connection, Sequelize);
User.sync({ force: false, alter: true });

const Article = require("./app/models/article.model")(connection, Sequelize);
Article.sync({ force: false, alter: true });

const ArticleBought = require("./app/models/articleBought.model")(
  connection,
  Sequelize
);
ArticleBought.sync({ force: false, alter: true });

const OrderList = require("./app/models/orderList.model")(
  connection,
  Sequelize
);
OrderList.sync({ force: false, alter: true });

module.exports = app;
