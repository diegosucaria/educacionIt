const functions = require('@google-cloud/functions-framework');
const escapeHtml = require('escape-html');

functions.http('helloHttp', (req, res) => {
  console.log("helloHttp request")
  res.send(`Hello ${escapeHtml(req.query.name || req.body.name || 'World')}!`);
});
