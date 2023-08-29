import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style=
      {
        {
          color: 'red'
        }
      }>Hello World!</Text>
      <Pet type="cat"/>
      <Pet type="dog"/>
      <Pet type="duck"/>
    <Nisbi></Nisbi>
    </View>
  );
}

const voice = (type) => {
  var v= "";
  if(type=="cat"){
    v = "Meoow Meow";
  }
  else if (type=="dog"){
    v = "Woof woof";
  }
  else if(type=="duck"){
    v = "kwaak kwaak";
  }
  else if(type=="feed"){
    v = "nyam nyam";
  }
  else if(type=="cuddle"){
    v = "Zzzzz...";
  }
  return v
};

const Pet = (prop) => {
  const [action,setAction] = useState(prop.type);  
  return (
    <View>
    <Text>Iam your pet! Iam a {prop.type}. {voice(action)}</Text>
    <Button title='Feed me' onPress={()=>setAction('feed')}></Button>
    <Button title='Cuddle me' onPress={()=>setAction('cuddle')}></Button>
    <Button title='Play with me' onPress={()=>setAction(prop.type)}></Button>    
    </View>
  );
};

const Nisbi = () => {
  const [nilai,setNilai] = useState(0);
  const predikat = (nilai) => {
    return nilai > 85 ? 'Sangat Baik (A)' :
      nilai > 70 ? 'Baik (B)' :
        nilai > 55 ? 'Cukup (C)' :
          'Kurang (D)'};
  return (
    <View>
      <Text>Skor anda: {nilai} dengan predikat {predikat(nilai)}</Text>
      <Button title='nilai+5' onPress={()=>setNilai(nilai+5)}></Button>
      <Button title='nilai-5' onPress={()=>setNilai(nilai-5)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
