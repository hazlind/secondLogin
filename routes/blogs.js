const express=require('express');
const router=express.Router();
const mongo=require('mongodb');
//mongoose call
const db =require('../models');
//const BlogModel=db.Blog;      
var url ='mongodb://localhost:27017/blogs' 
const { forwardAuthenticated } = require('../config/auth');//

//getBlogs
router.get('/',forwardAuthenticated,(req,res)=>{
    res.render('blog');
  })

//add data
router.post('/', function(req,res){
    db.Blog.create(req.body)
         .then(res.redirect('/getBlog'))
         .catch((error)=>res.send(error));
         console.log('\n\n\ndata added!!!!')
});



//get data
router.get('/getdata', function(req,res){
    console.log('\n\n inside get data');
    db.Blog.find(function (err,data) {
        console.log(data);
        if(err){
            console.log(err);
        }else{
            console.log(data);
            res.render('allblog',{data:"hello"});
        }
    })

});

router.get('/:id',(req,res)=>{
    const id = req.params.id;
     db.Blog.findById(id)
      .then((blogs)=>res.json(blogs))
      .catch((err)=> (err));
});

//update
router.put('/:id',(req,res)=>{
  
    db.Blog.findByIdAndUpdate({_id:req.params.id}, req.body)
     .then((blogs)=>res.json(blogs))
      .catch((err)=> (err));
   })
   
   
   //delete findBYIDandDELTE
   
   router.delete('/:id',(req,res)=>{
     db.Blog.remove({_id: req.params.id})
     .then((blog)=>res.send("removed"))
   });



  //to go to /getblog
 /*router.post('/addtolist',function(req,res){
  console.log(req.body);
  var blog=new BlogModel({
      content:req.body.content,
      //description:req.body.description
  });
  blog.save(req.body)
      .then(function(newBlog){
          res.json(newBlog);
      })
      .catch(function(err){
          res.send(err);
      })
    res.redirect('/getBlog');
  });
  
  
  //find by id
  router.get ('/:id',function(req,res){
  var id=req.params.id;
  console.log(id);
  rest.findById(id)
  .then(function(blogs){
      res.json(blogs);
  })
      .catch(function(err){
          res.send(err);
      })
  });
  

router.get('/',function(req,res){
      rest.find()
          .then(function(data){
              res.json(data);
          })
          .catch(function(err){
          res.send(err);
          })
});


router.post('/addtolist',function(req,res){
    console.log(req.body);
    var blog=new BlogModel({
        content:req.body.content,
        //description:req.body.description
    });
    restm.save(req.body)
        .then(function(newBlog){
            res.json(newBlog);
        })
        .catch(function(err){
            res.send(err);
        })

});


//find by id
router.get ('/:id',function(req,res){
    var id=req.params.id;
    console.log(id);
    rest.findById(id)
    .then(function(blogs){
        res.json(blogs);
    })
        .catch(function(err){
            res.send(err);
        })
});


//update route
router.put('/:id',function(req,res){
    rest.findByIdAndUpdate({id:req.params.id},req.body)
});



//delete
router.delete('/:id',function(req,res){
    rest.remove({_id:req.params.id})
        .then(function()
        {
            res.send("deleted");
        })
        .catch(function(err){
        res.send(err);
    })
});*/

module.exports=router;