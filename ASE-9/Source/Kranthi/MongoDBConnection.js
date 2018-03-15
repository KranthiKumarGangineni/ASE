// Importing MongoClient
var mongoClient = require('mongodb').MongoClient;

// Importing Assert
var assert = require('assert');

// Mongo DB Url
var url = 'mongodb://kranthi:krithika@ds131139.mlab.com:31139/kranthi_db';

//
mongoClient.connect(url, function (err,db) {
    assert.equal(null, err);
    console.log("Successfully Connected to Server");
    db.close();
})