/*const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/logindatabase');


module.exports.User = require('./user');
module.exports.Blog=require('./blogs');

*/

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hotelsapi',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Database is connected");
    }
});




mongoose.Promise = Promise;

module.exports.User = require('./user');

module.exports.Blog = require('./blogs');

//module.exports.Seller = require('./sellers');
