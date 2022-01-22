import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/Header'
import TweetIcon from '../../components/TweetIcon'

const Search = () => {
    return (
        <View>
                        <Header screenName="Search"/>

            <Text>Search</Text>
            <TweetIcon/>
        </View>
    )
}

export default Search
