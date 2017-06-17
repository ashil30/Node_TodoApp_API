// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Exp', (err, db) => {
    if (err) { console.log('Unable to connect to MongoDB server'); }
    console.log('Connected to MongoDB server');

    db.collection('Users').find({ name: 'Nimesh' }).toArray().then((docs) => {
        console.log("Users");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to locate the todo ', err);
    })
    db.collection('Users').find().count().then((count) => {
        return console.log('Total no. of todo ', count);
    }, (err) => {
        console.log('Something went wrong ', err);
    })


    db.close();
});