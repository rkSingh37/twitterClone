import React from 'react'
// import { View, Text } from 'react-native'
import { Container } from './styles/header'
import SearchBar from '../SearchBar'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const Header = ({screenName}) => {
    const navigation=useNavigation();
    const SecondItem=()=>{
        if (screenName==="Home"){
            return (
                <>
                    <Ionicons name="logo-twitter" style={{fontSize: 30}} color="#1DA1F2"/>
                    <FontAwesome5 name="hand-sparkles" style={{fontSize: 25}} />
                </>
            )
        }else if(screenName==="Notification"){
            return <h1>Notification</h1>
        }else{
            return (
                <>
                <SearchBar screenName={screenName}/>
                <Ionicons name="settings-outline" style={{fontSize: 30}}/>
            </>
                )
        }
    }
    return (
        <Container>
            <Ionicons name="person-circle-outline" style={{fontSize: 30}} onPress={()=>navigation.toggleDrawer()}/>
            <SecondItem/>
            
        </Container>
    )
}



export default Header
