import React from 'react'
import {createDrawerNavigator,DrawerContentScrollView,
    DrawerItemList,
    DrawerItem} from '@react-navigation/drawer';
import { View, Text } from 'react-native'
import UserAuth from './UserAuth';
import Notification from '../screens/Notification';
import DrawerProfile from '../components/DrawerProfile';
import { useSelector } from 'react-redux';

const Drawer=createDrawerNavigator();
const DrawerFlow = () => {
    const user=useSelector(state=>state.user);
    const CustomDrawerContent=(props)=>{
        return (
            <DrawerContentScrollView {...props}>
                {/* <DrawerItemList {...props} /> */}
                <DrawerProfile user={user}/>
                <DrawerItem
                    label="Close drawer"
                    onPress={() => props.navigation.closeDrawer()}
                />
                <DrawerItem
                    label="Toggle drawer"
                    onPress={() => props.navigation.toggleDrawer()}
                />
            </DrawerContentScrollView>
        )
    }
    return (
        <Drawer.Navigator initialRouteName={UserAuth} drawerContent={(props)=><CustomDrawerContent {...props}/>} screenOptions={{headerShown: false}}>
                    <Drawer.Screen name="UserAuth" component={UserAuth}/>
                </Drawer.Navigator>
    )
}

export default DrawerFlow
