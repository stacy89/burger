var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 3306,
	host: "127.0.0.1",
	user: "root",
	password: "burgers_db"
});

connection.connect(function(err) {
	if (err) {
		console.log("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;