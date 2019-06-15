const mysql = require("mysql");

const dropTable = "DROP TABLE IF EXISTS burgers;"
const createTable = "CREATE TABLE burgers " +
    "( " +
    "id int NOT NULL AUTO_INCREMENT, " +
    "burger_name VARCHAR(255) NOT NULL, " +
    "devoured BOOLEAN, " +
    "PRIMARY KEY (id) " +
    "); ";

const seedQuery = "INSERT INTO burgers " +
    "(burger_name, devoured) " +
    "VALUES " +
    " ('She’s A Super Leek Burger', false), " +
    "('Hit Me With Your Best Shallot Burger', false), " +
    " ('Open Sesame Burger', false);";

// always use a environment variable, if it doesn't exist, create it.
const connection = mysql.createConnection(process.env.JAWSDB_URL);

function dropTb() {
    connection.query(dropTable, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            console.log("burgers table was dropped");
        }
    });
}

function createTb() {
    connection.query(createTable, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            console.log("burgers table was created");
        }
    });
}

function connect() {
    connection.connect(function (err) {
        if (err) {
            console.error("error connecting: " + err.stack);
            return;
        }
        console.log("connected as id " + connection.threadId);
    });
}

function seed() {
    connection.query(seedQuery, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            console.log("burgers table was seeded");
        }
    });
}

function quit() {
    // upon exiting the application, you want to clean-up existing
    // connections, or you'll mess up the database
    connection.end();
}

// connect at top-level
connect();
// drop table if it exists
dropTb();
// create the table in the new database and setup the connection for
// other modules in the future
createTb();
// seed the database
seed();

module.exports = connection;