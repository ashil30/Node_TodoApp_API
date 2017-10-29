const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) { console.log('Unable to connect to MongoDB server'); }
    console.log('Connected to MongoDB server');

   

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
