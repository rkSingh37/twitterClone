const express=require('express');
const app=express();
const router=express.Router();
const User=require("../../../Model/UserSchema");
const Post=require("../../../Model/PostSchema");

app.use(express.json());
router.post("/",async (req,res,next)=>{
    console.log('the body is',req.body);
    if (!req.body.content){
        return res.status(400).send("Fuck u");
    }
    // console.log(req.body.tweetContents);
    Post.create(req.body).then(resp=>{
        if (resp){
            return res.status(201).send({success: true, post: resp});
        }
    }).catch(err=>console.log(err));
    
});

router.get("/allPost",async (req,res,next)=>{
    try{
        await Post.find({}).populate('postedBy').then(data=>{
            if (data){
                console.log(data);
                return res.status(200).send({success: true, post: data});
            }
        })
    }catch(err){
        return res.status(400).send({failure: true, message: err});
    }
    
})

module.exports=router;