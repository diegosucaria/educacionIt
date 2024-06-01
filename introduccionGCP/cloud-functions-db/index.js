const functions = require('@google-cloud/functions-framework');
const escapeHtml = require('escape-html');
const mysql = require('mysql');

const con = mysql.createConnection({
  user: 'diego',
  password: 'password',
  database: 'dbprueba',
  socketPath: '/cloudsql/educacion-it-may24:southamerica-east1:cloudsqlprueba'
});


functions.http('helloHttp', (req, res) => {
  con.query("SELECT * FROM employees", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(JSON.stringify(result,'',' '));
  });
});
