var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.Promise = global.Promise;

// var Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });

// var newTodo = new Todo({
//     text: '    Hello mongoose   ',
//     completed: false,
//     // completedAt: new Date().getFullYear
// });

// newTodo.save().then((doc) => {
//     console.log('Todo successfully saved ', doc);
// }, (err) => {
//     console.log('Unable to save Todo ', err);
// });

var user = mongoose.model('Users', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

var newUser = new user({
    email: 'anonymous17@hackernoon.com'
});

newUser.save().then((doc) => {
    console.log('new user successfully saved ', doc);
}, (err) => {
    console.log('unable to save user', e);
});