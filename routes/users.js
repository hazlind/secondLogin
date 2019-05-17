const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load User model
const db = require('../models/index');
var UserModel=db.User;
var BlogModel=db.Blog;
const { forwardAuthenticated } = require('../config/auth');

// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// Register Page
router.get('/register', forwardAuthenticated, (req, res) => res.render('register'));

// Register
router.post('/register', (req, res) => {
  console.log('\n registering ');

  var login=new UserModel({
    name:req.body.name,
    email:req.body.username,
    password:req.body.password
});
bcrypt.genSalt(10,function(err,salt){
   bcrypt.hash("login.password",salt,function(err,hash){
       if(err){
           console.log(err);
       }
       else{
           login.password =hash;
     login.save(function(err,data){
         if(err){
             console.log(err);
         }
         else
         {
             console.log(data);
             res.render('dashboard');
         }

     });
       }


   });
});
  console.log('\n registered');
});

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});





module.exports = router;