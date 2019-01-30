const express = require('express');
const graphqlHTTP = require('express-graphql');
//const schema = require('./schema');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./schema/schema');

// Create a new Express application
const app = express();
app.use(cors());

// Connect mongoDB
//mongoose.connect('mongodb://localhost:27017/graphQLTest', {useNewUrlParser: true});
mongoose.connect('mongodb://root:root123@ds253094.mlab.com:53094/lyricaldb', {useNewUrlParser: true});
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

// middleware
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

// TODO: fix this hardcoded port
app.listen(4000, () => {
  console.log('Now listening for requests on port 4000');
});