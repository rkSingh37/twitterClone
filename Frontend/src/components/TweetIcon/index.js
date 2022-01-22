import React from 'react'
// import { View, Text } from 'react-native'
import { Container } from './styles/tweet'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TweetIcon = ({screenName}) => {
    const navigation=useNavigation();
    const navigate=()=>{
        if (screenName==="Messages"){
            return navigation.navigate('Inbox');
        }
        return navigation.navigate('Tweet');
    }
    return (
        <Container>
            {/* {screenName==="Messages"?(
                <MaterialCommunityIcons name="message-plus-outline" color="#1DA1F2" style={{fontSize: 45}} onPress={()=>navigate()}/>
            ):(
                (<AntDesign name="pluscircle" color="#1DA1F2" style={{fontSize: 45}} onPress={()=>navigate()}/>)

            )} */}
            <AntDesign name="pluscircle" color="#1DA1F2" style={{fontSize: 45}} onPress={()=>navigate()}/>

        </Container>
    )
}


export default TweetIcon
