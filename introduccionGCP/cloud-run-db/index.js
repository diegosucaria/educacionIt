const express = require('express');
const app = express();
const mysql = require('mysql');

const port = process.env.PORT || 3000;


const con = mysql.createConnection({
  user: 'diego',
  password: 'password',
  database: 'dbprueba',
  socketPath: '/cloudsql/educacion-it-may24:southamerica-east1:cloudsqlprueba'
});

app.get('/', function (req, res) {
  con.query("SELECT * FROM employees", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(JSON.stringify(result,'',' '));
  });
});

app.listen(port, function () {
   console.log(`Example app listening on port ${port}!`);
});