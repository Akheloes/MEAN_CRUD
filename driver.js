/**
 * Implementing application to database connection
 */

 const configuration = require('./configuration').configuration;
 const MongoClient = require('mongodb').MongoClient;
 const assert = require('assert');

 //Connection URL
 const url = configuration.database.url;
 
 //Database name
 const dbName = configuration.database.name;
 //Collection name
 const collectionName = configuration.database.collection;

 //Use connect method to connect to the server

 /**
  * Method to insert one document into database
  */
 module.exports.insertDocument = function(document, callback) {
     MongoClient.connect(url, (errorConnection, client) => {
         assert.equal(null, errorConnection);
         const db = client.db(dbName);
         const collection = db.collection(collectionName);
         collection.insertOne(document, (errorInsertion, resultInsertion) => {
             assert.equal(errorInsertion, null);
             client.close();
             callback(errorInsertion, resultInsertion);
         })
     })
 }