const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsDB';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  const collection = db.collection('fruits');

  const db = client.db(dbName);

  client.close();
});

const insertDocuments = function(db, callback){
    const collection = db.collection('fruits');
    collection.insertMany([
        {a:1}, {a:2}, {a:3}
    ], function(err, fruits){
        assert.equal(err, null);
        assert.equal(result.result.n);
        assert.equal(result.ops.length);
        console.log("inserted 3 documents into the collection");
        callback(fruits);
    });
}