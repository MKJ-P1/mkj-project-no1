const functions = require('firebase-functions');
const express = require('express');
const engines = require('consolidate');

const app = express();
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

const facts = [
  {text: "1+1 = 2"},
  {text: "真実はいつも一つ"},
  {text: "工藤新一はコナン"}
];

app.get('/', (request, response) => {
  response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  response.render('index', { facts });
})

exports.app = functions.https.onRequest(app);
