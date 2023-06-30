import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../components/login/login';
import Dashbord from '../components/dashboard/dashbord';
import Bet from '../components/bet/bet';

const Stack = createStackNavigator();
const StackNavigators = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerBackTitle: 'Back',
          headerTitleAlign: 'center',
          animationEnabled: false,
        }}>
        <Stack.Screen
          component={Login}
          name="opening"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Dashbord}
          name="Dashboard"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Bet}
          name="Bet"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigators;
