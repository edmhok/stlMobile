import {View, Text, TouchableOpacity, } from 'react-native';
import React, {useState} from 'react';
import {DsrStyle as style} from './dsr.style';
import DatePicker from 'react-native-date-picker';


export default function Dsr() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false)
  const [dsrLogs, setDsrLogs] = useState([]);
  
  const SearchLogs = () => {
    const newData = [...dsrLogs, {date}];
    setDsrLogs(newData);
    setDate(date);
  };

  return (
    <View style={style.container}>
      <View style={style.contentBox}>
      <Text style={style.title}>Daily Sales Report</Text>
        
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
          {dsrLogs.map((logs, index) => (
            <View key={index} style={style.resView}>
              <Text style={style.timeText}>11AM</Text>
                <Text style={style.logsText}>L2 - {logs.resultL2}</Text>
                <Text style={style.logsText}>S3 - {logs.resultS3}</Text>
                <Text style={style.logsText}>Ez2 - {logs.resultEz2}</Text>
                <Text style={style.totalText}>Total: ₱{logs.total}</Text>

                <Text style={style.timeText}>4PM</Text>
                <Text style={style.logsText}>L2 - {logs.resultL2}</Text>
                <Text style={style.logsText}>S3 - {logs.resultS3}</Text>
                <Text style={style.logsText}>Ez2 - {logs.resultEz2}</Text>
                <Text style={style.totalText}>Total: ₱{logs.total}</Text>

                <Text style={style.timeText}>9PM</Text>
                <Text style={style.logsText}>L2 - {logs.resultL2}</Text>
                <Text style={style.logsText}>S3 - {logs.resultS3}</Text>
                <Text style={style.logsText}>Ez2 - {logs.resultEz2}</Text>
                <Text style={style.totalText}>Total: ₱{logs.total}</Text>

                <Text style={style.totalText}>Grand Total: ₱{logs.gtotal}</Text>
                <Text style={style.totalText}>Additional:</Text>
                <Text style={style.totalText}>Tapada: ₱{logs.total}</Text>
                <Text style={style.totalText}>Penalty: ₱{logs.total}</Text>


            </View>
            ))}
        </View>
    </View>
  );
}

