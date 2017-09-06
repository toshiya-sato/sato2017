var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'sato',
  password : 'sato!2',
  database : 'satodb'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM satodb.user', function (err, rows, fields) {
  if (err) { console.log('err: ' + err); }
  for(var i = 0; i < rows.length; i++) {
    console.log('name: ' + rows[i].user);
    console.log('id: ' + rows[i].password);
  }
 
});
var sql = "INSERT INTO satodb.user (user, password) VALUES ('test','test!2')";
console.log(sql);
connection.query(sql, function (err, rows, fields) {
  if (err) { console.log('err: ' + err); } else {console.log('insert success ');}
 
});

connection.end();