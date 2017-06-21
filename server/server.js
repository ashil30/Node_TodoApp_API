var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.Promise = global.Promise;

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var newTodo = new Todo({
    text: 'Hello mongoose',
    completed: false,
    // completedAt: new Date().getFullYear
});

newTodo.save().then((doc) => {
    console.log('Todo successfully saved ', doc);
}, (err) => {
    console.log('Unable to save Todo ', err);
});