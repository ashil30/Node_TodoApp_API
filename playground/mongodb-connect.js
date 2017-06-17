// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Exp', (err, db) => {
    if (err) { console.log('Unable to connect to MongoDB server'); }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     _id: 125,
    //     text: 'Something to do',
    //     completed: false

    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        // _id: 122,
        name: 'Jaydp',
        age: 20,
        location: 'Canada',
        // completed: false

    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});