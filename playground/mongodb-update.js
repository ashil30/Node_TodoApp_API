// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) { console.log('Unable to connect to MongoDB server'); }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({ _id: new ObjectID('59477c8e572977a4a5f8cb15') }, {
    //     $set: {
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({ _id: new ObjectID('5945146f2a033a397042d791') }, {
        $set: {
            name: 'Jaydp'
        }
    }, {
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


    db.close();
});