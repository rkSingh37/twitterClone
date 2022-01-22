const express=require('express');
const bcrypt=require('bcrypt');
const app=express();
const router=express.Router();
const User=require("../Model/UserSchema");

app.use(express.json());
router.post("/",async (req,res,next)=>{
    //const username=req.body.username.trim();
    const email=req.body.email.trim();
    const password=req.body.password.trim();
    let uoe;
    // if (username){
    //     uoe=username;
    // }else{
    //     uoe=email;
    // }
    
    const user=await User.findOne({
        email: email
    }).catch(err=>res.send({error: true, message: err}));
    if (user){
        const match=await bcrypt.compare(password,user.password);
        if (match){
            res.send({success: true,user: user});
        }else{
            res.send({error: true, message: "Wrong password or username"});
        }
        
    }else{
        res.send({error: true, message: "Make sure you types the correct username or email."});
    }
});

module.exports=router;