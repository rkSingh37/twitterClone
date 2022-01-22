const express=require('express');
const database=require("./database");
const app=express();
const cors=require('cors');
const registerRoute=require("./routes/registerRoute");
const loginRoutes=require("./routes/loginRoute");
const postApiRoute=require("./routes/api/posts/post");
// app.use(express.urlencoded());
app.use(express.json());
// app.use(cors());
// app.get('/', function(req, res) {
    

//     res.send('cors problem fixed:)');
// });

app.use(function (req, res, next) {
    //Enabling CORS
    console.log("cors middleware")
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    });

app.use("/register",registerRoute);
app.use("/login",loginRoutes);
app.use('/api/posts',postApiRoute);
app.get("/",(req,res,next)=>{
    res.send("Hello there");
});
app.listen(8000,()=>{
    console.log("Server running at 8000");
})