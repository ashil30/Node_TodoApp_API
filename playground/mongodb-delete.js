// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Exp', (err, db) => {
    if (err) { console.log('Unable to connect to MongoDB server'); }
    console.log('Connected to MongoDB server');

    db.collection('Users').deleteMany({ name: 'Nimesh' }).then((result) => {
        console.log(result);
    });

    db.collection('Todos').deleteOne({ completed: false }).then((result) => {
        console.log(result);
    });
    db.collection('Users').findOneAndDelete({ _id: new ObjectID('594569eb66186719eeae7efc') }).then((result) => {
        console.log(result);
    });



    db.close();
});