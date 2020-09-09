const express = require('express')
var fs = require('fs');
const path = require('path');
const app = express()


app.get('/', function (req, res) {
  var data = JSON.stringify(JSON.parse(fs.readFileSync('./data.json', 'utf8')));
  res.send(data);
})

app.get('/g', function (req, res) {
  res.redirect('https://www.google.com/')
})

app.listen(5000, function () {
  console.log('APP running on port 5000')
})