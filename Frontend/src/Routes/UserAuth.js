import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { HomeTweetStack } from './TweetStack';
import { MessageStack } from './TweetStack';
import { SearchTweetStack } from './TweetStack';
import { NotificationTweetStack } from './TweetStack';
const Tab=createBottomTabNavigator();
const UserAuth=()=>{
    const bottomTabIcons=({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Notification') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          }else if (route.name==="Search"){
              iconName=focused?'search':'search-outline';
          }else if (route.name==="Messages"){
              iconName=focused?'envelope':'envelope-o';
              return <FontAwesome name={iconName} size={size} color={color}/>
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1DA1F2',
        tabBarInactiveTintColor: 'grey',
        headerShown: false
      })
    return (
          <Tab.Navigator screenOptions={(props)=>bottomTabIcons(props)} initialRouteName="Home">
                    <Tab.Screen name="Home" component={HomeTweetStack}/>
                    <Tab.Screen name="Search" component={SearchTweetStack}/>
                    <Tab.Screen name="Notification" component={NotificationTweetStack}/>
                    <Tab.Screen name="Messages" component={MessageStack}/>
          </Tab.Navigator>
        
    )
}
export default UserAuth;