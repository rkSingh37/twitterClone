const express=require('express');
const router=express.Router();
const User=require("../Model/UserSchema");
const bcrypt=require('bcrypt');
// const User = require('../Model/UserSchema');
const app=express();

app.use(express.json());

router.post("/",async (req,res,next)=>{
    console.log(req.body);
    var firstName = req.body.firstName.trim();
    var lastName = req.body.lastName.trim();
    var username = req.body.username.trim();
    var email = req.body.email.trim();
    var password = req.body.password;
    let user;
    //check if user is already present
    if (firstName && email && lastName && password && username){
        user=await User.findOne({
            $or:[
                {username: username},
                {email: email}
            ]
        }).catch(err=>res.send({error: true,message: "Something went wrong. Please try again after some time."}));
        //user is not present
        if (user ==null){
            let data=req.body;
            data.password=await bcrypt.hash(password,10);
            await User.create(data)
                .then(userResp=>res.send({success: true,message:"Your Profile has been created successfully.",user: userResp}))

        }
        //user already exists
        else{
            if (user.email===email){
                res.status(422).send({AlreadyExists: true,message: "Email already exists."});
            }else{
                res.status(422).send({AlreadyExists: true,message: "username already exits."});
            }
        }
    }else{
        res.send({error: true, message: "Make sure you typed the right field."})
    }
    


});

module.exports=router;