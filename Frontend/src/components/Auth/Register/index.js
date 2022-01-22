import React,{useState} from 'react'
// import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import {Header,Container,Input,ViewArea,ButtonContainer,ButtonText,InfoText} from '../styles/register'

import { useSelector,useDispatch } from 'react-redux';
import { register } from '../../../Redux/Actions/userAction';

const Register = ({navigation}) => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [fn,setFn]=useState('');
    const [ln,setLn]=useState('');
    const dispatch=useDispatch();
    const submitRegister=(fn,ln,username,email,password)=>{
        console.log("submit button pressed");
        dispatch(register(fn,ln,username,email,password));
    }
    return (
        <Container>
            <ViewArea>
                <Header>Sign Up</Header>
                <Input placeholder="Enter First Name" onChangeText={setFn} value={fn}/>
                <Input placeholder="Enter Last Name" onChangeText={setLn} value={ln}/>
                <Input placeholder="Enter email" onChangeText={setEmail} value={email}/>
                <Input placeholder="Enter password" onChangeText={setPassword} value={password}/>
                
                <InfoText style={{marginTop: '10'}} onClick={()=>navigation.navigate('Login')}>Already have an account? Sign In</InfoText>
                <ButtonContainer onPress={()=>submitRegister(fn,ln,userName,email,password)}>
                    <ButtonText>Sign Up</ButtonText>
                </ButtonContainer>
            </ViewArea>
            
        </Container>
    )
}



export default Register;
