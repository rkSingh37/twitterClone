const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const PostSchema=new Schema({
    content: {type: String,trim: true},
    postedBy: {type: Schema.Types.ObjectId,ref: 'User'},
    pinned: {type: Boolean},
    likes: [{type: Schema.Types.ObjectId,ref: 'User'}]
},{timestamps: true});

const Post=mongoose.model('Post',PostSchema);

module.exports=Post;