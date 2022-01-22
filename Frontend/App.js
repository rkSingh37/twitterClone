import React from 'react'
import config from './src/Redux/Store/config'
import { StyleSheet, Text, View,SafeAreaView,StatusBar,Platform } from 'react-native'
import { Provider } from 'react-redux';
import Register from './src/components/Auth/Register';
import Login from './src/components/Auth/Login';
import Test from './src/components/Test/test';
import Routes from './src/Routes';
// import { Text } from 'react-native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

const store=config();

const App = () => {
  return (
    <SafeAreaView style={styles.AndroidSafeView}>
      <Routes/>
    </SafeAreaView>
  )
}

export default ()=>(
  <Provider store={store}>
    <App/>
  </Provider>
)
const styles = StyleSheet.create({
  AndroidSafeView: {
    flex:1,
    paddingTop: Platform.OS=="android"?StatusBar.currentHeight:0

  }

});