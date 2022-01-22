import styled from "styled-components/native";
import {View, Button,Image,TextInput} from 'react-native';

export const Container=styled.View`
padding: 5px;

`
export const PostTweet=styled.View`
    display: flex;
    flex-direction: row;
`

export const IconContainer=styled.View`
`

export const ProfileIcon=styled.Image`
    height: 30px;
    width: 30px;
    border-radius: 50%;
`

export const TextAreaContainer=styled.View`
    flex: 1;
    margin-left: 15px;
`
export const TextArea=styled.TextInput`
font-size: 20px;

`