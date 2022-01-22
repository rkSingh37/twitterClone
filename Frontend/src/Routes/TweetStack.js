import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home';
import Messages from '../screens/Messages';
import Search from '../screens/Search';
import Notification from '../screens/Notification';
import Tweet from '../components/Tweet';
import Inbox from '../components/Inbox';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TweetSubmitButton from '../components/TweetSubmitButton';

const Stack=createNativeStackNavigator();

const customHeaderStack=(props)=>{

}

export const HomeTweetStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="Tweet" options={({ route,navigation: {goBack} }) => ({
                title: false,
                headerStyle: {
                    backgroundColor: 'white',
                    height: 60
                },
                headerLeft: () => (<Ionicons name="close" style={{fontSize: 30}} onPress={()=>goBack()}/>),
                headerRight: ()=> (<TweetSubmitButton post={route.params?.post}/>)
            })} component={Tweet}/>
        </Stack.Navigator>
    )
}

export const MessageStack=()=>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Messages" component={Messages} options={{headerShown: false}}/>
            <Stack.Screen name="Inbox" component={Inbox} />
        </Stack.Navigator>
    )
}

export const SearchTweetStack=()=>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Search" component={Search} options={{headerShown: false}}/>
            <Stack.Screen name="Tweet" component={Tweet}/>
        </Stack.Navigator>
    )
}
export const NotificationTweetStack=()=>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Notification" component={Notification} options={{headerShown: false}}/>
            <Stack.Screen name="Tweet" component={Tweet}/>
        </Stack.Navigator>
    )
}