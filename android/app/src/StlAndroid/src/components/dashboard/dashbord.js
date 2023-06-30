import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {DashboardStyle as style} from './dashboard.Style';

export default function Dashbord({navigation}) {
  return (
    <View style={style.dashboarContainer}>
      <View style={style.content}>
        <View style={style.dashboardBtns}>
          <TouchableOpacity
            style={style.buttonOpacity}
            onPress={() => navigation.navigate('Bet')}>
            <Text style={style.buttonText}>Bet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.buttonOpacity}>
            <Text style={style.buttonText}>Expenses</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
