/**
 * Created by Kranthi on 15/03/2018.
 */

// Required Mongo Client
var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');
// Mongo DB URL.
var url = 'mongodb://kranthi:krithika@ds131139.mlab.com:31139/kranthi_db';

// Mongo Insert Document Function Call.
var mongoInsertDocument = function(db, callback) {
    // Inserting Multiple Records
    db.collection('kranthi_registration_users').insertMany([{
        "userId" : 16261473,
        "firstName" : "Kranthi Kumar",
        "lastName": "Gangineni",
        "mobileNumber" : "224-279-1234",
        "city" : "Kansas"
    },
        {
            "userId" : 16261474,
            "firstName" : "Kranthi",
            "lastName": "Gangineni",
            "mobileNumber" : "224-279-1235",
            "city" : "Chicago"
        },{
            "userId" : 16261475,
            "firstName" : "Kumar",
            "lastName": "Gangineni",
            "mobileNumber" : "224-279-1234",
            "city" : "Texas"
        },
        {
            "userId" : 16261476,
            "firstName" : "Chaitanya",
            "lastName": "Gangineni",
            "mobileNumber" : "224-279-1237",
            "city" : "Dallas"
        },
        {
            "userId" : 16261477,
            "firstName" : "Chaitanya Kumar",
            "lastName": "Gangineni",
            "mobileNumber" : "224-279-1234",
            "city" : "Michigan"
        }], function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the kranthi_registration_users collection.");
        callback();
    });
};

mongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    // Sending Database Name to the Insert Function.
    var database = client.db('kranthi_db')
    mongoInsertDocument(database, function() {
        client.close();
    });
});