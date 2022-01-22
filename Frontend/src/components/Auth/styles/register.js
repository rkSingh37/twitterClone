import styled from "styled-components/native"
import {View,Text,TextInput,TouchableOpacity} from 'react-native'
export const Container= styled.View`
    flex: 1;
    padding: 20px;
    background-color: white;   
`
export const Header=styled.Text`
    font-size: 30px;

`
export const ViewArea=styled.View`
    flex: 1;
    align-items: center
    margin-top: 50%;
    
`

export const Input=styled.TextInput`
    height: 40px;
    border: 2px solid #1DA1F2;
    width: 80%;
    border-radius: 20px;
    margin-top: 20px;
    padding: 10px 20px;
`
export const ButtonContainer = styled.TouchableOpacity`
  margin-top: 30px;
  width: 50%;
  height: 40px;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #1DA1F2;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: white;
`;

export const ErrorMessage=styled.Text`
  font-size: 10px;
  color: red;
`

export const InfoText=styled.Text`
  font-size: 13px;
  color: #1DA1F2;
`