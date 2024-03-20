var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '252238Lzy',
  database : 'eBuy'
});
module.exports = connection;
