console.log('this file contains mongodb exercises');

var mongoose = require('mongoose');
var settings = require('./settings');
mongoose.Promise = require('bluebird');

mongoose.connect(settings.mongoUrl, function () {
    console.log('Connection with the database had been made.');
});

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    surname: String,
    birthday: Date,
    updateAt: Date,
});

userSchema.methods.greet = function (name) {
    console.log('Hello ' + name + ' from ' + this.name + '!');
};

userSchema.methods.sayAge = function () {
    var today = new Date();
    var age = today.getFullYear() - this.birthday.getFullYear();
    console.log(' I am ' + age + ' years old ');
};

userSchema.pre('save', function (next) {
    this.updateAt = new Date();
    console.log('Saving user' + this.name);
    next(new Error('Something went South'));
})

var User = mongoose.model('User', userSchema);

var bob = new User({
    name: 'Bob',
    birthday: new Date(1987, 11, 25),
});

console.log(bob.id);
bob.greet('Anna');
bob.sayAge();

bob.save().then(() => {
    console.log('User successfully saved');
}).catch((err) => {
    console.error('Error in saving the user: ' + err);
});

// User.findOne({name: 'Bob'}).exec()
//   .then((user) => {
//     return user.remove();
// })
//   .then(data => console.info('User successfully removed'))
//   .catch(err => console.error(err));
   
//   User.remove({name: 'Bob'}).then().catch();

var express = require('express');
var app = express();

app.listen(8080, function () {
    console.info('My server is up and running.');
});




