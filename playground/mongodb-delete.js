// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').deleteMany({text: 'aaaaa'}).then((result) => {
  //   console.log(result);
  // });

  
  // db.collection('Todos').deleteOne({text: 'abcd'}).then((result) => {
  //   console.log(result);
  // });

  
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Aj'});

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5c49e17b8ea5f62ad72daccc")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  // db.close();
});
