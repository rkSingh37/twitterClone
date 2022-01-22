import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
const Stack=createNativeStackNavigator();

const AuthRoute=()=>{
    return (
        <Stack.Navigator initialRouteName="Register" screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Register" component={Register}/>
                    <Stack.Screen name="Login" component={Login}/>
                </Stack.Navigator>
    )
}
export default AuthRoute;