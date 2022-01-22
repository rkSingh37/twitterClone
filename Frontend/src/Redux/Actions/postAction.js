import api from "../../api"
import React from "react"
import { postConstants } from "../../constants/postConstants"

export const postingPost=(post,user)=>async (dispatch)=>{
    try{
        dispatch({type: postConstants.POSTING_REQUEST});
        console.log('the post is',post);
        const {data}=await api.post('/api/posts',{
            content: post.trim(),
            postedBy: user._id
        })
        if (data){
            dispatch({type: postConstants.POST_POSTED,payload: data});
            console.log('the data we get from post api is',data);
        }
        
    }catch(err){
        dispatch({type: postConstants.POSTING_FAILURE});
    }
    
}

export const extractAllPosts=()=>async (dispatch)=>{
    try{
        
    }catch(err){

    }
}