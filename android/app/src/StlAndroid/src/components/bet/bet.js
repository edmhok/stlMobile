import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {BetStyle as style} from './bet.style';
import {Picker} from '@react-native-picker/picker';
import {StyleSheet} from 'react-native';
import { ListViewComponent } from 'react-native';

export default function Bet() {
  const [selectedSched, setSelectedSched] = useState([]);
  const [selectedGMode, setSelectedGMode] = useState([]);
  const [number, setNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [betLogs, setBetLogs] = useState([]);

  const AddBet = () => {
    const newData = [...betLogs, {selectedSched, selectedGMode, number, amount}];
    setBetLogs(newData);
    setSelectedSched('');
    setSelectedGMode('');
    setNumber('');
    setAmount('');
  };

  return (
    <View style={style.Container}>
        <View style={style.headerPart}>
          <View>
            <Text style={style.betTitle}>Bet</Text>
          </View>
          <TouchableOpacity style={style.saveOpacity}>
            <Text style={style.btnText}>Save</Text>
          </TouchableOpacity>
        </View>
        <View>
        <Text style={style.betTotal}>Total: ₱{150}</Text>
        </View>
      <View style={style.contentBox}>
        <View style={{flex: 1}}>
          <View style={style.formInput}>
            <Text style={style.label}>Schedule</Text>
            <View style={style.schedNumber}>
              <Picker
                selectedValue={selectedSched}
                onValueChange={selectedSched => setSelectedSched(selectedSched)}
                style={style.drop}>
                <Picker.Item label="11AM" value="11AM" />
                <Picker.Item label="4PM" value="4PM" />
                <Picker.Item label="9PM" value="9PM" />
              </Picker>
              <Text style={style.label}>Number</Text>
              <TextInput
                mode="outlined"
                style={style.numberInput}
                placeholder="Number"
                placeholderTextColor="#777777"
                value={number}
                keyboardType="numeric"
                onChangeText={number => setNumber(number)}
                />
            </View>
          </View>
        </View>
        <View style={{flex: 1}}>
          <Text style={style.betTotal}>Game Mode</Text>
          <View style={style.formInput}>
            <View style={style.schedNumber}>
              <Picker
                selectedValue={selectedGMode}
                onValueChange={selectedGMode => setSelectedGMode(selectedGMode)}
                style={style.drop}>
                <Picker.Item label="L1" value="L1" />
                <Picker.Item label="L2" value="L2" />
                <Picker.Item label="L3" value="L3" />
              </Picker>
              <Text style={style.label}>Amount</Text>
              <TextInput
                mode="outlined"
                style={style.numberInput}
                placeholder="Amount"
                placeholderTextColor="#777777"
                value={amount}
                keyboardType="numeric"
                onChangeText={amount => setAmount(amount)}
                />
            </View>
          </View>
        </View>
      </View>

            <TouchableOpacity style={style.addOpacity} onPress={AddBet}>
              <Text style={style.btnText}>Add</Text>
            </TouchableOpacity>
        
        <View style={style.horizontalLines} />
        <View style={style.betTable}>
          {betLogs.map((logs, index) => (
            <View key={index} style={style.resView}>
                <View style={{width:250}}>
                  <Text style={style.betLogsText}>Time: {logs.selectedSched}</Text>
                  <Text style={style.betLogsText}>Game Mode: {logs.selectedGMode}</Text>
                  <Text style={style.betLogsText}>Number: {logs.number}</Text>
                  <Text style={style.betLogsText}>Amount: {logs.amount}</Text>
                </View>
                <TouchableOpacity style={style.btnDel} onPress={{}}>
                  <Text style={style.btnText}>Delete</Text>
                </TouchableOpacity>
                <View style={style.botLine}></View>
            </View>
          ))}
      </View>
    </View>
  );
}
