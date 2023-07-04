import {View, Text, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import {LogsStyle as style} from './betlogs.style';
import {Picker} from '@react-native-picker/picker';
import { DatePickerInput } from 'react-native-paper-dates';

export default function BetLogs() {
  const [inputDate, setInputDate] = useState(new Date());
  const [selectedSched, setSelectedSched] = useState([]);
  const [betLogs, setBetLogs] = useState([]);
  
  const SearchLogs = () => {
    const newData = [...betLogs, {inputDate, selectedSched}];
    setBetLogs(newData);
    setInputDate(inputDate);
    setSelectedSched(selectedSched);
  };

  return (
    <View style={style.container}>
      <View style={style.contentBox}>
        <Text style={style.title}>Bet Logs</Text>
          <View style={style.formInput}>
              <DatePickerInput
                locale="en"
                label="Select a date"
                value={inputDate}
                onChange={(d) => setInputDate(d)}
                // inputMode="start"
              />
          </View>
          <View style={style.formInput}>
          <Text style={style.label}>Draw Time</Text>
            <View style={style.schedNumber}>
              <Picker
                selectedValue={selectedSched}
                onValueChange={selectedSched => setSelectedSched(selectedSched)}
                style={style.drop}>
                <Picker.Item label="11AM" value="11AM" />
                <Picker.Item label="4PM" value="4PM" />
                <Picker.Item label="9PM" value="9PM" />
              </Picker>
            </View>
          </View>
      </View>
            <TouchableOpacity style={style.addOpacity} onPress={SearchLogs}>
              <Text style={style.btnText}>Search</Text>
            </TouchableOpacity>
        
        <View style={style.horizontalLines} />
        <View style={style.resTable}>
          {betLogs.map((logs, index) => (
            <View key={index} style={style.resView}>
                <View style={{width:250}}>
                <Text style={style.logsText}>Date: {logs.inputDate}</Text>
                <Text style={style.logsText}>Transaction No: 000xxx</Text>
                <Text style={style.logsText}> ABC - ₱{150} | S3</Text>
                <Text style={style.logsText}> ABC - ₱{50} | L2(3D)</Text>
                <Text style={style.logsText}>Total : ₱{100}</Text>
                <Text style={style.logsText}>Time:{selectedSched}</Text>
                </View>
                <View style={style.rightC}>
                  <TouchableOpacity style={style.btnVoid} onPress={{}}>
                    <Text style={style.btnText}>Void</Text>
                  </TouchableOpacity>
                </View>
            </View>
          ))}
        </View>
    </View>
  );
}
