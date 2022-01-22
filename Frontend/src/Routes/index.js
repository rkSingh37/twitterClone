import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector,useDispatch } from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import AuthRoute from './Auth';
import UserAuth from './UserAuth';
import { extractUser } from '../Redux/Actions/userAction';
import { userConstants } from '../constants/userConstants';
import DrawerFlow from './Drawer';


const Routes = () => {
    const dispatch=useDispatch();
    
    useEffect(()=>{
        console.log('useEffect is runing')
        const bootstrapAsync = async () => {
            let user;
            
            try {
              user = await AsyncStorage.getItem('userLoginData');
            } catch (e) {
              dispatch({type: userConstants.LOGIN_FAILURE});
            }
            if (user){
                dispatch({ type: userConstants.LOGIN_EXTRACT, payload: JSON.parse(user)});
            }
          };
      
          bootstrapAsync();
    },[])
    const isLoggedIn=useSelector(state=>{
        console.log(state);
        return state.user.loggedIn;
    });
    console.log('the state change',isLoggedIn);
    return (
        <NavigationContainer>
            {!isLoggedIn?(
                <AuthRoute/>
            ):(
                <DrawerFlow/>
            )}
        </NavigationContainer>
    )
}

export default Routes
