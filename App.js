import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Layout1 from './src/components/layout1';
import Layout2 from './src/components/layout2';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Layout3 from './src/components/layout3';
const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer >
    //    <Stack.Navigator screenOptions={{headerShown: false}}>
    //     <Stack.Screen name="Layout1" component={Layout1} />
    //     <Stack.Screen name="Layout2" component={Layout2} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // // <Layout2/>
    <Layout3/>
  );
}
