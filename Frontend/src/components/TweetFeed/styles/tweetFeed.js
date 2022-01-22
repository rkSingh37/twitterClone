import styled from "styled-components/native";
import {View,Button,Text,Image} from 'react-native';

export const Container=styled.View`
    display: flex;
    flex-direction: row;
    padding: 5px;
    min-height: 100px;
    width: 100%;
    // border: 1px solid grey;
`

export const Icon=styled.Image`
    border-radius: 50%;
    margin-left: 5px;
    height: 30px;
    width: 30px;
    margin-right: 10px;
`
export const TweetBody=styled.View`
    margin-left: 5px;
    // flex:1;
`
export const TweetHeader=styled.View`
    color: grey;
    display: flex;
    flex-direction: row;
    marginBottom: 10px;
    &:first-child{
        margin-right: 10px;
    }
`
export const AllPostContainer=styled.View`
    
`
export const ActivityContainer=styled.View`
display: flex;
margin-top: 15px;
flex-direction: row;
&:not(:last-child){
    margin-right: 15px;
}

`