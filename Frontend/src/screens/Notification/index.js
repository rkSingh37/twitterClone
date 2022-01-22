import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/Header'
import TweetIcon from '../../components/TweetIcon'

const Notification = () => {
    return (
        <View>
                        <Header screenName="Notification"/>
            <Text>Notification</Text>
            <TweetIcon/>
        </View>
    )
}

export default Notification
