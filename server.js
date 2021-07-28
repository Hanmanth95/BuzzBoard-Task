const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/order');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/orders', orderRoutes);

const mongoUri =
  'mongodb+srv://username:password@cluster0.crabp.mongodb.net/databasename?retryWrites=true&w=majority';
mongoose
  .connect(mongoUri, { useNewUrlParser: true })
  .then(function(db) {
    console.log('connected to mongoDb and server running on port 7400');
    app.listen(7400);
  })
  .catch(function(err) {
    console.log('mongodb connecttion error');
    console.log(err);
  });
