import { userConstants } from "../../constants/userConstants";

const initialState={
    loggedIn: false,
    error: ""
}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case userConstants.LOGIN_SUCCESS:
            console.log("success action received");
            return {...action.payload,loggedIn: true};
        case userConstants.LOGIN_FAILURE:
            return {...action.payload};
        case userConstants.LOGIN_EXTRACT:
            return {...action.payload,loggedIn: true}
        default:
            return state;
        
    }
}

export default userReducer;
