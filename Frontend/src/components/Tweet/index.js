import React,{useState} from 'react'
import { useEffect } from 'react';
import { View, Text } from 'react-native'
import { Container,PostTweet,IconContainer,ProfileIcon,TextAreaContainer,TextArea } from './styles/tweet'

const Tweet = ({navigation}) => {
    const [post,setPost]=useState('');
    console.log('the post is',post);
    useEffect(()=>{
        console.log('setting navigation props');
        navigation.setParams({post: post});
    },[post]);
    return (
        <Container>
            <PostTweet>
                <IconContainer>
                    <ProfileIcon source={require('../../../assets/profilePic.png')}/>
                </IconContainer>
                <TextAreaContainer>
                    <TextArea multiline numberOfLines={10} onChangeText={setPost} value={post}/>
                </TextAreaContainer>
            </PostTweet>
        </Container>
    )
}

export default Tweet
