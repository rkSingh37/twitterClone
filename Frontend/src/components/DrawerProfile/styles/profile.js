import styled from "styled-components/native";
import {View, Text, Button, Image} from 'react-native';

export const Container=styled.View`
    padding: 10px;
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: white;
    // border-bottom: 1px solid grey;
`

export const ProfilePic=styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

export const ProfileInfo=styled.View`
    margin-left: 20px;

`
export const FullName=styled.Text`
    font-size: 24px;
    // font-family: 700;
`

export const HandlerName=styled.Text`
    font-size: 16px;
    color: grey;

`