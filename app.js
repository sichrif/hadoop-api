var express = require('express');
var app = express();

// Get MongoClient
var MongoClient = require('mongodb').MongoClient;

// db url, collection name and db name
const dburl = 'mongodb://localhost:27017';
const dbname = 'hadoop';
const collname = 'books';

 first = async (res) =>{
// connect to your cluster
const client = await MongoClient.connect(dburl, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});
// specify the DB's name
const db = client.db('hadoop');
// execute find query
const items = await db.collection('books').find({},{'_id':false}).toArray();
client.close();

res.send(items);
 }

// process root url '/'
app.get('/', function(req, res) {
    first(res);
});

// listen on port 3000
app.listen(5000, function() {
  console.log('Example app listening on port 5000!')
});