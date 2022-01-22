import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/Header'
import TweetIcon from '../../components/TweetIcon'

const Messages = () => {
    return (
        <View>
            <Header screenName="Messages"/>
            <Text>Messages</Text>
            <TweetIcon screenName="Messages"/>
        </View>
    )
}

export default Messages
