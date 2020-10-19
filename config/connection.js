const mysql = require("mysql");
const userCred = require("./config");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_MAUVE_URL)
} else {
  connection = mysql.createConnection({
    host: userCred.host,
    port: 3306,
    user: userCred.user,
    password: userCred.password,
    database: userCred.database,
  });
};

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
