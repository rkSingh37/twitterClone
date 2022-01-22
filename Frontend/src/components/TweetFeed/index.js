import React from 'react'
import { View, Text,FlatList } from 'react-native'
import { Container, Icon, TweetBody,TweetHeader,ActivityContainer } from './styles/tweetFeed'
import Ionicons from 'react-native-vector-icons/Ionicons';
const TweetFeed = ({allData}) => {
    console.log('the data received is',allData);
    const FeedBody=({post})=>{
        console.log(post)
        return (
            <Container>
                <Icon source={require('../../../assets/profilePic.png')}/>
                <TweetBody>
                    <TweetHeader>
                        <View style={{marginRight: 10}}>
                            <Text style={{fontWeight: 'bold', color: 'black'}}>{post.postedBy.firstName} {post.postedBy.lastName}</Text>
                        </View>
                        <View style={{marginRight: 10}}>
                            <Text>@{post.postedBy.username}</Text>
                        </View>
                        <View style={{marginRight: 10}}>
                            <Text>20h</Text>
                        </View>
                    </TweetHeader>
                    <View>
                        <Text>{post.content}</Text>
                    </View>
                    <ActivityContainer>
                        <View>
                            <Ionicons name="heart-outline" />
                        </View>
                        <View>
                            <Ionicons name="heart-outline" />

                        </View>
                        <View>
                            <Ionicons name="heart-outline" />

                        </View>
                    </ActivityContainer>
                </TweetBody>
            </Container>
        )
    }
    const renderItem=({item})=>{
        return <FeedBody post={item}/>
    }
    return (
        <View style={{flex: 1,width: '100%'}}>
            <FlatList
                data={allData}
                renderItem={renderItem}
                keyExtractor={item=>item._id}
                ListFooterComponent={<View style={{height: 80}}/>}
            />
            
        </View>
    )
}

export default TweetFeed
