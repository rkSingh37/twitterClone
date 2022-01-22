import React from "react";
import api from '../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userConstants } from "../../constants/userConstants";


export const register=(firstName,lastName,username,email,password)=>async (dispatch)=>{
    try{
        const {data}=await api.post("/register",{firstName,lastName,username, email,password});
        if (data.user){
            
            await AsyncStorage.setItem("userLoginData",JSON.stringify(data.user));
            console.log("success");
            dispatch({type: userConstants.LOGIN_SUCCESS,payload: data});
        }else if(data.error){
            console.log("failed")
            dispatch({type: userConstants.REGISTER_FAILURE,payload: {error,message}})
        }
    }catch(err){
        console.log(err);
        dispatch({type: userConstants.LOGIN_FAILURE});
    }
}

export const login=(email,password)=>async (dispatch)=>{
    try{
        const {data}=await api.post("/login",{email,password});
        if (data.user){
            
            await AsyncStorage.setItem("userLoginData",JSON.stringify(data.user));
            console.log("success");
            dispatch({type: userConstants.LOGIN_SUCCESS,payload: data});
        }else if(data.error){
            console.log("failed")
            dispatch({type: userConstants.REGISTER_FAILURE,payload: {error,message}})
        }
    }catch(err){
        console.log(err);
        dispatch({type: userConstants.LOGIN_FAILURE});
    }
}

export const extractUser=()=>async (dispatch)=>{
    try{
        await AsyncStorage.getItem("userLoginData").then(loggedInUser=>{
            dispatch({type: userConstants.LOGIN_EXTRACT,payload: JSON.parse(loggedInUser)});
        }).catch(err=>dispatch({type: userConstants.LOGIN_FAILURE}))
    }catch(err){
        console.log(err);
        dispatch({type: userConstants.LOGIN_FAILURE});
    }
}