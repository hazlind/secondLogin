/*const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;*/

const mongoose = require('mongoose');
//passportLocalMongoose = require('passport-local-mongoose');



var UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        requierd:true
    },
     password:{
         type:String,
         required:true
     }

});


//loginSchema.plugin(passportLocalMongoose);

var User = mongoose.model("User", UserSchema);

module.exports = User;