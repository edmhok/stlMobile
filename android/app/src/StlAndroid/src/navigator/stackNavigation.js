import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../components/login/login';
import Dashboard from '../components/dashboard/dashboard';
import Bet from '../components/bet/bet';
import Expenses from '../components/expenses/expenses';
import BetLogs from '../components/betlogs/betlogs';
import Lotto from '../components/lotto/lotto';
import Dsr from '../components/dsr/dsr';
import Soa from '../components/soa/soa';

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
          component={Dashboard}
          name="Dashboard"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Bet}
          name="Bet"
          options={{headerShown: false}}
        />
         <Stack.Screen
          component={Expenses}
          name="Expenses"
          options={{headerShown: false}}
        />
         <Stack.Screen
          component={BetLogs}
          name="BetLogs"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Lotto}
          name="Lotto"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Dsr}
          name="Dsr"
          options={{headerShown: false}}
        />
         <Stack.Screen
          component={Soa}
          name="Soa"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigators;
