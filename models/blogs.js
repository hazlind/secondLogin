const mongoose = require('mongoose');
//passportLocalMongoose = require('passport-local-mongoose');



var BlogSchema = new mongoose.Schema({
    id:{
        type: String,
        required:true
    },
    content:{
        type:String,
        requierd:true
    }

});


//loginSchema.plugin(passportLocalMongoose);

var Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;