var mysql = require("mysql");
const userCred = require("./config");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: userCred.user,
  password: userCred.password,
  database: "burger_db",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
