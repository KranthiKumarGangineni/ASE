/**
 * Created by Kranthi on 15/03/2018.
 */

// Required Mongo Client
var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');
// Mongo DB URL.
var url = 'mongodb://kranthi:krithika@ds131139.mlab.com:31139/kranthi_db';

mongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    // Sending Database Name to the Get Functions.
    var database = client.db('kranthi_db')
    mongoRetrieveByPhoneNumber(database, function() {
        client.close();
    });
});

// Retrieving User Details by PhoneNumber
var mongoRetrieveByPhoneNumber = function (db,callback) {
    var dataRetrieved = db.collection('kranthi_registration_users').find({"mobileNumber":"224-279-1234"});
    // Iterating the Retrieved Data
    var detail=0;
    dataRetrieved.each(function(err,document) {
        assert.equal(err,null);
        if(document != null)
        {
            detail = detail+1;
            console.log("\nUser Detail "+detail+" for the Searched Mobile Number\n");
            console.log("User Id : " + document.userId);
            console.log("User First Name : " + document.firstName);
            console.log("User Last Name : " + document.lastName);
            console.log("User City : " + document.city);
        }else{
            // If no Documents are present callback()
            callback();
        }
    });
}

