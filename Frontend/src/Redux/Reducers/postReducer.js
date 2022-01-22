import React from "react";
import { postConstants } from "../../constants/postConstants";

const initialState={
    post: [{}]
}

const postReducer=(state=initialState,action)=>{
    switch(action.type){
        case postConstants.POSTING_REQUEST:
            return {posting: true};
        case postConstants.POST_POSTED:
            return {...action.payload,postingSuccess: true};
        case postConstants.POSTING_FAILURE:
            return {postingFailure: true}
        case postConstants.FETCHING_POSTS:
            return {fetchingPosts: true}
        case postConstants.FETCHED_POSTS:
            return {...action.payload,fetchedPosts: true};
        default:
            return state;
    }
}

export default postReducer;