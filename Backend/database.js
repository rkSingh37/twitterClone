const mongoose=require('mongoose');

class Databse{
    constructor(){
        this.connect();
    }
    connect(){
        mongoose.connect('mongodb+srv://admin:12aAA12$$@cluster0.glirf.mongodb.net/Twitter?retryWrites=true&w=majority')
                .then(()=>console.log("database connected!"))
                .catch(()=>console.log("Database can not be connected. Something went wrong"));
    }
}

module.exports=new Databse();
