import React,{useState} from 'react'
// import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import {Header,Container,Input,ViewArea,ButtonContainer,ButtonText,InfoText} from '../styles/register'

import { useSelector,useDispatch } from 'react-redux';
import { login} from '../../../Redux/Actions/userAction';

const Register = ({navigation}) => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const dispatch=useDispatch();
    const submitLogin=(email,password)=>{
        console.log("submit button pressed");
        dispatch(login(email,password));
    }
    return (
        <Container>
            <ViewArea>
                <Header>Sign In</Header>
                <Input placeholder="Enter email" onChangeText={setEmail} value={email}/>
                <Input placeholder="Enter password" onChangeText={setPassword} value={password}/>
                
                <InfoText style={{marginTop: '10'}} onClick={()=>navigation.navigate('Register')}>Don't have an account? Register</InfoText>
                <ButtonContainer onPress={()=>submitLogin(email,password)}>
                    <ButtonText>Sign Up</ButtonText>
                </ButtonContainer>
            </ViewArea>
            
        </Container>
    )
}



export default Register;
