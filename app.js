// imports
const express = require('express')
const bodyParser = require('body-parser')
const PORT = 3000

// create express app
const app = express()

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type: application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
  res.json('message: Welcome to Easy Notes: Take notes quickly. Organize and keep track of all your notes.')
});

// Configuring the database
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert')
const url = 'mongodb://@ds141924.mlab.com:41924/notes-app'
const dbName = 'notes-app'

const mongoose = require('mongoose')
mongoose.connect(url, {user: 'ryanseymour', pass: 'Maryjean@52'})




// Connecting to the database
MongoClient.connect(url, {user: 'ryanseymour', pass: 'Maryjean@52'}, (err, client) => {
  assert.equal(null, err);
  console.log('Connected successfully to the server');

  const db = client.db(dbName);

  client.close()
})

// Require Notes routes
require('./app/routes/note.routes.js')

// listen for requests
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})