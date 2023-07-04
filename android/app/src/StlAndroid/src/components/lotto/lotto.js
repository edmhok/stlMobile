import {View, Text, TouchableOpacity, Button} from 'react-native';
import React, {useState} from 'react';
import {LottoStyle as style} from './lotto.style';
import DatePicker from 'react-native-date-picker';

export default function Lotto() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false)
  const [lottoLogs, setLottoLogs] = useState([]);
  

  const SearchLogs = () => {
    const newData = [...lottoLogs, {date}];
    setLottoLogs(newData);
    setDate(date);
  };

  return (
    <View style={style.container}>
      <View style={style.contentBox}>
        <Text style={style.title}>Lotto Result</Text>
        
      <Button title="Pick a Date" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        mode="date"
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      </View>
        <TouchableOpacity style={style.addOpacity} onPress={SearchLogs}>
          <Text style={style.btnText}>Search</Text>
        </TouchableOpacity>
    
        <View style={style.horizontalLines} />
        <View style={style.resTable}>
          {lottoLogs.map((logs, index) => (
            <View key={index} style={style.resTab}>
              <Text style={style.logsText}>11AM</Text>
              <View style={style.resView}>
                <Text style={style.logsText}>L2 - {logs.resultL2}</Text>
                <Text style={style.logsText}>S3 - {logs.resultS3}</Text>
                <Text style={style.logsText}>Ez2 - {logs.resultEz2}</Text>
              </View>
              <Text style={style.logsText}>4PM</Text>
              <View style={style.resView}>
                <Text style={style.logsText}>L2 - {logs.resultL2}</Text>
                <Text style={style.logsText}>S3 - {logs.resultS3}</Text>
                <Text style={style.logsText}>Ez2 - {logs.resultEz2}</Text>
              </View>
              <Text style={style.logsText}>9PM</Text>
              <View style={style.resView}>
                <Text style={style.logsText}>L2 - {logs.resultL2}</Text>
                <Text style={style.logsText}>S3 - {logs.resultS3}</Text>
                <Text style={style.logsText}>Ez2 - {logs.resultEz2}</Text>
              </View>
            </View>
            ))}
        </View>
    </View>
  );
}

